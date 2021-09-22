//Proxy server example 
//Axios for api requests
const axios = require('axios');

//We will define a function that takes our url forwards to axios and responds
const proxyAtelier = async (req, res) => {
  const { method } = req
  let { body, url } = req;
  // verify body is not empty
  if(Object.keys(body).length === 0) {
    body = null;
  }
  //construct final url keep it as an environment variable
  url = process.env.BASE_URL + url;
  //define config for axios
  const config = {
    url,
    method,
    headers: {'Authorization': process.env.API_TOKEN},
    data: body
  }
  //try and send a request
  try {
    //remember you normally await promises
    const response = await axios(config);
    res.status(response.status).send(response.data)
  } catch (err) {
    //improvement is parsing error code off the response to be better
    res.status(500).send(err)
  }
}

module.exports = proxyAtelier;