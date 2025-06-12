import { Tooltip } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

export default function AboutUs(){
    return(<div className="bg-slate-950 text-white w-full flex flex-col justify-center items-center pt-32 pb-40">
        <div className="w-10/12 flex flex-col justify-center items-center gap-6">
            <div className='font-extrabold text-3xl lg:text-5xl'>Meet our team</div>
            <div className="flex flex-row items-center justify-center mt-14 w-full"><Tooltip items={teanList}/></div>
        </div>
        <div className="w-full flex justify-center items-center text-white bg-slate-950 pt-20" >
            <Accordion
            type="single"
            collapsible
            className="w-10/12 md:w-8/12">
            {teanList.map((item, index)=>(
                <AccordionItem value={index.toString()} key={index}>
                    <AccordionTrigger className="hover:no-underline">
                        <div className={`flex flex-col md:flex-row gap-2 md:gap-6`}>
                            <Image src={item.image} alt="founder-pic" width={128} height={128} className="max-h-20 md:max-h-32 max-w-20 md:max-w-32 rounded-2xl"/>
                            <div className="flex flex-col items-start justify-center">
                                <div className="text-xl md:text-3xl md:font-semibold font-sans">{item.name}</div>
                                <div className="test-sm md:text-base">{item.designation}</div>
                                <div className="flex justify-center items-end gap-2">
                                    <a href={item.linkedinURL} target="_blank"><Image src="/linkedin_blue.png" alt="linkedin" width={50} height={50} className="max-h-5 max-w-5" /></a>
                                    <a href={item.twitterURL} target="_blank"><Image src="/twitter_blue.png" alt="twitter" width={50} height={50} className="max-h-5 max-w-5" /></a>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{item.description}</p>
                    </AccordionContent>
                </AccordionItem>))}
            </Accordion>
        </div>
    </div>
)}

type teamType = {
    id: number;
    name: string;
    designation: string;
    image: string;
    description? :string,
    linkedinURL? :string,
    twitterURL? :string
};

const teanList : teamType[] = [{
    id: 1,
    name: "Alex Pinel Neparidze",
    designation: "Founder |  Co-CEO of Instinct",
    image: "/alex.jpg",
    description : "Graduate in Space Engineering at UCL and Aerospace engineering at QMUL. At Open Cosmos, he worked in project management on the HAMMER and PHISAT-2 Earth observation satellites, both launched in 2024 and now in orbit. Published research on the usage of machine learning for detecting Coronal Mass Ejections (CMEs) at the Mullard Space Science Laboratory.",
    linkedinURL : "https://www.linkedin.com/in/alex-pinel/",
    twitterURL : "https://x.com/"
},{
    id: 2,
    name: "Joaquim Dickson",
    designation: "Founder",
    image: "/joaquim.jpg",
    description : "Graduate in Physics at Imperial College London and Space Technology at UCL. Worked on the magnetometer (MAG) for NASA's IMAP spacecraft with Imperial's Fluxgate Magnetometer Laboratory. Also worked on the Solar Wind Analyser (SWA) instrument suite aboard ESA's Solar Orbiter spacecraft with UCL's Mullard Space Science Laboratory.",
    linkedinURL : "https://www.linkedin.com/in/joaquim-ropd/",
    twitterURL : "https://x.com/"
},{
    id: 3,
    name: "Ashwin Iyer",
    designation: "Founder | co-founder and co-CEO of Instinct",
    image: "/ashwin.jpg",
    description : "He studied mechanical engineering at QMUL in London and holds a Master in Industrial Systems, Manufacturing and Management from the University of Cambridge. Ashwin has also worked at Imperial College London, doing research on Rolls Royce jet engines as well as undertaken consulting projects as part of a team at Cambridge across a variety of industries including Venture capital, Metalworking and Electronics.",
    linkedinURL : "https://www.linkedin.com/in/ashwin-iyer-626263245/",
    twitterURL : "https://x.com/"
},{
    id: 4,
    name: "Joe Papworth",
    designation: "Founder",
    image: "/joe.jpg",
    description : "Finished his Masters degree in Space science and engineering at UCL as the team lead of systems engineering design for the Heliosphere Exploration and Interstellar Research Observatory (HERO). Developed a mission concept for permanently shadowed regions in the south lunar pole for In-Situ Resource Utilization and architecture. Completed his BSc in Astrophysics and designed a cost optimized CubeSat constellation deployment strategy with Airbus.",
    linkedinURL : "https://www.linkedin.com/in/joe-papworth/",
    twitterURL : "https://x.com/"
}]