/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={`Vedahousing`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 0`,
        }}
      >
        <main
          style={{
            height: "95%",
          }}
        >{children}</main>


<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative bottom-0 z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-8 xl:pb-8">
      <main class="mt-28 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-8">
        <div class="sm:text-center lg:text-left">
          <h1 class="animate-bounce text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-white md:text-6xl">
            <span class="block xl:inline text-yellow-600 lg:text-white">Need Property consultant in</span>
            <span class="block text-yellow-600 xl:inline"> Varanasi ?</span>
          </h1>
          <p class="mt-28 text-yellow-600 lg:text-white sm:mt-5 text-2xl sm:max-w-xl sm:mx-auto md:mt-12 md:text-xl lg:mx-0 xl:mt-12">
            Please contact us on whatsapp for Buy, Sell, Rent, Drawing Design of Residential and Commercial Properties.
          </p>
          <div class="mt-12 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow mt-4">
                <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ddsingh59@gmail.com&amp;&amp;su=Need property for Rent or Buy&amp;body=Hi," 
                  title="Connect on email" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-2 md:text-lg md:px-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
                </a>
              </div>
              <div class="rounded-md shadow mt-4 sm:ml-3">
                <a href="//api.whatsapp.com/send?phone=919455664970" 
                title="Connect on whatsapp" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-2 md:text-lg md:px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white",transform: "",msFilter:""}}><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                WhatsApp
                </a>
              </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:insert-x-0 invert-0">
        <StaticImage 
          class="invert-0 h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="../images/Heroimg.jpg" 
          alt="Vedahousing"
        />
  </div>
</div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
