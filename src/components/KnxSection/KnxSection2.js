// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const KnxSection2 = () => {
    return (
        <div className="-mt-0">

            <div className="relative pt-6 pb-12 lg:pt-12 lg:pb-20 px-4 lg:px-8 bg-gray-50">

                <div class="relative max-w-7xl mx-auto">

                    <div className="max-w-lg mx-auto grid gap-5 grid-cols-1 md:max-w-none md:grid-cols-2">

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <h3 className="text-xl text-center md:text-left font-bold text-gray-800">Μια εφαρμογή για όλα - Mobile App</h3>
                                        <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Με τον οικιακό αυτοματισμό, ο έλεγχος όλων των λειτουργιών όπως οι περσίδες, ο φωτισμός, η θέρμανση, ο κλιματισμός και η επικοινωνία με την εξώθυρα μπορεί να γίνει με το πάτημα ενός κουμπιού από απόσταση ή από την άνεση της πολυθρόνας σας, κάνοντας την καθημερινότητά σας απλούστερη και πιο έξυπνη.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <h3 className="text-xl font-bold text-center md:text-left text-gray-800">Φωνητικές Εντολές - Voice Control</h3>
                                        <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Οι καθημερινές λειτουργίες στο σπίτι γίνονται ευκολότερα πλέον, με την χρήση φωνητικών οδηγιών.</p>
                                        <p className="mt-2 text-xl text-center md:text-left text-gray-800">Google Assistant, Siri ή Alexa;</p>
                                        <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Η επιλογή είναι δική σας!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                       
                    <div className="mt-6 flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <StaticImage src="../../images/knx/tablet-app-ha.jpg" title="Home Assistant" alt="Home Assistant Photo" placeholder="blurred" layout="fullWidth" formats={["auto", "webp", "avif"]}/>
                    </div>

                </div>
            </div>
        </div>

    )
}


// Step 3: Export your component
export default KnxSection2