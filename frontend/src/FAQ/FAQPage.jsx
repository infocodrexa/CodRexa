import React from 'react'
import FAQSection from './FAQSection'
import faqs from "./faqData";


export const FAQPage = () => {
  return (
   <>
    <FAQSection faqs={faqs} />
   </>
  )
}
