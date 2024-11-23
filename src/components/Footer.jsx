import { SiFacebook, SiInstagram, SiTwitter, SiWhatsapp, SiYoutube } from "react-icons/si";
import { MdCall, MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { menuItems } from './layout/projectData';

const Footer = () => {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto p-8 gap-8 lg:gap-16 xl:gap-36 flex flex-col lg:flex-row justify-center">
        {/*site logo & about*/}
        <div className="flex flex-col">
          <Link to="/"><h1 className="font-bold font-lato text-xl text-callto-action text-left cursor-pointer">totojan</h1></Link>
          <p className="text-gray-200 text-md text-left mt-2 font-lato">
            Totojan is a modern online platform,<br /> which is designed to simplify your daily<br /> transportation by offering convenient,<br /> reliable, and affordable Toto booking<br /> services across India.
          </p>
        </div>
        {/*Quick Links*/}
        <div className="flex flex-col">
          <h1 className="font-semibold font-poppins text-xl text-callto-action text-left">
            Quick Links 
          </h1>
          <ul className="mt-2 flex flex-col text-left gap-2">
            {menuItems.map((item) => (
              <li key={item.name} className="font-lato text-md text-gray-200 hover:text-callto-action hover:duration-1000">
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/*Contact*/}
        <div className="flex flex-col">
          <h1 className="font-semibold font-poppins text-xl text-callto-action text-left">
            Contact Info
          </h1>
          <ul className="mt-2 font-lato">
            <li className="text-md flex text-gray-200 gap-3 mb-2"><span><MdCall className="text-2xl"/></span>+91 9876543210</li>
            <li className="text-md flex text-gray-200 gap-3"><span><MdMailOutline className="text-2xl"/></span>abcd@gmail.com</li>
          </ul>
        </div>
        {/*Social Links*/}
        <div className="flex flex-col">
          <h1 className="font-semibold font-poppins text-xl text-callto-action text-left">
            Follow Us
          </h1>
          <ul className="flex gap-4 mt-2">
            <Link to="/#"><li><SiFacebook className="text-xl text-gray-200 hover:text-callto-action hover:duration-1000 cursor-pointer" /></li></Link>
            <Link to="/#"><li><SiInstagram className="text-xl text-gray-200 hover:text-callto-action hover:duration-1000 cursor-pointer" /></li></Link>
            <Link to="/#"><li><SiTwitter className="text-xl text-gray-200 hover:text-callto-action hover:duration-1000 cursor-pointer" /></li></Link>
            <Link to="/#"><li><SiWhatsapp className="text-xl text-gray-200 hover:text-callto-action hover:duration-1000 cursor-pointer" /></li></Link>
            <Link to="/#"><li><SiYoutube className="text-xl text-gray-200 hover:text-callto-action hover:duration-1000 cursor-pointer" /></li></Link>
          </ul>
          {/*Playstore Link*/}
          <h1 className="mt-8 xl:mt-6 font-semibold font-poppins text-xl text-callto-action text-left">Download App</h1>
          <Link to="/#"><img src="/logo/google-play.png" alt="playstore-image" className="w-32 border border-gray-400 rounded-md cursor-pointer mt-2" /></Link>
        </div>

      </div>
      <hr className="opacity-20"></hr>
      {/*copyright section*/}
      <div className="bg-slate-800 text-center text-[10px] sm:text-sm p-8">
        <p className="text-gray-400 font-lato">&copy; 2024. All Rights Reserved by <Link to="/" className="text-callto-action cursor-pointer">Totojan Transportation Pvt. Ltd.</Link></p>
      </div>

    </div>
  )
}

export default Footer;