// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const ProjectsSection4 = () => {
  return (
    <>
        <div className="mt-16 mb-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
            <h3 className="text-xl text-center md:text-left font-bold text-gray-800">Δομημένη Καλωδίωση</h3>
            <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600 ">Τερματισμός γραμμών δομημένης καλωδίωσης, εγκατάσταση καμπίνας rack και δικτυακού εξοπλισμού σε τεχνικό γραφείο στον Βύρωνα.</p>
        </div>
                
        <div className="max-w-lg max-x-auto grid gap-5 lg:grid-cols-2 md:max-w-none grid-cols-1">

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <StaticImage src="../../images/projects/telecoms/rack-photo1.jpg" alt="Rack Photo" placeholder="blurred" layout="fullWidth"/>
                </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <StaticImage src="../../images/projects/telecoms/networks-photo1.jpg" alt="Δικυακός Εξοπλισμός Photo" placeholder="blurred" layout="fullWidth" formats={["auto", "webp", "avif"]}/>
                </div>
            </div>
        </div>
    </>


  )
}

// Step 3: Export your component
export default ProjectsSection4