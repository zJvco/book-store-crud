import "../../styles/CreateBookButton.css";

function CreateBookButton({ children, onClick }) {
    return (
        <button
            className="create-book-btn"
            onClick={onClick}
        >
            { children }
        </button>
    );
}

export default CreateBookButton;