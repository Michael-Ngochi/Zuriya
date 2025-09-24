import {React, useState} from "react";
import {ritualBundles} from "@/data";


import { Button } from "./ui/button";
const BundleDrawer =()=>{
    const [bundles, setBundles] = useState(ritualBundles);
    return(
    <>
    <div className="flex overflow-x-auto scrollbar-thin snap-mandatory items-center justify-left">
        {
        bundles.map((bundle)=>{
            return(
                <div key={bundle.id} className="relative border-2  border-primary rounded-2xl w-90 m-4 overflow-clip">
                <div className=" overflow-clip">
                <img className="transition-transform  duration-300 ease-in-out hover:scale-110" src={"https://placehold.co/400"} alt={bundle.name} />
                </div>
                <div className="z-1 flex flex-col bg-card text-card-foreground px-2 pt-2">
                <h2 className="text-2xl font-serif">{bundle.name}</h2>
                <p className="text-muted-foreground">{bundle.shortDescription}</p>
                <span className="text-xl">Ksh {bundle.price}</span>
                <div className="flex gap-3 flex-row ">
                <Button className=" my-2 px-3 bg-primary font-bold text-primary-foreground">Add to Cart</Button>
                <Button variant="link" className=" my-2 px-3 text-accent-foreground">Learn more</Button>
                </div>
                </div>
            </div>
            )
        })

    }
    </div>
    </>
    )
}

export default BundleDrawer;