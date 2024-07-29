import ContactForm from '@/components/custom/Contact/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-[400px] flex flex-col my-12">
        <div className="flex aling-middle justify-center gap-4 text-center min-h-[260px] flex-col px-4 py-12 bg-slate-50">
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <p>We are happy to help!</p>
        </div>

        <div>

            <ContactForm/>

        </div>

    </div>
  )
}

export default Page