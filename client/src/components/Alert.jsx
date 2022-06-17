import "../styles/Alert.css";

function Alert({ message, type }) {
    return (
        <div className="alert" id={type}>
            { message }
        </div>
    );
}

export default Alert;