// Step 1: Import React
import * as React from 'react'
import { SEO } from "../../components/Seo"
import Layout from '../../components/Layout'
import ServicesSection from '../../components/ServicesSection'


// Step 2: Define your component
const ServicesPage = () => {
  return (
      <Layout>
        <ServicesSection />
      </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="el" />
    <SEO title="Υπηρεσίες: Ηλεκτρονικές Εφαρμογές - Κτιριακοί Αυτοματισμοί | biΤ Automations" description="Ολοκληρωμένες λύσεις ευφυούς κτιριακού αυτοματισμού (KNX Partner). Ολοκληρωμένες Λύσεις Δομημένης Καλωδίωσης και Δικτυακού Εξοπλισμού. Ολοκληρωμένες Λύσεις Κτιριακής Ασφάλειας. Πιστοποιημένοι Εγκαταστάτες Συστημάτων Ασφαλείας."/>
  </>
  
)


// Step 3: Export your component
export default ServicesPage