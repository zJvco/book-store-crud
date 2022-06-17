<<<<<<< HEAD
import "../styles/Alert.css";

function Alert({ message, type }) {
    return (
        <div className="alert" id={type}>
            { message }
=======
function Alert() {
    return (
        <div className="alert" id={type}>
            
>>>>>>> 906d74bf79d769ce03acb5cebcaeee994913f045
        </div>
    );
}

export default Alert;