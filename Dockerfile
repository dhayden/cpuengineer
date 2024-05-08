# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Install Node.js
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary directory for Python backend
COPY ./app /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Set the working directory for the client to install npm dependencies
WORKDIR /app/client

# Copy the client directory
COPY ./client /app/client

# Install npm dependencies for React
RUN npm install

# Build the React application
RUN npm run build

# Go back to the main app directory
WORKDIR /app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variables
ENV WEBSITE_USE_DIAGNOSTIC_SERVER=false
ENV WEBSITE_SITE_NAME=${WEBSITE_SITE_NAME}
ENV WEBSITE_AUTH_ENABLED=False
ENV WEBSITE_ROLE_INSTANCE_ID=0
ENV WEBSITE_HOSTNAME=${WEBSITE_HOSTNAME}
ENV WEBSITE_INSTANCE_ID=${WEBSITE_INSTANCE_ID}

# Ensure the static directory exists and copy the React build to the Flask static directory
RUN mkdir -p /app/static && cp -r /app/client/build/* /app/static/

# Run gunicorn when the container launches
CMD ["gunicorn", "app:create_app()", "--bind", "0.0.0.0:8000"]
