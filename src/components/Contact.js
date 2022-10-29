import React from "react";
import { ChatIcon } from "@heroicons/react/solid";
import useAnalyticsEventTracker from './useAnalyticsEventTracker';


export default function Contact(){
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
      return(
        <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChatIcon className="w-10 inline-block mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Feel free to give me a call or send an email about any proposals you might have.
          </p>
       </div>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-10 mt-2 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-md">
                EMAIL
              </h2>
              <a href="mailto:sgriff09@icloud.com" onClick={() => gaEventTracker('email')} className="text-indigo-400 leading-relaxed" >
                Click here to send me an email</a>
              
            </div>
              <div className="lg:w-1/2 px-10 mt-2 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-md">
                PHONE
              </h2>
              <p className="leading-relaxed">(814) 331-0196</p>
              </div>
        </div>
        </div>
    </section>
    );
  }
