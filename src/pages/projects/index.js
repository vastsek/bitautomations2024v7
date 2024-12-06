// Step 1: Import React
import * as React from 'react'
import { SEO } from "../../components/Seo"
import Layout from '../../components/Layout'
import ProjectsSection from '../../components/ProjectsSection'


// Step 2: Define your component
const ProjectsPage = () => {
  return (
      <Layout>
        <ProjectsSection />
      </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="el" />
    <SEO title="Τα Έργα Μας | biΤ Automations" description="Εδώ βρίσκεται μια μικρή, ενδεικτική συλλογή από τη μεγάλη λίστα των έργων που έχουμε αποπερατώσει τα τελευταία χρόνια. Ανά τακτά χρονικά διαστήματα θα ανανεώνουμε τη λίστα με τη προσθήκη νέων έργων."/>
  </>
  
)


// Step 3: Export your component
export default ProjectsPage