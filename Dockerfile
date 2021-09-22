# Recipe for a new image
# Lets start with node
FROM node:16
# Set up our structure
RUN mkdir -p /app
# Copy files everything in same as docker folder
# Copy to the app directory
COPY . /app
# Make sure I am in the right directory
WORKDIR /app
# Install all the npm dependencies
RUN npm install
# Create bundle
RUN npm run react-prod
# Expose a port
EXPOSE 3100
# Setup server
CMD ['node', 'server/server.js']