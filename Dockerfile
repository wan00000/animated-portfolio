# Step 1: Use the Node.js base image from Docker Hub
FROM node:18.17.0-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies inside the container
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose port 3000 (Next.js default)
EXPOSE 3000

# Step 7: Run the Next.js app
CMD ["npm", "run", "dev"]
