import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
    publishedYear: number;
    genres: string[];
    stock: number;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genres: { type: [String], required: true },
    stock: { type: Number, required: true }
});

const Book = mongoose.model<IBook>('Book', BookSchema);
export { Book, IBook };
