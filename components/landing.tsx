export default function Landing(){
    return (<div className=" w-full flex flex-col justify-center items-center md:mt-40 mt-0">
        <div className="relative bg-transparent h-screen w-screen">
            <img src="./background1.svg" className="absolute bottom-0 right-0 -z-10 w-full objecct-contain"/>
            <div className="absolute md:-top-40 top-0 w-full grid grid-cols-2 -z-10">
                <img src="./background2.svg" className="w-full object-contain"/>
                <img src="./background2.svg" className="rotate-y-180 w-full object-contain" />
            </div>
            <div className="absolute top-0 right-0 z-10 w-full flex justify-center items-center">
                <div className="w-8/12 h-screen flex flex-col justify-center items-center mt-0">
                    <span className="text-white bg-[#FFFFFF15] text-xs md:text-base px-4 py-2 rounded-full text-center mb-10 md:mb-6">Building the Lunar future, today with instinct</span>
                    <div className="font-semibold md:font-extrabold text-2xl md:text-5xl text-white text-center">Instinct - GPS satellites for the Moon</div>
                </div>
            </div>
        </div>
    </div>)
}