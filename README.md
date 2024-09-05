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

- ### Project Overview

This project was designed to demonstrate my proficiency in full-stack development by creating a web application using **Next.js** for the frontend and **Django** for the backend. The application serves as a dashboard that features various charts to visualize data fetched from the Django API. 

The goal was to create a seamless integration between the frontend and backend while ensuring that the application is modular, maintainable, and scalable.

### Approach and Implementation

- **Frontend with Next.js and ApexCharts**:
    - I opted for **Next.js** for the frontend due to its capabilities for server-side rendering (SSR) and static generation (SSG), which are beneficial for performance and SEO.
    - I chose **ApexCharts** for rendering the charts because of its flexibility and rich feature set, which allowed me to implement dynamic charts (Candlestick, Line, Bar, Pie) that effectively visualize data fetched from the API.
    - Each chart component was built in a modular way to ensure reusability and scalability.

- **Backend with Django and Django REST Framework**:
    - The Django backend serves as the data provider for the charts through a REST API built using **Django REST Framework**.
    - I opted for hardcoded data to fulfill the requirements of the test but structured the API endpoints in a way that would allow for easy integration with dynamic data sources in the future.
    - The backend was containerized using **Docker** to provide a consistent development and production environment.

### Thought Process

- **Modularity and Reusability**: I prioritized creating reusable components, especially on the frontend, to ensure that new features or charts can be easily added in the future.
- **Scalability**: Both the frontend and backend were structured to scale, with clean separation of concerns. The Django API can easily be expanded to include more endpoints, and the frontend can handle more complex interactions.
- **Testing**: I implemented unit tests for the key components to ensure reliability and reduce potential bugs in production. This demonstrates my focus on delivering high-quality code.
- **Docker for Consistency**: I containerized both the frontend and backend to ensure consistency across development, testing, and production environments. This would make deployment much easier and less error-prone.



