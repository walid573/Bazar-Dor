import {  Suspense } from "react"; 

import Banner from "./components/Banner";
import PriceChange from "./components/PriceUpadateSection/PriceChange";
import SkeletonHome from "./components/PriceUpadateSection/loading";






export default function Home() {

   

  return (
    
       <div className=" max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto px-2 md:px-0">
        <Suspense fallback={<SkeletonHome/>}>
          <Banner />
          <PriceChange />
          </Suspense>
       </div>
    
  );
}
