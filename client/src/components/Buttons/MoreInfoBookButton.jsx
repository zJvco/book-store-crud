import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/MoreInfoBookButton.css";

function MoreInfoBookButton() {
    return (
        <button className="more-info-book-button" id="more-info-book-button">
            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
        </button>
    );
}

export default MoreInfoBookButton;