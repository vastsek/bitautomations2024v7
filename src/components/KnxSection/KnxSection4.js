// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const KnxSection4 = () => {
    return (
        <div className="-mt-0">
            <div className="relative pt-6 pb-12 lg:pt-12 lg:pb-20 px-4 lg:px-8 bg-gray-50">
                <div className="relative max-w-7xl mx-auto">

                    <div className="text-center">
                        <h2 className="mb-12 text-xl md:text-3xl font-bold text-center text-gray-800">Τι μπορούμε να αυτοματοποιήσουμε;</h2>
                    </div>

                    <div className="mt-12 max-w-lg mx-auto grid gap-5 grid-cols-2 md:max-w-none md:grid-cols-5 lg:grid-cols-5">

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/lights.png" title="Φωτισμός" alt="Φωτισμός Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Φωτισμός</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/shutters.png" title="Ρολά/Σκίαση"  alt="Ρολά/Σκίαση Icon" placeholder="blurred" layout="fixed" width={80} height={80} formats={["auto", "webp", "avif"]}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl font-light text-center text-neutral-600">Ρολά/Σκίαση</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/heating1.png" title="Θέρμανση" alt="Θέρμανση Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>

                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl font-light text-center text-neutral-600">Θέρμανση</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/air_condition.png" title="Κλιματισμός" alt="Κλιματισμός Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>

                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Κλιματισμός</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/sensors.png" title="Αισθητήρες Κίνησης" alt="Αισθητήρες Κίνησης Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Αισθητήρες Κίνησης</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/garage_door.png" title="Γκαραζόπορτα" alt="Γκαραζόπορτα Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Γκαραζόπορτα</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/alarm_system.png" title="Συναγερμός" alt="Συναγερμός Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Συναγερμός</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/cctv.png" title="Κάμερες" alt="Κάμερες Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Κάμερες</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/video_intercom.png" title="Θυροτηλεόραση" alt="Θυροτηλεόραση Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Θυροτηλεόραση</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/irrigation.png" title="Αυτόματο Πότισμα" alt="Αυτόματο Πότισμα Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Αυτόματο Πότισμα</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/energy.png" title="Μετρητές" alt="Μετρητές Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Μετρητές</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/pool.png" title="Πισίνα" alt="Πισίνα Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Πισίνα</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/voice_commands.png" title="Φωνητικές Εντολές" alt="Φωνητικές Εντολές Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Φωνητικές Εντολές</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/video_audio.png" title="Εικόνα & Ήχος" alt="Εικόνα & Ήχος Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Εικόνα & Ήχος</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg overflow-hidden">
                            <div className="flex justify-center ">
                                <StaticImage src="../../images/knx/knx-symbols/smartwatch.png" title="Smartwatch" alt="Smartwatch Icon" placeholder="blurred" layout="fixed" width={80} height={80}/>
                            </div>
                        
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl text-center font-light text-neutral-600">Smartwatch</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                
                </div>
            </div>
        </div>
    )
}


// Step 3: Export your component
export default KnxSection4