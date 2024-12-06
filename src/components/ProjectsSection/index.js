import React from "react"
import ProjectsSection1 from "../ProjectsSection/ProjectsSection1"
import ProjectsSection2 from "../ProjectsSection/ProjectsSection2"
import ProjectsSection3 from "../ProjectsSection/ProjectsSection3"
import ProjectsSection4 from "../ProjectsSection/ProjectsSection4"
import ProjectsSection5 from "../ProjectsSection/ProjectsSection5"

const ProjectsSection = () => {
    return(
        <>
        <div className="bg-gray-200">
            <div className="relative max-w-7xl mx-auto px-6 xl:py-10 py-7">
                <h1 className="text-3xl font-bold tracking-tight text-center text-gray-800">ΤΑ ΕΡΓΑ ΜΑΣ</h1>
            </div>
        </div>

        <div className="bg-gray-100">
            <div className="relative max-w-7xl mx-auto px-6 xl:py-10 py-7">
                <h2 className="text-xl md:text-2xl text-center md:text-left text-gray-600">Εδώ βρίσκεται μια μικρή, ενδεικτική συλλογή από τη μεγάλη λίστα των έργων που έχουμε αποπερατώσει τα τελευταία χρόνια. Ανά τακτά χρονικά διαστήματα θα ανανεώνουμε τη λίστα με τη προσθήκη νέων έργων.</h2>
            </div>

            <div className="realtive max-w-7xl mx-auto px-6 xl:pb-10 pb-7">
                    <ProjectsSection1 />
                    <ProjectsSection2 />
                    <ProjectsSection3 />
                    <ProjectsSection4 />
                    <ProjectsSection5 />
            </div>
        </div>

       
        </>
        

    )
}

export default ProjectsSection