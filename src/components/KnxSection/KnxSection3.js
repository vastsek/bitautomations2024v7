// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const KnxSection3 = () => {
    return (
        <div className="-mt-0">

            <div className="relative pt-6 pb-12 lg:pt-12 lg:pb-20 px-4 lg:px-8 bg-gray-100">

                <div className="relative max-w-7xl mx-auto">

                    <div className="max-w-lg mx-auto grid gap-5 grid-cols-1 md:max-w-none">

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <h3 className="text-xl text-center md:text-left font-bold text-gray-800">Το σπίτι του μέλλοντος είναι "πράσινο" και έξυπνο.</h3>
                                        <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Ομαδοποιούμε και αυτοματοποιούμε τις λειτουργίες σύμφωνα με τις ανάγκες σας.<br></br>Οι πολυχρηστικοί διακόπτες, η διαχείριση σπιτιού από απόσταση, η δυνατότητα αυτόματης ενεργοποίησης συγκεκριμένων λειτουργιών, καθιστούν το σπίτι έξυπνο και πράσινο συμβάλλοντας στην προστασία του περιβάλλοντος.</p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <StaticImage src="../../images/knx/smart-home-ecofriendly.jpg" title="Smart Home Ecofriendly" alt="Smart Home Ecofriendly Photo" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


// Step 3: Export your component
export default KnxSection3