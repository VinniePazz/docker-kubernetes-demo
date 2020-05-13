# Use an existing docker image as a base
FROM node:alpine

WORKDIR /app

# Download and install a dependancy
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]