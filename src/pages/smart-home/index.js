// Step 1: Import React
import * as React from 'react'
import { SEO } from "../../components/Seo"
import Layout from '../../components/Layout'
import KnxSection from '../../components/KnxSection'


// Step 2: Define your component
const KnxPage = () => {
  return (
      <Layout>
        <KnxSection />
      </Layout>
  )
}

export const Head = () => (
  <>
  <html lang="el" />
  <SEO title="Τεχνολογία KNX - Απομακρυσμένος Έλεγχος - Αυτοματισμοί Σπιτιού | biΤ Automations" description="Ελέγξτε και διαχειριστείτε τους εσωτερικούς και εξωτερικούς χώρους σας με τις λύσεις Smart Home από την biT Automations. Σχεδιάζουμε, εγκαθιστούμε και προγραμματίζουμε έξυπνες λύσεις αυτοματισμού. KNX Partner"/>
  </>
  
)


// Step 3: Export your component
export default KnxPage