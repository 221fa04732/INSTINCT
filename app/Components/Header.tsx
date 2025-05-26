import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

type routetype ={
    name : string,
    route : string
}
const route : routetype[] = [
    {
        name : "Home",
        route : "/"
    },{
        name : "AboutUs",
        route : "/aboutUs"
    },{
        name : "ContactUs",
        route : "/contactUs"
    }
]

export default function Header(){
    return(<header className="h-16 w-full flex justify-center fixed">
        <div className="flex justify-between items-center w-11/12">
            <img src="./logo.webp" alt="logo" />
            <div className='flex gap-4'>
                {route.map((items, index)=>(
                    <div key={index}><Link href={items.route}>{items.name}</Link></div>
                ))}
            </div>
            {/* header tab routing  -- todo  */}
            <div className="flex gap-4">
                {/* light dark mode -- todo */}
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </header>)
}