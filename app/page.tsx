import { CompanyCard } from "@/components/company"
import FAQ from "@/components/faq"
import Landing from "@/components/landing"

export default function Home(){
    return(<div>
        <Landing />
        <CompanyCard />
        <FAQ />
    </div>)
}