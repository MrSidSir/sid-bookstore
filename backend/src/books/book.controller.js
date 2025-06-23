const mongoose = require('mongoose');
const Book = require("./book.model");

// 📌 Create a new book and save it in MongoDB
const postABook = async (req, res) => {
  try {
    // ➤ Create a new book instance with data from request body
    const newBook = new Book({ ...req.body });

    // ➤ Save the book to the database
    await newBook.save();

    // ➤ Send success response
    res.status(200).send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to create book", error });
  }
};

// 📌 Get all books from database (sorted by latest)
const getAllBooks = async (req, res) => {
  try {
    // ➤ Fetch all books sorted by creation date (descending)
    const books = await Book.find().sort({ createdAt: -1 });

    // ➤ Send book list
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

// 📌 Get a single book by its MongoDB ID
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;

    // ➤ Validate MongoDB ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid book ID format" });
    }

    // ➤ Fetch the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book not found!" });
    }

    // ➤ Send book data
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching book", error);
    res.status(500).send({ message: "Failed to fetch book", error });
  }
};

// 📌 Update an existing book by its ID
const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;

    // ➤ Update book data using req.body and return the updated book
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found!" });
    }

    // ➤ Send updated book data
    res.status(200).send({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error updating book", error);
    res.status(500).send({ message: "Failed to update book" });
  }
};

// 📌 Delete a book by its ID
const deleteABook = async (req, res) => {
  try {
    const { id } = req.params;

    // ➤ Find the book by ID and delete it
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found!" });
    }

    // ➤ Send confirmation of deletion
    res.status(200).send({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error("Error deleting book", error);
    res.status(500).send({ message: "Failed to delete book" });
  }
};

// ✅ Export all controller functions for use in routes
module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  deleteABook
};
