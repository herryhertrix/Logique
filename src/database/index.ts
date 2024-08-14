import mongoose from 'mongoose'

const DB_HOST = process.env.DB_HOST || "mongodb://localhost:27017/library";

mongoose.connect(DB_HOST)

const db = mongoose.connection

export default db
