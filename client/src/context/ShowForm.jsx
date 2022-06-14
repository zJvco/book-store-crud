import { createContext, useState } from "react";

const ShowFormContext = createContext();

function ShowFormProvider({ children }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <ShowFormContext.Provider value={{ showForm, setShowForm }}>
            { children }
        </ShowFormContext.Provider>
    );
}

export { ShowFormContext, ShowFormProvider }