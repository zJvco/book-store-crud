import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateBookButton from "./components/Buttons/CreateBookButton";
import BooksTable from "./components/BooksTable";

import "./styles/App.css";

library.add(
    faCircleInfo
)

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="book-list-container">
                    <div className="book-list-header">
                        <h3>Books</h3>
                        <CreateBookButton />
                    </div>
                    <BooksTable />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;