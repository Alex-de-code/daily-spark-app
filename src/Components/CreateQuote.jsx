import { useState } from "react"


function MakeASpark() {
    const [inputedQuote, setInputedQuote] = useState("")
    const [inputedAuthor, setInputedAuthor] = useState("")
    const [createdQuotes, setCreatedQuotes] = useState([])



    const handleAuthorChange = (event) => {
        setInputedAuthor(event.target.value)
    }

    const handleInputChange = (event) => {
        setInputedQuote(event.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       alert(`User Input is : ${inputedAuthor}, ${inputedQuote}`)
    }

    const displayUserQuotes = () => {
        
    }


    return (
        <div className="flex-wrap pt-4 bg-blue-200 p-4 shadow-md rounded-xl h-screen mt-3">
            <h1 className="text-center text-lg ">Create Your Own Motivation !</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex-col-2">
                        <div>
                        <label htmlFor="user-name" className="block font-medium" />
                            <input type="text" 
                                   id="user-name"
                                   placeholder="Author" 
                                   value={inputedAuthor}
                                   onChange={handleAuthorChange}
                                   className="w-40 px-4 py-2 
                            border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                             <label htmlFor="user-quote" className="block font-medium "/>
                                <input id="user-quote"
                                       type="text"
                                       value={inputedQuote}
                                       onChange={handleInputChange}
                                       placeholder="Enter Quote..."
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focu:bg-blue-300 "/>

                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md
                                    hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 mt-4 ml-6">
                                                Submit</button>
                        </div>
                    </div>
                </form>
                <div>
                    <ul>
                        <li>{}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MakeASpark

