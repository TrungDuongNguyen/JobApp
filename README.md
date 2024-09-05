# Web Development Coding Test: Next.js Application with Django API Integration

## Overview

This is a web application built using **Next.js** on the frontend, integrated with a **Django API** backend. The application features a dashboard displaying multiple types of charts, including a **Candlestick Chart**, **Line Chart**, **Bar Chart**, and **Pie Chart**, using **ApexCharts**.

## Features

- **Charts**: The dashboard features multiple chart types, all implemented using **ApexCharts**:
  - **Candlestick Chart**
  - **Line Chart**
  - **Bar Chart**
  - **Pie Chart**
- **Data Fetching**: Data for the charts is retrieved dynamically from a Django API (hardcoded for this test).
- **Clean and Responsive UI**: Designed with a responsive layout that adapts to different screen sizes.

## Libraries and Tools

## Setup Instructions

1. Clone the repository.
2. Navigate to the `frontend` directory and run `npm install` followed by `npm run dev`.
3. Navigate to the `backend` directory, create a virtual environment, install dependencies(python3), and run the Django server. `sudo atp install python 3` `pip install djangorestframework` `python3 manage.py runserver`
4. Access the frontend on `http://localhost:3000` and backend API on `http://localhost:8000`.


## Setup Instructions(Using Docker)

1. Clone the repository.
2. Navigate to the `Jobapp` directory and run `docker-compose up --build` 


### Frontend:
- **[Next.js](https://nextjs.org/)**: A React-based framework for server-side rendering and building web applications.
- **[ApexCharts](https://apexcharts.com/)**: A modern charting library.
  - **[react-apexcharts](https://github.com/apexcharts/react-apexcharts)**: React wrapper for ApexCharts.
  - **[apexcharts](https://github.com/apexcharts/apexcharts.js)**: Core charting library.
- **[Axios](https://axios-http.com/)** (optional): For making HTTP requests to the Django API.
- **[Tailwind CSS](https://tailwindcss.com/)** (optional): Utility-first CSS framework for building custom designs.

### Backend:
- **[Django](https://www.djangoproject.com/)**: Backend framework to serve API endpoints for chart data.
- **[Django REST Framework](https://www.django-rest-framework.org/)**: For building API endpoints in Django.



