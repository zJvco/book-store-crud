import { createContext, useEffect, useState } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {
    const [alert, setAlert] = useState();

    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert()
            }, 5000);
        }
    }, [alert]);

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            { children }
        </AlertContext.Provider>
    );
}

export { AlertContext, AlertProvider };