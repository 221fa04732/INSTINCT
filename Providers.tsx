"use client"

import {ClerkProvider} from '@clerk/nextjs'
import { RecoilRoot } from "recoil";
import Footer from "./app/components/Footer";
import Header from './app/components/Header';

export default function Providers({children} : {
    children : React.ReactNode
}){
    return(<RecoilRoot >
        <ClerkProvider>
            <Header />
            {children}
            <Footer />
        </ClerkProvider>
    </RecoilRoot>
)}