// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const ServicesSection = () => {
  return (
    <>
    <div className="bg-gray-200">
        <div className="relative max-w-7xl mx-auto px-6 xl:py-10 py-7">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-center text-gray-800">ΥΠΗΡΕΣΙΕΣ</h1>
            </div>
        </div>
    </div>
    
    <div className="bg-gray-100">
        <div className="relative max-w-7xl mx-auto px-6 xl:py-10 py-7">
            <h2 className="text-xl md:text-2xl text-center md:text-left text-gray-600">Είμαστε στη διάθεσή σας να μιλήσουμε και να συζητήσουμε κάθε τεχνικό θέμα και μαζί να δώσουμε την καταλληλότερη λύση.</h2>
        </div>
    </div>

    <div className="bg-gray-100">
        <div className="realtive max-w-7xl mx-auto px-6 xl:pb-10 pb-7">

            <div className="max-w-lg mx-auto grid gap-5 grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/knx-partner.jpg" title="Έξυπνα Κτίρια-KNX" alt="Έξυπνα Κτίρια-KNX" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <h3 className="text-xl font-bold text-center md:text-left text-gray-800">KNX - Έξυπνα Κτίρια</h3>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600 ">Ελέγξτε και διαχειριστείτε τους εσωτερικούς και εξωτερικούς χώρους σας με τις λύσεις Smart Home από την biT Automations. Σχεδιάζουμε, εγκαθιστούμε και προγραμματίζουμε έξυπνες λύσεις αυτοματισμού.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/electrical-constructions.jpg" title="Ηλεκτρολογικές Εργασίες" alt="Ηλεκτρολογικές Εργασίες" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Ηλεκτρολογικές Εργασίες</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Για την κατασκευή μιας άρτιας και ασφαλούς ηλεκτρολογικής εγκατάστασης απαιτείται  έμπειρο τεχνικό προσωπικό όπως επίσης και η χρήση αξιόπιστων και ποιοτικών υλικών. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/technical-studies.jpg" title="Τεχνικές Μελέτες" alt="Τεχνικές Μελέτες" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Τεχνικές Μελέτες</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Είμαστε στη διάθεσή σας να μιλήσουμε και να συζητήσουμε κάθε τεχνικό θέμα και μαζί να δώσουμε την καταλληλότερη λύση.Από την ολική κατασκευή έως στην επισκευή και τη συντήρηση του έργου.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/rack.jpg" title="Δομημένη καλωδίωση" alt="Δομημένη καλωδίωση" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>

                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Δομημένη καλωδίωση - Καμπίνες rack</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600"> Η δομή της καλωδιακής εγκατάστασης ενός τοπικού δικτύου και οι προδιαγραφές που αυτή θα πρέπει να διαθέτει για την εύρυθμη λειτουργία των δικτυακών συσκευών ,σε ένα ενιαίο σύστημα για την μετάδοση φωνής, εικόνας, σημάτων και δεδομένων.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/voip.jpg" title="Τηλεφωνικά κέντρα" alt="Τηλεφωνικά κέντρα" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Τηλεφωνικά κέντρα - Voip</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Ενισχύστε την επικοινωνία και την παραγωγικότητα της ομάδα σας βελτιώνοντας την εικόνα της επιχείρησης και του γραφείου σας με σύγχρονες τεχνολογίες ευρυζωνικότητας.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/net-wifi.jpg" title="Δικτυακός εξοπλισμός" alt="Δικτυακός εξοπλισμός" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Δικτυακός εξοπλισμός - WiFi</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Με μέριμνα την δικτυακή ασφάλεια υλοποιούμε έργα υποδομής για την εύρυθμη επικοινωνία των δικτυακών σας συσκευών παρέχοντας σύγχρονες τεχνολογίες firewall και vpn.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/video-stream-iptv.jpg" title="Video streaming" alt="Video streaming" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Video streaming - Iptv</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Στην εποχή μας η ξενοδοχειακή τηλεόραση είναι πολλά περισσότερα από μια απλή οθόνη αναμετάδοσης τηλεοπτικού προγράμματος. Οι επαγγελματίες του τουρισμού που θέλουν να προσφέρουν την καλύτερη δυνατή εμπειρία φιλοξενίας στους επισκέπτες τους, αναζητούν πάντοτε την κορυφαία λύση.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/alarm-system.jpg" title="Συναγερμοί" alt="Συναγερμοί" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Συναγερμοί</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Τα σύγχρονα συστήματα ασφαλείας αποτελούν την πρώτη γραμμή για την αποτροπή επίδοξων ληστών κατά την απουσία σας ή την παραμονή σας στο χώρο.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/cctv.jpg" title="Κάμερες" alt="Κάμερες" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Κάμερες</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Ένας άγρυπνος φρουρός για την παρακολούθηση του χώρου σας όλο το 24ωρο, με δυνατότητα απομακρυσμένης προβολής και αναπαραγωγής στιγμιότυπων, σε κινητό και tablet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/fire-system.jpg" title="Πυρανίχνευση" alt="Πυρανίχνευση" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Πυρανίχνευση</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Οι διευθυνσιοδοτούμενοι/συμβατικοί πίνακες πυρανίχνευσης παρέχουν προειδοποίηση επικινδύνων συνθηκών στο χώρο σας, μέσω ανιχνευτών καπνού, θερμοκρασίας και αερίων.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/access-control.jpg" title="Ελεγχος Πρόσβασης" alt="Ελεγχος Πρόσβασης" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Ελεγχος Πρόσβασης</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Τα Συστήματα Ελέγχου Πρόσβασης (Access Control) εγγυώνται την ασφάλεια  κτιρίων, διαβαθμισμένων χώρων ή συγκεκριμένων περιοχών, αποτρέποντας την ανεξέλεγκτη είσοδο.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <StaticImage  src="../../images/services/video-intercom.jpg" title="Θυροτηλεόραση" alt="Θυροτηλεόραση" placeholder="blurred" layout="constrained" formats={["auto", "webp", "avif"]}/>
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl text-center md:text-left font-bold text-gray-800">Θυροτηλεόραση</p>
                                <p className="mt-2 text-xl font-light text-center md:text-left text-gray-600">Νιώστε ασφαλείς για σας και τους οικείου σας, γνωρίζοντας ανά πάσα στιγμή με καθαρή εικόνα ποιος βρίσκεται έξω από την πόρτα σας, επικοινωνώντας μαζί του και παρέχοντας πρόσβαση στο χώρο σας.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}


// Step 3: Export your component
export default ServicesSection