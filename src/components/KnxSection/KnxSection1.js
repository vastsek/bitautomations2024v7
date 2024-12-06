// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const KnxSection1 = () => {
    return (
        <div className="-mt-0">

            <div className="relative pb-12 pt-4 lg:pb-20 px-4 lg:px-8 bg-gray-100">

                <div className="relative max-w-7xl mx-auto">

                    <div className="my-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
                        <h2 className="mb-4 text-xl md:text-3xl tracking-tight font-bold text-center text-gray-800">Ολοκληρωμένες λύσεις ευφυούς κτιριακού αυτοματισμού</h2>
                        <p className="mb-4 text-xl font-light md:text-2xl text-center text-gray-600">Η αξιόπιστη και σίγουρη επιλογή</p>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <StaticImage src="../../images/knx/smart-home.jpg" title="Smart Home" alt="Smart Home Photo"  placeholder="blurred" layout="fullWidth" formats={["auto", "webp", "avif"]}/>
                    </div>

                    
                </div>

            </div>
        </div>

    )
}


// Step 3: Export your component
export default KnxSection1