import React from "react";

// Corrected typo: APIContex -> APIContext
const APIContext = React.createContext({});

interface APIProviderProps {
    children: React.ReactNode;
}

const APIProvider: React.FC<APIProviderProps> = ({ children }) => {
    return (
        // Corrected typo: APIContex -> APIContext
        <APIContext.Provider value={{}}>
            {children}
        </APIContext.Provider>
    );
};

export { APIContext, APIProvider };
