import { Link } from "react-router-dom";
import { useState } from "react";

const Privacy = () => {
const [btn, setbtn] = useState(false);
const handleclick =()=>{
  setbtn(true)
  document.getElementById("btn").style.display="none"
}


  return (
    <div>
      
      <img src="/images/Privacy-Policy.webp" alt=" privacy policy" className="w-full h-72  bg-callto-action"  />
    
  
      <h2 className="text-center m-12 text-4xl text-callto-action font-semibold font-poppins">
      Privacy Policy
      </h2>
    
      <p className=" sm:px-8   mx-8  text-gray-600 text-xl font-lato xl:mx-40 ">
        <div className="text-justify">
      This privacy policy applies to the Totojan app (hereby referred to as “Application”) for mobile devices that was created by Totojan (hereby referred to as “Service Provider”) as a Free service. This service is intended for use “AS IS”.
      <br /><br />
      Information Collection and Use
      <br /><br />
      The Application collects information when you download and use it. This information may include information such as
      <br /><br />
      <ul className="list-disc">
        <li>Your device’s Internet Protocol address (e.g. IP address)</li>
        
        <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
        <li>The time spent on the Application</li>
        <li>The operating system you use on your mobile device</li>
      </ul>
      <br /><br />
      The Application does not gather precise information about the location of your mobile device.
      <br /><br />
      The Application collects your device’s location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
      <ul className="list-disc">
        <li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
        <li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
        <li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
      </ul>


      <button onClick={handleclick} id="btn" className=" text-callto-action"> Read more...</button>
      <br /><br /></div>
      {btn && <div > <p className="text-justify"> The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
      <br /><br />
      For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to Email, User Name, Phone Number, Location, Address. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
      <br /><br />
      Third Party Access
      <br /> <br />

Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
<br /><br />
Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
<br /><br /></p>

<ul className="list-disc">
<li className="flex-col sm:flex-row"> [Google Play Services]
  (
    <Link to="https://www.google.com/policies/privacy/" target="_blank" className="text-callto-action ">https://www.google.com/policies <br className="sm:hidden" />/privacy/</Link>)</li>


<li className="flex-col sm:flex-row">[Google Analytics for Firebase]
(<Link to="https://firebase.google.com/support/privacy" target="_blank" className="text-callto-action ">https://firebase.google.com <br className="hidden" />/support/privacy</Link>)
</li>
<li className="flex-col sm:flex-row">[Firebase Crashlytics]
(<Link to="https://firebase.google.com/support/privacy/" target="_blank" className="text-callto-action ">https://firebase.google.com<br className="sm:hidden" />/support/privacy/</Link>)
</li>
</ul>
<br /> <br />
<div className=" ">

The Service Provider may disclose User Provided and Automatically Collected Information:
<br /><br />
<p className="text-justify">
<ul className=" list-disc">
  <li>
  as required by law, such as to comply with a subpoena, or similar legal
  </li>
  
  <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
  <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
</ul>
<br /><br />
Opt-Out Rights
<br /><br />
You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
<br /><br />
The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you’d like them to delete User Provided Data that you have provided via the Application, please contact them at <Link to="mytoto.info@gmail.com " target="_blank" className="text-callto-action">mytoto.info@gmail.com </Link>and they will respond in a reasonable time.
<br /><br />
Children
<br /><br />
The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
<br /><br />
The Application does not address anyone under the age of 13\. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<Link to="mytoto.info@gmail.com " target="_blank" className="text-callto-action">mytoto.info@gmail.com </Link>)so that they will be able to take the necessary actions.
<br /><br />
Security
<br /><br />
The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
<br /><br />
Changes
<br /><br />

This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
<br /><br />
This privacy policy is effective as of 2024-05-31
<br /><br />
Your Consent
<br /><br />

By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
<br /><br />
Contact Us
<br /><br />
If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at<Link to="mytoto.info@gmail.com " target="_blank" className="text-callto-action">mytoto.info@gmail.com </Link>.</p>
<br /><br />
</div></div>}



 


     
      </p>


   


      </div>
  )
}

export default Privacy;