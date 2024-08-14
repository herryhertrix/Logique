import { body } from 'express-validator';

export const bookValidationRules = [
    body('title').isString().trim().escape(),
    body('author').isString().trim().escape(),
    body('publishedYear').isInt({ min: 1000, max: new Date().getFullYear() }),
    body('genres').isArray().customSanitizer(genres => genres.map((genre: string) => genre.trim())),
    body('stock').isInt({ min: 0 })
];