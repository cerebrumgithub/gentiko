import PublicLayout from "components/layouts/PublicLayout";
import Iframe from 'react-iframe'
import home from "@/styles/Home.module.css";

export default function Prices() {
  return (
    <PublicLayout>
        <div style={{position: "relative"}}>
            <Iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3652601857975!2d121.02090287687174!3d14.635195676225251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b64fe0a9e717%3A0xe92af5816826f0d5!2sCerebrum%20Creatives!5e0!3m2!1sen!2sph!4v1683621889183!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>         
        </div>
        <div className={`${home.main} flex justify-center my-16`}>
        <div className="max-w-screen-md mx-auto p-5">
            <div className="text-center mb-10">
                <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                    Contact
                </p>
                <h3 className="flex justify-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    <img src="/img/smLogo.png" alt="Logo"/>
                </h3>
            </div>
            <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Juan" />
    
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Dela Cruz" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Email Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                </div>
            </div>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                    Your Message
                </label>
                <textarea rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    
                </textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                <div className={`md:flex md:items-center ${home.newsLetter}`}>
                    <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox"/>
                    <span className="text-sm">
                        Send me your newsletter!
                    </span>
                    </label>
                </div>
                <button className={`shadow bg-red-900 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded ${home.contactUsBtn}`} type="submit">
                    Send Message
                </button>
                </div>
                
            </div>
                
            </form>
            </div>

        </div>
    </PublicLayout>
  )
}
