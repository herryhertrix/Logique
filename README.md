# Book Management API

This is a Node.js and TypeScript-based API for managing books, using MongoDB as the database and Jest for testing. The project is set up with various scripts to facilitate development, testing, and deployment.

## Table of Contents

- [Book Management API](#book-management-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
    - [Create a Book](#create-a-book)
    - [Get All Books](#get-all-books)
    - [Get Book by ID](#get-book-by-id)
    - [Update a Book](#update-a-book)
    - [Delete a Book](#delete-a-book)
  - [Testing](#testing)
    - [Running Tests](#running-tests)
    - [Linting and Formatting](#linting-and-formatting)
  - [Docker](#docker)
    - [Building and Running with Docker](#building-and-running-with-docker)
    - [Using Docker Compose](#using-docker-compose)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/herryhertrix/book-management-api.git
    cd book-management-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of your project and add the following:

    ```env
    MONGO_URI=mongodb://localhost:27017/bookmanagement
    PORT=8080
    ```

4. Build the project:

    ```bash
    npm run build
    ```

## Usage

### Running the Server

To start the server in production mode:

```bash
npm start