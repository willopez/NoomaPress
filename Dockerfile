ARG NODE_VER

FROM keymetrics/pm2:${NODE_VER}

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install dependencies
RUN npm install
RUN npm run build

# Expose bound port
EXPOSE 80

CMD [ "pm2-docker", "start", "pm2.json" ]