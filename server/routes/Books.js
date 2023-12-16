const express=require("express");
const { ObjectId } = require('mongodb');
const router=express.Router();
const Book=require("./../models/book");

//getting all the books data from my db to show it on booklist page
router.get('/', async (req, res) => {
  try {
    const booksData = await Book.find({}, { _id: 1, title: 1, author: 1, rating: 1, date: 1 });
    res.json(booksData);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//sending the details taken from the form to the db
router.post('/addBook',(req,res)=>
{
  const {title,author,rating,date,notes}=req.body;
 
  const newBook = new Book({
    title,
    author,
    rating,
    date,
    notes
  });
  const savedBook = newBook.save();
    res.json(savedBook);

}
);

// getting a particular book from the db 
router.get('/:id', async (req, res) => {
  const bookId = req.params.id;
  const objectId = new ObjectId(bookId);
  
  try {
    const book = await Book.findById(objectId,{_id: 1, title: 1, author: 1, rating: 1, date: 1,notes:1});

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//deleting a Book
router.delete('/:id',async(req,res)=>{
  const bookId=req.params.id;
  try{
    const deletedBook=await Book.findByIdAndDelete(bookId);
    res.json({message:"Book Deleted Succesfully"})
  }
  catch(err){
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// updating a note
router.put('/:id', async (req, res) => {
  const bookId = req.params.id;
  const { notes } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { $set: { notes } }, // Use $set to update only the specified fields
      { new: true } 
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error('Error updating notes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
