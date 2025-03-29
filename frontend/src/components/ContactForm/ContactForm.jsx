import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h4 className='text-sm font-semibold text-center '>Request More Information</h4>
        <form className="mt-5 space-y-5 flex flex-col">
            {/* Name Input */}
            <input
                type="text"
                className="border-b border-gray-400 py-2 outline-none focus:border-primary transition-all duration-300"
                placeholder="Name*"
            />

            {/* Email Input */}
            <input
                type="email"
                className="border-b border-gray-400 py-2 outline-none focus:border-primary transition-all duration-300"
                placeholder="Email*"
            />

            <PhoneInput />

            {/* Message Textarea */}
            <textarea
                className="border-2 border-gray-300 p-2 rounded-md outline-none focus:border-primary transition-all duration-300"
                placeholder="Write a message"
            ></textarea>

            {/* Submit Button */}
            <button className="border-2 border-primary text-primary font-semibold py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-all duration-300">
                Submit
            </button>
        </form>

    </div>
  )
}

export default ContactForm