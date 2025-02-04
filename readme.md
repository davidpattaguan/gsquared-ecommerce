# Node.js Express API and React.js Frontend

## Project Overview

This project consists of a backend API developed using Node.js and Express.js, and a frontend application built with React.js. The backend provides user authentication, product listings, and order management, while the frontend displays the product listings, allows users to log in, place orders, and locate stores on a map.

---

## Backend - Node.js (Express API)

### Requirements

- [ ] **Develop a REST API using Express.js**
- [ ] **Implement JWT-based authentication for user login**
  - [ ] Create a `POST /register` endpoint to register a new user and store data in-memory.
  - [ ] Create a `POST /login` endpoint to authenticate the user and return a JWT token.
- [ ] **Create the following endpoints**:
  - [ ] `GET /products` – Fetch a list of available products (store data in-memory).
  - [ ] `POST /order` – Create an order (authenticated users only, store data in-memory).
  - [ ] `GET /stores` – Fetch store locations (integrate Google Maps API to get store details).
- [ ] **Implement proper error handling and input validation**:
  - [ ] Validate user inputs during registration and login.
  - [ ] Handle API errors (e.g., missing data, unauthorized access, etc.).
- [ ] **Implement caching for product listings (in-memory caching)**:
  - [ ] Cache the product list to improve performance.
- [ ] **Use environment variables for sensitive data** (e.g., JWT secret, Google Maps API key).
- [ ] **Bonus Points**:
  - [ ] Implement rate limiting for APIs.
  - [ ] Add unit tests using Jest.

---

## Frontend - React.js Application

### Requirements

- [ ] **Develop a single-page application using React.js**
- [ ] **Use Redux Toolkit or React Context API for state management**
- [ ] **Implement the following pages**:
  - [ ] **Login Page**: Allow users to authenticate.
  - [ ] **Product Listing Page**: Display available products with filters.
  - [ ] **Order Page**: Let users place orders.
  - [ ] **Store Locator Page**: Display store locations on Google Maps.
- [ ] **Fetch data from the backend using Axios or Fetch API**:
  - [ ] Get products, user info, and store locations from the API.
  - [ ] Send order data to the backend.
- [ ] **Use React Router for navigation**:
  - [ ] Setup routes for Login, Product Listing, Order, and Store Locator pages.

---

## Setup Instructions

### Backend

1. Clone the repository.
2. Navigate to the `backend` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add your sensitive data (e.g., JWT secret, Google Maps API key).
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
3. Start the development server:
   ```bash
   npm start
   ```

---

## Testing

- For backend unit tests, use Jest:
  ```bash
  npm run test
  ```
- For frontend, run tests using Jest or React Testing Library.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to [Google Maps API](https://developers.google.com/maps) for providing the store locator functionality.
- Thanks to the community for their open-source contributions to React, Express, and other tools used in this project.
