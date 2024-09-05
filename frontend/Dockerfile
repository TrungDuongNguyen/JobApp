# frontend/Dockerfile

# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the app's code into the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the Next.js development server
CMD ["npm", "run", "dev"]
