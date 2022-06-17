<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";

import { FormContext } from "../context/FormContext";
import { AlertContext } from "../context/AlertContext";

import api from "../services/api";

import "../styles/BookForm.css";

function BookForm() {
    const [editMode, setEditMode] = useState(false);

    const {
        id,
        author, setAuthor,
        title, setTitle,
        sinopse, setSinopse,
        publishedDate, setPublishedDate,
        genre, setGenre,
        price, setPrice,
        setShowForm
    } = useContext(FormContext);

    const { setAlert } = useContext(AlertContext);

    useEffect(() => {
        if (id) {
            setEditMode(true);
        }
    }, [id]);

    const handleCancelButton = () => {
        setShowForm(false);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!editMode) {
            createBook();
        } else {
            updateBook();
        }
    }

    const createBook = async () => {
        try {
            const res = await api.post("/book", {
                author: author,
                title: title,
                sinopse: sinopse,
                published_date: publishedDate,
                genre: genre,
                price: price
            });

            setAlert({
                message: res.data.message,
                type: "success"
            });
        } catch (error) {
            setAlert({
                message: error.response.data.message,
                type: "warning"
            });
        }
    }

    const updateBook = async () => {
        try {
            const res = await api.put("/book/" + id, {
                author: author,
                title: title,
                sinopse: sinopse,
                published_date: publishedDate,
                genre: genre,
                price: price
            });

            setAlert({
                message: res.data.message,
                type: "success"
            })
        } catch (error) {
            setAlert({
                message: error.response.data.message,
                type: "warning"
            });
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="input-field">
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
            </div>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="input-field">
                <label htmlFor="sinopse">Sinopse</label>
                <textarea
                    name="sinopse"
                    id="sinopse"
                    cols="30"
                    rows="10"
                    value={sinopse}
                    onChange={e => setSinopse(e.target.value)}
                ></textarea>
            </div>
            <div className="input-container">
                <div className="input-field">
                    <label htmlFor="published-date">Published Date</label>
                    <input
                        type="date"
                        name="published_date"
                        id="published-date"
                        value={publishedDate}
                        onChange={e => setPublishedDate(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="genre">Genre</label>
                    <select
                        name="genre"
                        id="genre"
                        defaultValue={genre}
                        onChange={e => setGenre(e.target.value)}
                    >
                        <option value="" disabled></option>
                        <option value="action">Action</option>
                        <option value="romance">Romance</option>
                        <option value="comedy">Comedy</option>
                        <option value="science fiction">Science Fiction</option>
                        <option value="suspense">Suspense</option>
                        <option value="terror">Terror</option>
                    </select>
                </div>
            </div>
            <div className="input-field">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>
            <div className="submit-field">
                <input type="button" className="cancel-book-btn" value="CANCEL" onClick={handleCancelButton} />
                <input type="submit" className="create-book-btn" value="CREATE" />
            </div>
=======
function BookForm() {
    return (
        <form>
            Hello
>>>>>>> 906d74bf79d769ce03acb5cebcaeee994913f045
        </form>
    );
}

export default BookForm;