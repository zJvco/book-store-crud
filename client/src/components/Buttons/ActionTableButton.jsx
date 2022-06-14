import "../../styles/ActionTableButton.css";

function ActionTableButton({ children, type, onClick }) {
    return (
        <button
            className={`${type}-book-btn`}
            onClick={onClick}
        >
            { children }
        </button>
    );
}

export default ActionTableButton;