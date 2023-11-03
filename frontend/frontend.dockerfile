# We don't want to start from scratch.
# That is why we tell node here to use the current node image as base.
FROM node:alpine3.11

# The /app directory should act as the main application directory
WORKDIR /app/frontend

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . .

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 5173

# Start the app
CMD [ "npm", "start" ]

