// services/bookService.ts
import { Book, IBook } from '../../models/book';

class BookService {
    async createBook(bookData: IBook): Promise<IBook> {
        const book = new Book(bookData);
        return await book.save();
    }

    async getAllBooks(query: any, page: number, limit: number): Promise<{ totalBooks: number, books: IBook[] }> {
        const totalBooks = await Book.countDocuments(query);
        const books = await Book.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();
        return { totalBooks, books };
    }

    async getBookById(id: string): Promise<IBook | null> {
        return await Book.findById(id).lean();
    }

    async updateBook(id: string, updateData: Partial<IBook>): Promise<IBook | null> {
        return await Book.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteBook(id: string): Promise<IBook | null> {
        return await Book.findByIdAndDelete(id).lean();
    }
}

const bookService = new BookService();
export default bookService;