import { createContext, useState } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <AlertContext.Provider value={{ showAlert, setShowAlert }}>
            { children }
        </AlertContext.Provider>
    );
}

export { AlertContext, AlertProvider };