import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    return (<div className="w-full flex justify-center items-center text-white bg-slate-950 pt-20 pb-28" >
            <Accordion
            type="single"
            collapsible
            className="w-10/12 md:w-8/12"
            defaultValue="0">
            {FAQlist.map((item, index)=>(
                <AccordionItem value={index.toString()} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{item.answer}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>)
}

type faqTypes = {
    question : string,
    answer : string
}

const FAQlist : faqTypes[] = [{
    question : "What does Instinct do?",
    answer : "Instinct is building the first GPS-like satellite network for the Moon. Our constellation will help rockets, landers, and rovers navigate lunar space safely, preventing mission failures and saving costs for space companies."
},{
    question : "Why is lunar GPS needed?",
    answer : "Surprisingly, Earth's GPS signals become too weak on moon, Without navigation satellites around the moon - 50% of lunar missions fail due to positioning errors - Rovers/get lost in shadowed craters - Landers miss their target sites by kilometers"
},{
    question : "Who is behind Instinct?",
    answer : "We are aerospace engineers from NASA IMAP mission, ESA Solar Orbiter, Cambridge/UCL"
},{
    question : "How can I get updates?",
    answer : "Subscribe to our newsletter or follow us on Twitter or LinkedIn. For partnerships, email founders@instinct-space.com."
}];
