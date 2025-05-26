// "use client"


// import { useRecoilValue } from "recoil";
import Trycomp from "./components/try";
// import { tryatom } from "./Store/try";

export default function Home() {

  // const val = useRecoilValue(tryatom)
  return (
    <div className="h-screen pt-14">
      get started
      <Trycomp />

      {/* you have rs : {val} */}
    </div>
  );
}
