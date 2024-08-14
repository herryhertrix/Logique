# Use the official Node.js image.
# Use the latest LTS (long-term support) version of Node.js
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["node", "dist/src/main.js"]