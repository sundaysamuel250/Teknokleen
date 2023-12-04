// MyContext.js
import { createContext, useState } from 'react';
import ls from "localstorage-slim"

export const AppContext = createContext();
export default function AppStateProvider(props){
    const [cart, setCart] = useState(ls.get("cartItems") ?? [])
    const updateCart = (newItem) => {
        var c = ls.get("cartItems") ?? [];
        c = [...c, newItem];
        ls.set("cartItems", c)
        setCart(c)
    }

    return (
        <AppContext.Provider
        value={{
            cart, updateCart
        }}
         >
            {props.children}
        </AppContext.Provider>
    )
}

// export default {AppContext, useContextValues};