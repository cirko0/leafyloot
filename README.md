# [LeafyLoot](https://leafyloot.netlify.com)

![web-site](https://i.imgur.com/YvT9XxM.png)

Welcome to the LeafyLoot backend repository! This Node.js application is responsible for handling data storage, web scraping, and more.

## Overview

LeafyLoot's backend is built with Node.js, and it stores data in a MongoDB database. Additionally, I have implemented a web scraping feature to retrieve data from Amazon's website, while ensuring I don't get banned by using an IP rotation service provided by Bright Data. To automate the scraping process, I've integrated a cron job.

## Features

- **Node.js**: The backend is developed using Node.js, ensuring a fast and efficient server.
- **MongoDB**: All data is stored in a MongoDB database, providing a reliable data storage solution.
- **Web Scraper**: I have implemented a web scraper to collect data from Amazon.
- **Bright Data IP Rotation**: To prevent IP banning, I've integrated Bright Data's IP rotation service.
- **Cron Job**: I've automated the data scraping process using a cron job.

## Getting Started

To get started with the backend, follow these steps:

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Set up your MongoDB connection details.
4. Configure the Bright Data IP rotation service.
5. Start the server using `npm start`.

## API Documentation

This documentation provides details about the API endpoints available in the LeafyLoot backend for version 1 (`api/v1`).

## Products API Endpoint

### Get All Products

- **Endpoint**: `GET /api/v1/products/`
- **Description**: Get a list of all products.
- **Response**: A JSON array of products.

### Get Product by ID

- **Endpoint**: `GET /api/v1/products/:productId`
- **Description**: Get a specific product by its unique ID.
- **Parameters**:
  - `productId` (string): The unique ID of the product.
- **Response**: A JSON object representing the product.

### Get Similar Products

- **Endpoint**: `GET /api/v1/products/similar-to/:productId`
- **Description**: Get a list of products that are similar to the specified product.
- **Parameters**:
  - `productId` (string): The unique ID of the product.
- **Response**: A JSON array of similar products.

### Scrape and Save Product

- **Endpoint**: `POST /api/v1/products/scrape`
- **Description**: Scrapes product data from a source and saves it to the database.
- **Request Body**: A JSON object with data required for scraping.
- **Response**: A JSON object confirming the success of the scraping and saving process.

### Add User Email to Product

- **Endpoint**: `POST /api/v1/products/add-email`
- **Description**: Add a user's email to receive updates about a specific product.
- **Request Body**: A JSON object with user email and product information.
- **Response**: A JSON object confirming the addition of the user's email to the product.

## Cron API Endpoint

### Execute Cron Job

- **Endpoint**: `GET /api/v1/cron/`
- **Description**: Trigger a cron job to perform scheduled tasks.
- **Response**: A JSON object indicating the status and results of the cron job.
