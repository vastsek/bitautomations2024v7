// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"

// Step 2: Define your component
const Footer = () => {
  return (
    <footer className="bg-gray-200 rounded-lg shadow">
        <div className="px-6 pt-6">
            <form method="POST" action="https://formspree.io/f/mvojewdp">
                <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                    <div className="md:mb-6 md:ml-auto">
                        <p className="text-gray-600">
                        <strong>Εγγραφείτε στη λίστα ενημερώσεων</strong>
                        </p>
                    </div>

                    <div className="relative md:mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            name="email"
                            class="peer block min-h-[auto] w-full rounded border-2 border-blue-600 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Email address" />
                        <label
                            for="exampleFormControlInput1"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                            >
                        Email Address
                        </label>
                    </div>

                    <div className="mb-6 text-center md:mr-auto">
                        <button
                            type="submit"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-100 text-blue-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Εγραφη
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3 ">
                <div>
                    <div className="mb-4 gap-4 flex items-center justify-center font-bold text-neutral-600 md:justify-center">
                        <Link to="/" className="flex gap-2 items-center space-x-3 rtl:space-x-reverse">
                            <StaticImage src="../images/icon.png" title="Logo" alt="biT Automations Logo" placeholder="blurred" layout="constrained" width={36} height={36} formats={["auto", "webp", "avif"]}/>biT Automations
                        </Link>
                    </div>
                    <p className="mb-4 flex items-center text-center justify-center font-bold text-neutral-600 md:justify-center">Ηλεκτρονικές Εφαρμογές και<br></br>Κτιριακοί Αυτοματισμοί.</p>
                </div>

                <div>
                    <div className="flex content-center items-center justify-center bg-gray-200">
                        <StaticImage src="../images/knx-partner.png" title="Knx Partner" alt="Knx Partner Photo" placeholder="blurred" layout="constrained"  height={120} formats={["auto", "webp", "avif"]}/>
                    </div>
                </div>

                <div>
                    <div className="mb-4 flex justify-center font-bold text-neutral-600 uppercase md:justify-center">
                        <Link to="/about">Επικοινωνια</Link>
                    </div>
                    <p className="mb-4 flex gap-1 items-center  text-neutral-600 justify-center md:justify-center">
                        <MdEmail size="1.2rem"/>
                        info@bitautomations.gr
                    </p>
                    <p className="mb-4 flex gap-1 items-center text-neutral-600 justify-center md:justify-center">
                        <FaPhone size="1.2rem"/>
                        + 30 210 220 0607
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-neutral-200 p-6 text-center">
            <span>© 2023 Copyright:</span>
            <Link className="font-bold text-neutral-600" to="/">biT Automations</Link>
        </div>
    </footer>
  )
}

// Step 3: Export your component
export default Footer