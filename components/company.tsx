import { InfiniteMovingCards } from "./ui/movingcard";

export function CompanyCard() {
  return (<div className="w-full flex items-center justify-center bg-slate-950 pt-16">
        <div className="flex md:flex-row flex-col justify-center items-center  text-white w-10/12 md:w-8/12">
            <div className="text-xl font-semibold min-w-32 flex justify-start items-center">Backed by</div>
            <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards items={image} direction="left" speed="fast"/>
            </div>
        </div>
    </div>);
}

const image : string[] =[
    "/ycombinator.webp",
    "/calm.webp",
    "/maiora.webp",
    "/a16z.webp",
    "/rebel.webp"
];
