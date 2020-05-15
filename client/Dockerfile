# Use an existing docker image as a base
FROM node:alpine

# Fix CRA issue with deployment
ENV CI=true

WORKDIR /app

# Download and install a dependancy (WITH OPTIMIZATION VIA COPY COMMAND AND DOCKER BUILD CASH)
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]