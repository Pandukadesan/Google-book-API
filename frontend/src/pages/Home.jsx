import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {

    const [books,setallbooks] = useState([]);
    const [bookName,setBookName] = useState("");

    useEffect(() => {
        if (bookName) {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=40&key=AIzaSyA_eOlk35zRX49k4d2AqpV1vrVQro-7TwU`)
                .then((res) => {
                    console.log(res.data);
                    setallbooks(res.data.items); 
                })
                .catch((err) => {
                    console.log(err.message);
                }); 
        }
    
        
    }, [bookName]); // Effect will run when bookName changes

    

  return (
    <div className="bg-gray-100 min-h-screen p-6">
    <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Book Search</h1>

        <div className="flex justify-center mb-6">
            <input
                className="p-3 w-1/2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="Enter a Book Name"
                onChange={(e) => setBookName(e.target.value)}
            />
        </div>

        {/* Book Store Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="w-full h-80 mb-4">
                        <img 
                            className="w-full h-full object-contain rounded-lg" 
                            src={book.volumeInfo.imageLinks?.thumbnail} 
                            alt={book.volumeInfo.title} 
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">{book.volumeInfo.title}</h2>
                    <h3 className="text-md text-gray-600 mb-2">{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "Unknown Author"}</h3>
                    <p className="text-gray-600">{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + "..." : "No description available."}</p>
                </div>
            ))}
        </div>
    </div>
</div>
        
    
  )
}

export default Home;