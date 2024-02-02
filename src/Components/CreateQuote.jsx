import { useState } from "react"


function MakeASpark() {
    const [inputedQuote, setInputedQuote] = useState("")
    const [inputedAuthor, setInputedAuthor] = useState("")
    const [createdQuotes, setCreatedQuotes] = useState([])
    const [selectChange, setSelectChange] = useState("")



    const handleAuthorChange = (event) => {
        setInputedAuthor(event.target.value)
    }

    const handleInputChange = (event) => {
        setInputedQuote(event.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault()

       setCreatedQuotes([
        ...createdQuotes,
        {author: inputedAuthor, quote: inputedQuote, category: selectChange}
       ])
       setInputedAuthor("")
       setInputedQuote("")
       setSelectChange("--Please Select--")

    }

    const handleSelectChange = (event) => {
        setSelectChange(event.target.value)
    }



    return (
        <div className="flex-wrap pt-4 bg-gradient-to-t from-blue-100 via-stone-600 to-rose-100 p-4 shadow-md rounded-xl h-screen mt-1 text-shadow font-semibold">
            <h1 className="text-center text-2xl mb-24 mt-6 italic">Create Your Own Motivation !</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex-col-2">
                        <div>
                        <label htmlFor="user-name" className="block font-medium" />
                            <input type="text" 
                                   required
                                   id="user-name"
                                   placeholder="Author" 
                                   value={inputedAuthor}
                                   onChange={handleAuthorChange}
                                   className="w-40 px-4 py-1 
                            border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                             <label htmlFor="user-quote" className="block font-medium "/>
                                <input id="user-quote"
                                       type="text"
                                       required
                                       value={inputedQuote}
                                       onChange={handleInputChange}
                                       placeholder="Enter Quote..."
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focu:bg-blue-300 "/>

                                        <select value={selectChange} onChange={handleSelectChange} required className="rounded-full">
                                            <option>--Please Select--</option>
                                            <option value="Forgiveness">Forgiveness</option>
                                            <option value="Growth">Growth</option>
                                            <option value="Love">Love</option>
                                            <option value="Motivational">Motivational</option>
                                            <option value="Nature">Nature</option>
                                        </select>
                                    <br />
                                <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-md
                                    hover:bg-gradient-to-t from-blue-200 via-stone-600 to-rose-100 focus:outline-none focus:ring focus:bg-blue-300 
                                    mt-4 ml-96 ">
                                                Submit</button>
                        </div>
                    </div>
                </form>
                <div className="border border-black p-4 rounded-lg m-48  text-center flex-wrap ">
                    <h2 className="mb-5 text-left text-yellow-600 text-">Your Sparks :</h2>
                    <ul>
                        {createdQuotes.map((element, index) => (
                            <li key={index}>
                                {element.quote} - {element.author}/ {element.category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MakeASpark

