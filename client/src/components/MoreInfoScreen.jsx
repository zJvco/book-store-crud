import { useContext } from "react";

import { FormContext } from "../context/FormContext";
import { MoreInfoScreenContext } from "../context/MoreInfoScreenContext";

import "../styles/MoreInfoScreen.css";

function MoreInfoScreen() {
    const {
        id,
        author,
        title,
        sinopse,
        publishedDate,
        genre,
        price
    } = useContext(FormContext);

    const { setShowMoreInfoScreen } = useContext(MoreInfoScreenContext);

    const handleCloseBtn = () => {
        setShowMoreInfoScreen(false);
    }

    return (
        <div className="more-info-screen-background">
            <div className="more-info-screen-container">
                <div className="display-field">
                    <h5>Product ID</h5>
                    <p>{ id }</p>
                </div>
                <div className="display-field">
                    <h5>Author</h5>
                    <p>{ author }</p>
                </div>
                <div className="display-field">
                    <h5>Title</h5>
                    <p>{ title }</p>
                </div>
                <div className="display-field">
                    <h5>Sinopse</h5>
                    <p>{ sinopse }</p>
                </div>
                <div className="display-field">
                    <h5>Published date</h5>
                    <p>{ publishedDate }</p>
                </div>
                <div className="display-field">
                    <h5>Genre</h5>
                    <p>{ genre }</p>
                </div>
                <div className="display-field">
                    <h5>Price</h5>
                    <p>{ price }</p>
                </div>
                <button className="close-btn" onClick={handleCloseBtn}>
                    <div className="first-slash"></div>
                    <div className="second-slash"></div>
                </button>
            </div>
        </div>
    );
}

export default MoreInfoScreen;