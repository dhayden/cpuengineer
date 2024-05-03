# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV WEBSITE_USE_DIAGNOSTIC_SERVER false
ENV WEBSITE_SITE_NAME cpuengineer
ENV WEBSITE_AUTH_ENABLED False
ENV WEBSITE_ROLE_INSTANCE_ID 0
ENV WEBSITE_HOSTNAME cpuengineer.azurewebsites.net
ENV WEBSITE_INSTANCE_ID f673f0d9d834b9e1b1a9af3085303f4dbdaafec9f8bbea963b41349b795a6ee6

# Run gunicorn when the container launches
CMD ["gunicorn", "app:create_app()", "--bind", "0.0.0.0:8000"]
