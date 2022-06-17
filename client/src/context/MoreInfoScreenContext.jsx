import { createContext, useState } from "react";

const MoreInfoScreenContext = createContext();

function MoreInfoScreenProvider({ children }) {
    const [showMoreInfoScreen, setShowMoreInfoScreen] = useState(true);

    return (
        <MoreInfoScreenContext.Provider value={{ showMoreInfoScreen, setShowMoreInfoScreen }}>
            { children }
        </MoreInfoScreenContext.Provider>
    );
}

export { MoreInfoScreenContext, MoreInfoScreenProvider };