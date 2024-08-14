// __tests__/bookService.test.ts
const mockingoose = require('mockingoose');
import { Book, IBook } from '../../models/book';
import bookService from './bookService';

describe('BookService', () => {
    beforeEach(() => {
        mockingoose.resetAll();
    });

    it('should create a book', async () => {
        const bookData = {
            title: 'Test Book',
            author: 'Author',
            publishedYear: 2021,
            genres: ['Fiction'],
            stock: 10
        } as IBook;

        mockingoose(Book).toReturn(bookData, 'save');

        const createdBook = await bookService.createBook(bookData);

        expect(createdBook).toHaveProperty('_id');
        expect(createdBook.title).toBe(bookData.title);
        expect(createdBook.author).toBe(bookData.author);
        expect(createdBook.publishedYear).toBe(bookData.publishedYear);
        expect(createdBook.genres).toEqual(bookData.genres);
        expect(createdBook.stock).toBe(bookData.stock);
    });

    it('should get all books', async () => {
        const bookData = [{
            title: 'Test Book',
            author: 'Author',
            publishedYear: 2021,
            genres: ['Fiction'],
            stock: 10
        }];

        mockingoose(Book).toReturn(bookData, 'find');
        mockingoose(Book).toReturn(bookData.length, 'countDocuments');

        const { totalBooks, books } = await bookService.getAllBooks({}, 1, 10);

        expect(totalBooks).toBe(1);
        expect(books).toHaveLength(1);
        expect(books[0].title).toBe(bookData[0].title);
        expect(books[0].author).toBe(bookData[0].author);
        expect(books[0].publishedYear).toBe(bookData[0].publishedYear);
        expect(books[0].genres).toEqual(bookData[0].genres);
        expect(books[0].stock).toBe(bookData[0].stock);
    });

    it('should get a book by id', async () => {
        const bookData = {
            _id: '507f191e810c19729de860ea',
            title: 'Test Book',
            author: 'Author',
            publishedYear: 2021,
            genres: ['Fiction'],
            stock: 10
        };

        mockingoose(Book).toReturn(bookData, 'findOne');

        const foundBook = await bookService.getBookById(bookData._id);

        expect(foundBook).not.toBeNull();
        expect(foundBook?.title).toBe(bookData.title);
        expect(foundBook?.author).toBe(bookData.author);
        expect(foundBook?.publishedYear).toBe(bookData.publishedYear);
        expect(foundBook?.genres).toEqual(bookData.genres);
        expect(foundBook?.stock).toBe(bookData.stock);
    });

    it('should update a book', async () => {
        const bookData = {
            _id: '507f191e810c19729de860ea',
            title: 'Test Book',
            author: 'Author',
            publishedYear: 2021,
            genres: ['Fiction'],
            stock: 10
        };
        const updatedData = { title: 'Updated Title', stock: 5 };

        mockingoose(Book).toReturn(updatedData, 'findOneAndUpdate');

        const updatedBook = await bookService.updateBook(bookData._id, updatedData);

        expect(updatedBook).not.toBeNull();
        expect(updatedBook?.title).toBe('Updated Title');
        expect(updatedBook?.stock).toBe(5);
    });

    it('should delete a book', async () => {
        const bookData = {
            _id: '507f191e810c19729de860ea',
            title: 'Test Book',
            author: 'Author',
            publishedYear: 2021,
            genres: ['Fiction'],
            stock: 10
        };

        mockingoose(Book).toReturn(bookData, 'findOneAndDelete');

        const deletedBook = await bookService.deleteBook(bookData._id);

        expect(deletedBook).not.toBeNull();
        expect(deletedBook?.title).toBe(bookData.title);

        mockingoose(Book).toReturn(null, 'findOne');
        const foundBook = await bookService.getBookById(bookData._id);
        expect(foundBook).toBeNull();
    });
});