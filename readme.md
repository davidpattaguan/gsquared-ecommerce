# Technical Challenge - Car Ecommerce Node.js Express API and React.js Frontend

![Alt text](https://github.com/davidpattaguan/gsquared-ecommerce/blob/main/product-screenshots/carmmerce.png?raw=true)

## Timeframe: February 3, 12:00 to February 5 4:30 PM

## Project Overview

This project consists of a backend API developed using Node.js and Express.js, and a frontend application built with React.js. The backend provides user authentication, product listings, and order management, while the frontend displays the product listings, allows users to log in, place orders, and locate stores.

---

## Backend - Node.js (Express API)

### Backend Features

- dotenv: Loads environment variables from a .env file for secure configuration.
- Express: Web server framework to handle HTTP requests and responses.
- CORS: Manages cross-origin requests with custom configurations.
- Helmet: Enhances security by setting HTTP headers to protect against common vulnerabilities.
- Parsers: Parses incoming JSON and URL-encoded request bodies.
- Rate Limiter: Limits request frequency to protect against DoS attacks.
- Compression: Reduces response size for faster data transfer.
- API Routes: Defines API endpoints under **versioned routes (/api/v1)**.
- Error Handler: Catches and handles errors, ensuring graceful responses

### API Features

- Cached Products and Stores data
- Server Side Filtering and Pagination
- Zod Validation for Server side Validation

### Original Requirements Checklist

- [x] **Develop a REST API using Express.js**
- [x] **Implement JWT-based authentication for user login**
  - [x] Create a `POST /register` endpoint to register a new user and store data in-memory.
  - [x] Create a `POST /login` endpoint to authenticate the user and return a JWT token.
- [x] **Create the following endpoints**:
  - [x] `GET /products` – Fetch a list of available products (store data in-memory).
  - [x] `POST /order` – Create an order (authenticated users only, store data in-memory).
  - [x] `GET /stores` – Fetch store locations (integrate Google Maps API to get store details).
- [x] **Implement proper error handling and input validation**:
  - [x] Validate user inputs during registration and login.
  - [x] Handle API errors (e.g., missing data, unauthorized access, etc.).
- [x] **Implement caching for product listings (in-memory caching)**:
  - [x] Cache the product list to improve performance.
- [x] **Use environment variables for sensitive data** (e.g., JWT secret, Google Maps API key).
- [ ] **Bonus Points**:
  - [x] Implement rate limiting for APIs.
  - [ ] Add unit tests using Jest.

---

## Frontend - React.js Application

### Features

- Added a registration form as well
- Shadcn Components: A component library for building flexible and customizable UI components in React.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Fetch API: A modern way to make HTTP requests in JavaScript for fetching resources.
- Redux Toolkit: A set of tools for efficient Redux development, including state management and middleware integration

### Original Requirements Checklist

- [x] **Develop a single-page application using React.js**
- [x] **Use Redux Toolkit or React Context API for state management**
- [x] **Implement the following pages**:
  - [x] **Login Page**: Allow users to authenticate.
  - [x] **Product Listing Page**: Display available products with filters.
  - [x] **Order Page**: Let users place orders.
  - [x] **Store Locator Page**: Display store locations on Google Maps.
- [x] **Fetch data from the backend using Axios or Fetch API**:
  - [x] Get products and store locations from the API.
  - [x] Send order data to the backend.
- [x] **Use React Router for navigation**:
  - [x] Setup routes for Login, Product Listing, Order, and Store Locator pages.

---

## Setup Instructions

### Installation

### Backend

1. Clone the repository.
2. Navigate to the `backend` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root folder and add your sensitive data (e.g., JWT secret, Google Maps API key).
5. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your sensitive data ().
4. Start the development server:
   ```bash
   npm start
   ```

## Run the server 2 ways

## Via Concurrently

## Separate Backend and Frontend serve

### Running the Servers using Concurrently

1. Go back to the root folder
2. Install ts node

```bash
npm install -g ts-node
```

3. Install Nodemon

```bash
  npm i nodemon
```

2. Install dependencies:
   ```bash
   npm install
   ```
3. To start both client and server

   ```bash
   npm run dev
   ```

### : Running the Backend and Frontend Independently

1. Navigate to the `backend` folder.
2. Run

   ```bash
   npm run dev
   ```

3. Navigate to the `frontend` folder.
4. Run

   ```bash
   npm run dev
   ```

---

## Acknowledgments

- Thanks to [Google Maps API](https://developers.google.com/maps) for providing the store locator functionality.
- Thanks to the community for their open-source contributions to React, Express, and other tools used in this project.
