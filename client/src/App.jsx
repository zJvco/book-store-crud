import { useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import BookTable from "./components/BookTable";
import BookForm from "./components/BookForm";
import Alert from "./components/Alert";
import MoreInfoScreen from "./components/MoreInfoScreen";

import { FormContext } from "./context/FormContext";
import { AlertContext } from "./context/AlertContext";
import { MoreInfoScreenContext } from "./context/MoreInfoScreenContext";

import "./styles/App.css";

library.add(
    faCircleInfo
)

function App() {
    const {
        setId,
        setAuthor,
        setTitle,
        setSinopse,
        setPublishedDate,
        setGenre,
        setPrice,
        showForm, setShowForm
    } = useContext(FormContext);
    
    const { alert } = useContext(AlertContext);
    
    const handleCreateButton = () => {
        setShowForm(true);
    
        setId("");
        setAuthor("");
        setTitle("");
        setSinopse("");
        setPublishedDate("");
        setGenre("");
        setPrice("");
    };

    const { showMoreInfoScreen } = useContext(MoreInfoScreenContext);

    return (
        <>
            <Header />
            <main>
                {
                    showForm ? (
                        <BookForm />
                    ) : (
                        <div className="book-list-container">
                            <div className="book-list-header">
                                <h3>Books</h3>
                                <button className="create-book-btn" onClick={handleCreateButton}>
                                    CREATE
                                </button>
                            </div>
                            <BookTable />
                        </div>
                    )
                }
            </main>
            {
                alert ? (
                    <Alert
                        message={alert.message}
                        type={alert.type}
                    />
                ) : null
            }
            {
                showMoreInfoScreen ? (
                    <MoreInfoScreen />
                ) : null
            }
        </>
    );
}

export default App;