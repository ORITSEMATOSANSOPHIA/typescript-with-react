import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },[])

  //delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(data => {
      alert("Book deleted successfully")
      // setAllBooks(data);
    })
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className=' mb-8 text-3xl font-bold'> Manage Your Books</h2>
      <table className="lg:w-[1180px] min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300 ">
          <tr>
          <th className="px-4 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
            S/N
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-black  uppercase tracking-wider">
              Author
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-black  uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-black  uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-black  uppercase tracking-wider">
              Stock
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-black  uppercase tracking-wider">
              Manage
            </th>
          </tr>
        </thead>
        {
           allBooks.map((book, index) =>  <tbody className="bg-white divide-y divide-gray-500" key={book._id}>
             <tr>
          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.bookTitle}</td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{book.authorName}</td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{book.category}</td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">$10.00</td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">In Stock</td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              <Link
              className="text-cyan-600 hover:underline mr-5" to={`/admin/dashboard/edit-books/${book._id}`}
              >
              Edit
              </Link>
            <button onClick={() => handleDelete(book._id)} className='bg-red-800 px-4 py-1 font-semibold text-white rounded-sm hover:bg-gray-500'>Delete</button>
            </td>
          </tr>
           </tbody>)
          }
      </table>
    </div>
  );
};

export default ProductTable;
