import {React, useState} from 'react'
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams, } from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl } = useLoaderData();

    
  const bookCategory = [
    'Action',
    'Business',
    'Crime',
    'Drama',
    'Fantasy',
    'Fiction',
    'Historical',
    'Horror',
    'Bibliography',
    'Literature',
    'Mystery',
    'Non-Fiction',
    'programming',
    'Romance',
    'Sci-Fi',
    'Suspense',
    'Thriller',
    'Young Adult',
    'Art',
    'Autobiography',
    'Biography',
    'Cookbook',
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategory[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submit
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    
    
    const updateBookObj = {
      bookTitle, authorName, imageUrl, category,  bookDescription, bookPdfUrl,
    } 

    // console.log(bookObj)
//updateBookdata
    fetch(`http://localhost:5000/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book Updated successfully!!!")
       })
  }

  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>
    Update Book Data</h2>

    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap ">
      {/**first row */}
     <div className='flex gap-8'>
     <div className='lg:w-1/2 '> 
        <div className="mb-2 block ">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="BookTitle"
        name='bookTitle' type="bookTitle" placeholder="Book name" requiredtype="text" defaultValue={bookTitle}/>
      </div>
      {/* authors name */}
      <div className='lg:w-1/2 '>
        <div className="mb-2 block ">
          <Label htmlFor="authorName" 
          value="Author Name" />
        </div>
        <TextInput id="authorName"
        name='authorName' type="authorName" 
        placeholder="Author name" 
        requiredtype="text"
        defaultValue={authorName}/>
      </div>
    
     </div>

     {/* second row */}
     <div className='flex gap-8 mt-5'>
     <div className='lg:w-1/2 '>
        <div className="mb-2 block ">
          <Label htmlFor="imageUrl" value="Book imageUrl" />
        </div>
        <TextInput id="imageUrl"
        name='imageUrl' type="imageUrl" placeholder="Book imageUrl" requiredtype="text" defaultValue={imageUrl}/>
      </div>
      {/* category name */}
      <div className='lg:w-1/2 '>
        <div className="mb-2 block ">
          <Label htmlFor="inputState" 
          value=" Book Category" />
        </div>

        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategory.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
      </div>
     </div>

     {/* book description */}
     <div>
     <div className="mb-2 mt-5 block">
          <Label htmlFor="bookDescription" value="Book Desription" />
        </div>
        <Textarea
          id="bookDescription"
          name="bookDescription"
          placeholder="Write your book Description"
          required
          className="w-full"
          rows={8}
          defaultValue={bookDescription}
        />
        </div>

      {/**book pdf link */}
      <div className=''>
      <div className="mb-2  mt-5 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF Url"  />
        </div>
        <TextInput id="bookPdfUrl" 
        name="bookPdfUrl" 
        placeholder="book Pdf Url" requiredtype="text" defaultValue={bookPdfUrl}/>
      </div>

      <Button type="submit" className='mb-5 mt-5 justify-center text-white bg-gray-700'>Update Book</Button>

    </form>
    </div>
  )
}

export default EditBooks
