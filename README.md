# LeafyLoot

![LeafyLoot Frontend](https://i.imgur.com/YvT9XxM.png)

## Frontend

### Overview

LeafyLoot's frontend is a dynamic React application styled using Tailwind CSS. The design, initially crafted in Figma, was converted into code with the aid of AI technology and further refined to ensure a responsive and functional website.

### Features

- **React with JavaScript**: Provides a dynamic user experience.
- **Tailwind CSS**: Used for efficient styling.
- **AI-Generated Design**: Initial design created in Figma, transformed into code using AI.
- **Backend Integration**: Seamlessly interacts with the LeafyLoot backend for data retrieval and management.

### Getting Started

To get started with the frontend:

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Configure the backend API endpoint to connect to your LeafyLoot backend.
4. Start the development server using `npm start`.

### Usage

#### Home Page

Upon opening the app, the Home Page displays a list of products.

1. **Enter Amazon URL**: Add an Amazon product URL in the product addition form.
2. **Scrape Product Data**: Click "Scrape" to fetch details like name, price, and more.
3. **View Product Details**: After scraping, view detailed product information on the Product Page.

#### Product Page

- **Track Price**: Enter your email for price change notifications.
- **Product Details**: Explore product descriptions, images, and specifications.
- **Discover Similar Products**: Find products similar to the tracked one.

## Backend

### Overview

LeafyLoot's backend, built with Node.js, stores data in MongoDB. It includes a web scraper for data retrieval from Amazon, implementing Bright Data's IP rotation for security and a cron job for automation.

### Features

- **Node.js**: Provides a fast server environment.
- **MongoDB**: Ensures reliable data storage.
- **Web Scraper**: Gathers data from Amazon.
- **Bright Data IP Rotation**: Prevents IP banning.
- **Cron Job**: Automates data scraping processes.

### Getting Started

To start using the backend:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure MongoDB connection details.
4. Set up Bright Data IP rotation.
5. Start the server using `npm start`.

### API Documentation

#### Products API Endpoints

- `GET /api/v1/products/`: Get all products.
- `GET /api/v1/products/:productId`: Get a specific product by ID.
- `GET /api/v1/products/similar-to/:productId`: Get similar products.
- `POST /api/v1/products/scrape`: Scrape and save product data.
- `POST /api/v1/products/add-email`: Add user email for product updates.

#### Cron API Endpoint

- `GET /api/v1/cron/`: Execute scheduled tasks.

---

The LeafyLoot application combines the frontend's intuitive user interface with the backend's robust data handling and automation, delivering a seamless user experience.
