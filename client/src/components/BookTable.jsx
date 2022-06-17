import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { convertDatetimeToLocaleDateStringFormat, convertSlashInHyphen } from "../utils/dateHandler";

import { FormContext } from "../context/FormContext";
import { AlertContext } from "../context/AlertContext";
import { MoreInfoScreenContext } from "../context/MoreInfoScreenContext";

import api from "../services/api";

import "../styles/BooksTable.css";

function BookTable() {
    const [bookList, setBookList] = useState();

    const {
        setId,
        setAuthor,
        setTitle,
        setSinopse,
        setPublishedDate,
        setGenre,
        setPrice,
        setShowForm
    } = useContext(FormContext);

    const { setAlert } = useContext(AlertContext);

    const { setShowMoreInfoScreen } = useContext(MoreInfoScreenContext);

    useEffect(() => {
        (async () => {
            try {
                const res = await api.get("/book");
    
                setBookList(res.data);
            } catch (error) {
                console.error(error)
            }
        })();
    }, []);

    const handleEditButton = (book) => {
        setId(book.id);
        setAuthor(book.author);
        setTitle(book.title);
        setSinopse(book.sinopse);
        setPublishedDate(convertSlashInHyphen(new Date(book.published_date).toISOString().slice(0, 10)));
        setGenre(book.genre);
        setPrice(book.price);

        setShowForm(true);
    }

    const handleDeleteButton = async (bookId) => {
        try {
            const res = await api.delete("/book/" + bookId);

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

        setBookList(
            bookList.filter(book => {
                if (book.id == bookId) {
                    return;
                }

                return book;
            })
        );
    }

    const handleMoreInfoButton = (book) => {
        setId(book.id);
        setAuthor(book.author);
        setTitle(book.title);
        setSinopse(book.sinopse);
        setPublishedDate(convertSlashInHyphen(new Date(book.published_date).toISOString().slice(0, 10)));
        setGenre(book.genre);
        setPrice(book.price);

        setShowMoreInfoScreen(true);
    }

    return (
        <>
            {
                !bookList || bookList.length === 0 ? (
                    <span>Books not found</span>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Created</th>
                                <th>Updated</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map(book => {
                                return (
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.author}</td>
                                        <td>{book.title}</td>
                                        <td>{book.price}</td>
                                        <td>{convertDatetimeToLocaleDateStringFormat(book.created_date)}</td>
                                        <td>{convertDatetimeToLocaleDateStringFormat(book.updated_date)}</td>
                                        <td>
                                            <button className="edit-book-btn" onClick={() => handleEditButton(book)}>
                                                EDIT
                                            </button>
                                            <button className="edit-book-btn" onClick={() => handleDeleteButton(book.id)}>
                                                DEL
                                            </button>
                                        </td>
                                        <td>
                                            <button className="more-info-book-button" onClick={() => handleMoreInfoButton(book)}>
                                                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )
            }
        </>
    );
}

export default BookTable;