import React from "react"
import KnxSection1 from "../KnxSection/KnxSection1"
import KnxSection2 from "../KnxSection/KnxSection2"
import KnxSection3 from "../KnxSection/KnxSection3"
import KnxSection4 from "../KnxSection/KnxSection4"

const KnxSection = () => {
    return(
        <>
        <div className="bg-gray-200">
            <div className="relative max-w-7xl mx-auto px-6 xl:py-10 py-7">
                <h1 className="text-3xl font-bold tracking-tight text-center text-gray-800">ΕΞΥΠΝΟ ΣΠΙΤΙ</h1>
            </div>
        </div>
        <KnxSection1 />
        <KnxSection2 />
        <KnxSection3 />
        <KnxSection4 />
        </>

    )
}

export default KnxSection