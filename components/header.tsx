import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Menu } from 'lucide-react'

type routetype ={
    "name" : string,
    "route" : string
}
const route : routetype[] = [
    {
        "name" : "Home",
        "route" : "/"
    },{
        "name" : "AboutUs",
        "route" : "/about"
    },{
        "name" : "ContactUs",
        "route" : "/contact"
    }
]

export default function Header(){
    return(<header className="h-16 w-full flex justify-center fixed top-6 z-50">
        <div className="flex justify-between items-center w-11/12 rounded-lg px-6 border border-slate-900 backdrop-blur-2xl">
            <img src="./logo.webp" alt="logo" className='hidden md:block'/>
            <div className='hidden md:flex gap-4 text-base font-semibold'>
                {route.map((items, index)=>(
                    <div key={index}><Link href={items.route} className='hover:text-blue-600 hover:underline'>{items.name}</Link></div>
                ))}
            </div>

            <div className='md:hidden'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {route.map((items, index) => (
                            <DropdownMenuItem key={index}>
                                <Link href={items.route} className='w-full'>{items.name}</Link>
                            </DropdownMenuItem>              
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div>
                <SignedOut>
                    <Button>
                        <SignInButton />
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </header>)
}