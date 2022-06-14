import { useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import CreateBookButton from "./components/Buttons/CreateBookButton";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";

import { ShowFormContext } from "./context/ShowForm";

import "./styles/App.css";

library.add(
    faCircleInfo
)

function App() {
    const { showForm, setShowForm } = useContext(ShowFormContext);

    const handleCreateBookButton = () => {
        setShowForm(!showForm);
    }

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
                                <CreateBookButton onClick={handleCreateBookButton}>CREATE</CreateBookButton>
                            </div>
                            <BookTable />
                        </div>
                    )
                }
            </main>
        </>
    );
}

export default App;