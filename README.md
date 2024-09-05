# Full Stack Application with Next.js Frontend and Django Backend

## Project Overview

This project consists of a **Next.js** frontend and a **Django** backend. The entire environment is containerized using **Docker**, making it easy to set up and deploy.

### Features

- **Next.js Frontend**: Dynamic dashboard displaying various charts using ApexCharts.
- **Django Backend**: REST API for serving data, with endpoints returning chart data.
- **Dockerized Environment**: Easy setup with Docker Compose for running the frontend, backend, and database.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- **Docker Desktop**: Required to run Docker containers. You can download it [here](https://www.docker.com/products/docker-desktop).
  - Make sure **WSL 2** is installed and configured if you're using Windows.
- **Node.js**: If you want to run the frontend outside of Docker, you’ll need Node.js installed locally. You can download it [here](https://nodejs.org/en/).
- **Python 3.x**: Required if you want to run the backend outside of Docker. You can download it [here](https://www.python.org/downloads/).

---

## Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/TrungDuongNguyen/JobApp
cd your-project-folder

docker-compose up --build