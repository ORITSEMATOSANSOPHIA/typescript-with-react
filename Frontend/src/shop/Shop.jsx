import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
    }, [])
    return (
        <div className='mt-28 px-4 lg:px-24'> 
        <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>

        <div className='grid my-12 gap-8 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
            {
                books.map(book =>   
                <Card  className='my-5'>
                    <img src={book.imageUrl} alt=""  className='h-96'/>
                    <h5 className=" my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        {book.bookTitle}
                    </p>
                    </h5>
                    <p className=" my-2 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>

                    <button className='my-3 bg-red-700 font-semibold text-red-100 py-2 rounded'>Buy Now</button>
                  </Card>)
            }
        </div>
        </div>
    );
}

export default Shop;