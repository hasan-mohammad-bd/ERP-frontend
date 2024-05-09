# Use Node.js as a base image
FROM node:latest as build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
# RUN yarn install

# Copy all files to the working directory
COPY . .

# Build the React app
# RUN yarn build

# Use NGINX as a base image for serving the static files
FROM nginx:alpine

# Copy the built app to NGINX's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
