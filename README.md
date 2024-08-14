# Book Management API

This is a Node.js and TypeScript-based API for managing books, using MongoDB as the database and Jest for testing. The project is set up with various scripts to facilitate development, testing, and deployment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-management-api.git
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
    PORT=3000
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
```

To start the server in development mode:

```bash
npm run dev
```

The server will run on `http://localhost:3000`.

### API Endpoints

#### Create a Book

- **URL:** `/api/books`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "title": "Book Title",
        "author": "Author Name",
        "publishedYear": 2021,
        "genres": ["Genre1", "Genre2"],
        "stock": 10
    }
    ```
- **Response:**
    ```json
    {
        "_id": "book_id",
        "title": "Book Title",
        "author": "Author Name",
        "publishedYear": 2021,
        "genres": ["Genre1", "Genre2"],
        "stock": 10
    }
    ```

#### Get All Books

- **URL:** `/api/books`
- **Method:** `GET`
- **Query Params:**
    - `search` (optional)
    - `page` (optional, default: 1)
    - `limit` (optional, default: 10)
- **Response:**
    ```json
    {
        "page": 1,
        "totalPages": 1,
        "totalBooks": 1,
        "books": [
            {
                "id": "book_id",
                "title": "Book Title",
                "author": "Author Name",
                "publishedYear": 2021,
                "genres": ["Genre1", "Genre2"],
                "stock": 10
            }
        ]
    }
    ```

#### Get a Book by ID

- **URL:** `/api/books/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "_id": "book_id",
        "title": "Book Title",
        "author": "Author Name",
        "publishedYear": 2021,
        "genres": ["Genre1", "Genre2"],
        "stock": 10
    }
    ```

#### Update a Book

- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Body:**
    ```json
    {
        "title": "Updated Title",
        "stock": 5
    }
    ```
- **Response:**
    ```json
    {
        "_id": "book_id",
        "title": "Updated Title",
        "author": "Author Name",
        "publishedYear": 2021,
        "genres": ["Genre1", "Genre2"],
        "stock": 5
    }
    ```

#### Delete a Book

- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "message": "Book deleted successfully"
    }
    ```

## Testing

### Running Tests

To run the tests:

```bash
npm test
```

To run tests with coverage:

```bash
npm run test:coverage
```

To run tests in CI mode:

```bash
npm run test:ci
```

### Linting and Formatting

To lint the code:

```bash
npm run lint
```

To format the code:

```bash
npm run format
```

To check formatting:

```bash
npm run format:check
```

## Project Structure

```
.
├── src
│   ├── controllers
│   │   └── bookController.ts
│   ├── models
│   │   └── book.ts
│   ├── services
│   │   └── bookService.ts
│   ├── routes
│   │   └── bookRoutes.ts
│   └── main.ts
├── __tests__
│   ├── bookController.test.ts
│   └── bookService.test.ts
├── .env
├── package.json
├── tsconfig.json
├── tsconfig.build.json
└── jest.config.js
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` file provides an overview of the project, including instructions for installation, usage, API endpoints, testing, and more. Adjust the content as needed to fit your specific project details.