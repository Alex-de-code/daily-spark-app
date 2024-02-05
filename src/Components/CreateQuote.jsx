import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import SparkSVG from "./SparkSVG"
import TrashCan from "./TrashCan"


const URL = import.meta.env.VITE_BASE_API_URL;

function MakeASpark() {

const navigate = useNavigate()

    const [inputedQuote, setInputedQuote] = useState("")
    const [inputedAuthor, setInputedAuthor] = useState("")
    const [createdQuotes, setCreatedQuotes] = useState([])
    const [selectChange, setSelectChange] = useState("")
    const [userQuote, setUserQuote] = useState({
        id:"",
        author:"",
        content:"",
        category:"",
        image: null
    });



    const handleAuthorChange = (event) => {
        setInputedAuthor(event.target.value)
    }

    const handleInputChange = (event) => {
        setInputedQuote(event.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault()

      const newQuote =
        {
         id:"",
         author: inputedAuthor,
         content: inputedQuote,
         category: selectChange,
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yZTQ5VqaJcVtWqmZtZ4A_M64XSf35wiwOvo8zmulMXjM45teJIMjRYXTwbEjlcKrnBg&usqp=CAU"
        }

       setCreatedQuotes([...createdQuotes, newQuote])
       
       setInputedAuthor("")
       setInputedQuote("")
       setSelectChange("--Please Select--")


       const options = {
        method: "POST",
        body: JSON.stringify(newQuote),
        headers: {"Content-Type": "application/json"}
       }

       fetch(`${URL}/quotes`, options)
       .then((res) => res.json())
       .then(data => {
        console.log("Success:", data)
       })
       .catch((error) => {
        console.error('Error:', error)
       })

       
    }

    const handleDelete = (element) => {
        const options = {
            method:"DELETE",
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    
        fetch(`${URL}quotes/${element.id}`, options)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to delete')
            }
             return res.json()
        })
        .then(() => {
            setCreatedQuotes(createdQuotes.filter((quote) => quote.id !== element))
        })
        .catch((error) => console.error('Error', error))
    }



    const handleSelectChange = (event) => {
      setSelectChange(event.target.value)
    }






    return (
        <div className="pt-4 bg-gradient-to-t from-blue-100 via-stone-300 to-rose-100 p-4 shadow-md rounded-xl h-screen mt-1 text-shadow font-semibold">
            <h1 className="text-center text-2xl mb-24 mt-6 italic">Create Your Own Motivation !</h1>
            <div className="border border-black mx-4 my-2 p-4 rounded-lg h-screen">
                <div className="flex">
                    <form onSubmit={handleSubmit} className="flex w-full">
                        <div className="flex-grow">
                            <label htmlFor="user-quote" className="block font-medium"/>
                            <textarea id="user-quote"
                                   required
                                   value={inputedQuote}
                                   onChange={handleInputChange}
                                   placeholder="Enter Quote..."
                                   rows="4"
                                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none h-48"/>
                        </div>
                        <div className="flex flex-col space-y-4 ml-4">
                            <textarea type="text" 
                                   required
                                   id="user-name"
                                   placeholder="Author" 
                                   value={inputedAuthor}
                                   onChange={handleAuthorChange}
                                   className="px-4 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none"/>
                            <select value={selectChange} onChange={handleSelectChange} required className="rounded-full">
                                <option>--Please Select--</option>
                                <option value="Forgiveness">Forgiveness</option>
                                <option value="growth">Growth</option>
                                <option value="Love">Love</option>
                                <option value="Motivational">Motivational</option>
                                <option value="Nature">Nature</option>
                            </select>
                            <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring mt-4">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-6 border border-slate-300 bg: bg-slate-200 rounded-full  ml-2 max-h-fit">
                    <h2 className="mb-5 text-center text-yellow-600">Your Sparks :</h2>
                    <ul>
                        {createdQuotes.map((element, index) => (
                            <li key={index}
                            className="text-center p-2 mx-24 my-1 bg-white bg-opacity-50 rounded-lg shadow-md grid  items-center justify-center gap-2">
                             {element.quote} - {element.author}:{element.category}
                             <button onClick={handleDelete} className="hover:text-green-600">
                                Remove
                             </button>
                            </li>
                        ))}
                        
                    </ul>
                  </div>
            </div>
        </div>
    );
  }

  export default MakeASpark


