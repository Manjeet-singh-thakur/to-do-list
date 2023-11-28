import { createContext, useState } from "react";

  export const ContextStore = createContext({
    data: [],
    addData: () => {},
    setData: () => {}
});

export const GlobalContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const addData = (item) => {
        setData([...data, item])
    }

    return (
        <ContextStore.Provider value={{ addData, data, setData }} >
            {children}
        </ContextStore.Provider>
    )

}