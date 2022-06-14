import "../../styles/MoreInfoBookButton.css";

function MoreInfoBookButton({ children, onClick }) {
    return (
        <button
            className="more-info-book-button"
            onClick={onClick}
        >
            { children }
        </button>
    );
}

export default MoreInfoBookButton;