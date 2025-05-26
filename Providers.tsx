"use client"

import { RecoilRoot } from "recoil";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Providers({children} : {
    children : React.ReactNode
}){
    return(<RecoilRoot >
        <ClerkProvider>
            <header className="h-16 w-full flex justify-center">
                <div className="flex justify-between items-center w-11/12">
                    <img src="./logo.webp" alt="logo" />
                    {/* header tab routing  -- todo  */}
                    <div className="flex gap-4">
                        {/* light dark mode -- todo */}
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </header>
            {children}
        </ClerkProvider>
    </RecoilRoot>
)}