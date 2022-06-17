import { createContext, useState } from "react"

const FormContext = createContext();

function FormProvider({ children }) {
    const [id, setId] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");

    const [showForm, setShowForm] = useState(false);

    return (
        <FormContext.Provider value={{
            id, setId,
            author, setAuthor,
            title, setTitle,
            sinopse, setSinopse,
            publishedDate, setPublishedDate,
            genre, setGenre,
            price, setPrice,
            showForm, setShowForm
        }}>
            { children }
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider };