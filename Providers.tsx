"use client"

import {ClerkProvider} from '@clerk/nextjs'
import { RecoilRoot } from "recoil";

export default function Providers({children} : {
    children : React.ReactNode
}){
    return(<RecoilRoot >
        <ClerkProvider>
            {children}
        </ClerkProvider>
    </RecoilRoot>
)}