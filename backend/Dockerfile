# backend/Dockerfile

# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port Django will run on
EXPOSE 8000

# Command to run Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
