import { Link } from "react-router-dom";
import { useState } from "react";

const Terms = () => {
  const [btn, setbtn] = useState(false);
  const [btn2, setbtn2] = useState(false);

  const hanlclick = () => {
    setbtn(true);
    document.getElementById("btn").style.display = "none";
  };
  const hanlclick2 = () => {
    setbtn2(true)
    document.getElementById("btn2").style.display = "none";
  };
  return (
    <div className="w-full">
      <img src="/images/terms-and-conditions (1).jpg"  height="500" alt="" className="  h-72  object-center w-full " />
      <h1 className="  relative  sm:-top-10 md:-top-8 text-center text-white sm:text-2xl lg:text-4xl lg:-top-12 font-semibold">
        Terms & Conditions
      </h1>
      <h2 className="text-center m-12 text-4xl text-callto-action font-semibold font-poppins">
        Terms & Conditions
      </h2>

      <p className="  pb-12  px-8  text-gray-600 font-medium font-lato text-xl xl:mx-40 ">
        <div className="text-justify ">
          These terms and conditions applies to the Totojan app (hereby referred
          to as “Application”) for mobile devices that was created by Totojan
          (hereby referred to as Service Provider) as a Free service.
          <br />
          <br />
          Upon downloading or utilizing the Application, you are automatically
          agreeing to the following terms. It is strongly advised that you
          thoroughly read and understand these terms prior to using the
          Application. Unauthorized copying, modification of the Application,
          any part of the Application, or our trademarks is strictly prohibited.
          Any attempts to extract the source code of the Application, translate
          the Application into other languages, or create derivative versions
          are not permitted. All trademarks, copyrights, database rights, and
          other intellectual property rights related to the Application remain
          the property of the Service Provider.
          <br />
          <br />
          The Service Provider is dedicated to ensuring that the Application is
          as beneficial and efficient as possible. As such, they reserve the
          right to modify the Application or charge for their services at any
          time and for any reason. The Service Provider assures you that any
          charges for the Application or its services will be clearly
          communicated to you.
          <button onClick={hanlclick} id="btn" className="text-callto-action">
            Read more...
          </button>
        </div>
        <br />
        <br />

        {btn && (
          <div >
            <p className="text-justify">
            The Application stores and processes personal data that you have
            provided to the Service Provider in order to provide the Service. It
            is your responsibility to maintain the security of your phone and
            access to the Application. The Service Provider strongly advise
            against jailbreaking or rooting your phone, which involves removing
            software restrictions and limitations imposed by the official
            operating system of your device. Such actions could expose your
            phone to malware, viruses, malicious programs, compromise your
            phone’s security features, and may result in the Application not
            functioning correctly or at all.
            <br />
            <br />
            Please note that the Application utilizes third-party services that
            have their own Terms and Conditions. Below are the links to the
            Terms and Conditions of the third-party service providers used by
            the Application:
            <br />
            <br /></p>
            <ul className=" list-disc   ">
              <li className=" flex-col lg:flex-row ">
                [Google Play Services](
                <Link
                  to="https://policies.google.com/terms"
                  target="_blank"
                  className=" lg:ml-1 text-callto-action"
                >
                  https://policies.google.com/terms
                </Link>
                )
              </li>
              <li className="lg:flex-row flex-col  ">
                [Google Analytics for Firebase](
                <Link
                  to="https://www.google.com/analytics/terms/"
                  target="_blank"
                  className=" lg:ml-1 text-callto-action"
                >
                  https://www.google.com/analytics/terms
                  <br className="sm:hidden" />
                  /crashlytics
                </Link>
                )
              </li>

              <li className="lg:flex-row flex-col  ">
                [Firebase Crashlytics](
                <Link
                  to="https://firebase.google.com/terms/crashlytics"
                  target="_blank"
                  className=" lg:ml-1 text-callto-action"
                >
                  https://firebase.google.com/terms <br className="sm:hidden" />
                  /crashlytics
                </Link>
                )
              </li>
            </ul>
            <div className="text-justify">
              <br />
              <br />
              Please be aware that the Service Provider does not assume
              responsibility for certain aspects. Some functions of the
              Application require an active internet connection, which can be
              Wi-Fi or provided by your mobile network provider. The Service
              Provider cannot be held responsible if the Application does not
              function at full capacity due to lack of access to Wi-Fi or if you
              have exhausted your data allowance.
              <br />
              <br />
              If you are using the application outside of a Wi-Fi area, please
              be aware that your mobile network provider’s agreement terms still
              apply. Consequently, you may incur charges from your mobile
              provider for data usage during the connection to the application,
              or other third-party charges. By using the application, you accept
              responsibility for any such charges, including roaming data
              charges if you use the application outside of your home territory
              (i.e., region or country) without disabling data roaming. If you
              are not the bill payer for the device on which you are using the
              application, they assume that you have obtained permission from
              the bill payer.
              <br /> <br />
              Similarly, the Service Provider cannot always assume
              responsibility for your usage of the application. For instance, it
              is your responsibility to ensure that your device remains charged.
              If your device runs out of battery and you are unable to access
              the Service, the Service Provider cannot be held responsible.
              <button
                onClick={hanlclick2}
                id="btn2"
                className="text-callto-action"
              >
                Read more...
              </button>{" "}
              <br />
              <br />
              {btn2 && (
                <div>
                  {" "}
                  In terms of the Service Provider’s responsibility for your use
                  of the application, it is important to note that while they
                  strive to ensure that it is updated and accurate at all times,
                  they do rely on third parties to provide information to them
                  so that they can make it available to you. The Service
                  Provider accepts no liability for any loss, direct or
                  indirect, that you experience as a result of relying entirely
                  on this functionality of the application.
                  <br />
                  <br />
                  The Service Provider may wish to update the application at
                  some point. The application is currently available as per the
                  requirements for the operating system (and for any additional
                  systems they decide to extend the availability of the
                  application to) may change, and you will need to download the
                  updates if you want to continue using the application. The
                  Service Provider does not guarantee that it will always update
                  the application so that it is relevant to you and/or
                  compatible with the particular operating system version
                  installed on your device. However, you agree to always accept
                  updates to the application when offered to you. The Service
                  Provider may also wish to cease providing the application and
                  may terminate its use at any time without providing
                  termination notice to you. Unless they inform you otherwise,
                  upon any termination, (a) the rights and licenses granted to
                  you in these terms will end; (b) you must cease using the
                  application, and (if necessary) delete it from your device.
                  <br />
                  <br />
                 <span className="font-semibold"> Changes to These Terms and Conditions</span>
                  <br />
                  <br />
                  The Service Provider may periodically update their Terms and
                  Conditions. Therefore, you are advised to review this page
                  regularly for any changes. The Service Provider will notify
                  you of any changes by posting the new Terms and Conditions on
                  this page.
                  <br />
                  <br />
                  These terms and conditions are effective as of 2024-05-31
                  <br />
                  <br />
                   <span className="font-semibold">Contact Us</span>
                  <br /> <br />
                  If you have any questions or suggestions about the Terms and
                  Conditions, please do not hesitate to contact the Service
                  Provider at{" "}
                  <Link
                    to="mytoto.info@gmail.com"
                    target="_blank"
                    className="text-callto-action"
                  >
                    
                    mytoto.info@gmail.com
                  </Link>
                  .
                </div>
              )}
            </div>
          </div>
        )}
      </p>
    </div>
  );
};

export default Terms;
