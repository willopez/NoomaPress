FROM node:8.7-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install dependencies
COPY package.json package-lock.json ./

RUN npm install
RUN npm run build

# Expose bound port
EXPOSE 80

CMD [ "npm", "start" ]
