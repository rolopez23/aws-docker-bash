# download node make sure your version on your local matches the version you get
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
# install node
sudo apt-get install -y nodejs
# set up port fowarding You might need to make a change
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3100

