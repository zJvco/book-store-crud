import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateBookButton from "./components/Buttons/CreateBookButton";

import "./styles/App.css";

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
                    <table>

                    </table>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;