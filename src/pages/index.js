// Step 1: Import React
import * as React from 'react'
import { SEO } from "../components/Seo"
import Layout from '../components/Layout'
import HeroSection1 from '../components/HeroSection1'
import Banner from '../components/Banner'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
    <Layout>
      <HeroSection1 />
      <Banner />
    </Layout>
    </>
  )
}

export const Head = () => (
  <>
    <html lang="el" />
    <SEO title="Smart Home - Λύσεις για Έξυπνο Σπίτι - KNX | biT Automations" description="Έξυπνες ηλεκτρολογικές εγκαταστάσεις για έξυπνα σπίτια, με την τεχνολογία KNX. KNX Partner"/>
  </>
)
// keywords={["custom", "keywords", "for", "page"]


// Step 3: Export your component
export default IndexPage