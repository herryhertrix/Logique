// controllers/bookController.ts
import { Request, Response } from 'express';
import bookService from '../../services/book/bookService';

class BookController {
    createBook = async (req: Request, res: Response) => {
        try {
            const book = await bookService.createBook(req.body);
            res.status(201).json(book);
        } catch (error: any) {
            console.log(error)
            res.status(400).json({ message: error.message });
        }
    };

    getAllBooks = async (req: Request, res: Response) => {
        try {
            const search = req.query.search ? String(req.query.search) : '';
            const page = req.query.page ? parseInt(String(req.query.page), 10) : 1;
            const limit = req.query.limit ? parseInt(String(req.query.limit), 10) : 10;

            const query = search ? {
                $or: [
                    { title: new RegExp(search, 'i') },
                    { author: new RegExp(search, 'i') },
                    { genres: { $in: [new RegExp(search, 'i')] } }
                ]
            } : {};

            const { totalBooks, books } = await bookService.getAllBooks(query, page, limit);
            const totalPages = Math.ceil(totalBooks / limit);

            res.json({
                page,
                totalPages,
                totalBooks,
                books: books.map(book => ({
                    id: book._id,
                    title: book.title,
                    author: book.author,
                    publishedYear: book.publishedYear,
                    genres: book.genres,
                    stock: book.stock
                }))
            });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    getBookById = async (req: Request, res: Response) => {
        try {
            const book = await bookService.getBookById(req.params.id);
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    updateBook = async (req: Request, res: Response) => {
        try {
            const book = await bookService.updateBook(req.params.id, req.body);
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    deleteBook = async (req: Request, res: Response) => {
        try {
            const book = await bookService.deleteBook(req.params.id);
            if (book) {
                res.json({ message: 'Book deleted successfully' });
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };

    getBooksByParams = async (req: Request, res: Response) => {
        try {
            const search = req.query.search ? String(req.query.search) : '';
            const page = req.query.page ? parseInt(String(req.query.page), 10) : 1;
            const limit = req.query.limit ? parseInt(String(req.query.limit), 10) : 10;

            const query = search ? {
                $or: [
                    { title: new RegExp(search, 'i') },
                    { author: new RegExp(search, 'i') },
                    { genres: { $in: [new RegExp(search, 'i')] } }
                ]
            } : {};

            const { totalBooks, books } = await bookService.getAllBooks(query, page, limit);
            const totalPages = Math.ceil(totalBooks / limit);

            res.json({
                page,
                totalPages,
                totalBooks,
                books: books.map(book => ({
                    id: book._id,
                    title: book.title,
                    author: book.author,
                    publishedYear: book.publishedYear,
                    genres: book.genres,
                    stock: book.stock
                }))
            });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };
}

const bookController = new BookController();
export default bookController;
