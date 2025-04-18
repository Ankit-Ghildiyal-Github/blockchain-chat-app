import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";

import { CheckIfWalletConnected, 
    connectWallet, 
    connectingWithContract 
} from '@/Utils/apiFeature';

export const ChatAppContxt = React.createContext();


export const ChatAppProvider = ({children}) => {
    const title = "Hey welcome to blockchain Chat App";

    return(
        <ChatAppContxt.Provider value={{title}}>
            {children}
        </ChatAppContxt.Provider>
    )
}