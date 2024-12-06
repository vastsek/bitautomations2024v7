// Step 1: Import React
import * as React from 'react'
import { SEO } from "../components/Seo"
import Layout from '../components/Layout'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>

      <div className="bg-gray-200">
        <div className="relative max-w-7xl mx-auto px-6 xl:py-10 py-7">
          <div>
              <h1 className="text-3xl font-bold tracking-tight text-center text-gray-800">ΕΠΙΚΟΙΝΩΝΙΑ</h1>
            </div>
          </div>
      </div>

      <div className="bg-gray-100">
        <div className="relative max-w-3xl mx-auto px-6 xl:py-10 py-7">
            <h2 className="text-xl md:text-2xl text-center md:text-left text-gray-600">Παρακαλούμε συμπληρώστε την παρακάτω φόρμα με τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό:</h2>
        </div>
      </div>

      <section class="bg-gray-100">
        <div class="pb-6 lg:pb-12 px-4 mx-auto max-w-screen-md"> 
            <form  method="POST" action="https://formspree.io/f/xjvqnajw" class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Το email σας</label>
                <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@bitautomations.gr" required></input>
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Θέμα</label>
                <input type="text" name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required></input>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Μήνυμα</label>
                <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-blue-900 rounded-lg bg-blue-100 uppercase sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">ΑΠΟΣΤΟΛΗ</button>
            </form>
        </div>
      </section>

    </Layout>
  )
}

export const Head = () => (
  <>
    <html lang="el" />
    <SEO title="Επικοινωνία | biΤ Automations" description="Παρακαλούμε συμπληρώστε την παρακάτω φόρμα με τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό."/>
  </>
  
)

// Step 3: Export your component
export default AboutPage