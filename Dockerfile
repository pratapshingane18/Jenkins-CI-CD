# Use the official Node.js image
FROM node:14-alpine

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install --production

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
CMD ["npm", "start"]

# Inform Docker that the container listens on the specified port
EXPOSE 3000
