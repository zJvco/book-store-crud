import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ActionTableButton from "./Buttons/ActionTableButton";
import MoreInfoBookButton from "./Buttons/MoreInfoBookButton";

import api from "../services/api";

import { convertDatetimeToLocaleDateStringFormat } from "../utils/dateHandler";

import "../styles/BooksTable.css";

function BookTable() {
    const [bookList, setBookList] = useState([]);

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

    const handleEditButton = () => {

    }

    const handleDeleteButton = async (bookId) => {
        try {
            const res = await api.delete("/book/" + bookId);
            
            setBookList(
                bookList.filter(book => {
                    if (book.id == bookId) {
                        return;
                    }

                    return book;
                })
            );

            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    const handleMoreInfoButton = () => {

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
                                            <ActionTableButton onClick={() => handleEditButton} type="edit">EDIT</ActionTableButton>
                                            <ActionTableButton onClick={() => handleDeleteButton(book.id)} type="remove">DEL</ActionTableButton>
                                        </td>
                                        <td>
                                            <MoreInfoBookButton onClick={handleMoreInfoButton}>
                                                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                            </MoreInfoBookButton>
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