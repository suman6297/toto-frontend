import { IoIosDownload } from "react-icons/io";
import { FaTreeCity } from "react-icons/fa6";
import { TbSteeringWheel } from "react-icons/tb";
import { MdFace2 } from "react-icons/md";
import { MdOutlineElectricRickshaw } from "react-icons/md";
import { FiUsers } from "react-icons/fi";


// navbar and footer data
export const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy',
  },
  {
    name: 'Terms & Conditions',
    href: '/terms',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]


// banner images
export const mobileImages = [
  '/banner/image5.jpg',
  '/banner/image6.jpg',
  '/banner/image7.jpg',
  '/banner/image8.jpg',
];
export const desktopImages = [
  '/banner/image1.jpg',
  '/banner/image2.jpg',
  '/banner/image3.jpg',
  '/banner/image4.jpg',
];


// facilities data
export const userFacilities = [
  { title: "Quick Ride Booking", description: "Easily book rides with pickup and drop-off." },
  { title: "Real-time Tracking", description: "Track your ride on a live map." },
  { title: "Fare Estimation", description: "Get an estimated fare before booking." },
  { title: "Multiple Payment Options", description: "Pay with cards, wallets, or cash." },
  { title: "Rating and Feedback", description: "Rate drivers and provide feedback after rides." }
];
export const driverFacilities = [
  { title: "Driver Dashboard", description: "View ride history, earnings, and performance." },
  { title: "Ride Requests", description: "Accept or decline ride requests easily." },
  { title: "Navigation Assistance", description: "Get turn-by-turn directions." },
  { title: "Earnings Tracking", description: "Track earnings in real-time." },
  { title: "Driver Support", description: "Access help and report issues through the app." }
];
export const facilities = [
  {
    icon: <FiUsers />,
    title: "User Facilities",
    list: userFacilities
  },
  {
    icon: <MdOutlineElectricRickshaw />,
    title: "Driver Facilities",
    list: driverFacilities
  }
];


// faq data
export const faqItems = [
  {
    question:'Q: What is the estimated fare for toto?',
    answer:'The estimated fare for a toto ride varies based on the distance and duration of the trip. You can get an accurate fare estimate by entering your pick-up and drop-off locations in the totojan app before booking. Fare rate is 10rs/km.'
  },
  {
    question:'Q: For how far I can book toto on totojan?',
    answer:'You can book or share a toto for regular trips within city limits or up to 15 km. For longer distances, please check the app for availability and additional options and charges.'
  },
  {
    question:'Q: Can I pre-book toto for my upcoming trip?',
    answer:'Yes, you can pre-book a toto for your upcoming trip. Simply select the date and time of your ride in the totojan app to schedule your ride in advance.'
  },
]


// impact card data
export const impactItems = [
  {
    icon:<IoIosDownload />,
    end: 100,
    suffix: 'k',
    title: 'Downloads',
    Description:'100k+ downloads on playstore'
  },
  {
    icon:<FaTreeCity />,
    end: 25,
    suffix: '+',
    title: 'Cities',
    Description:'25+ cities served so far in India'
  },
  {
    icon:<TbSteeringWheel />,
    end: 300,
    suffix: '+',
    title: 'Drivers',
    Description:'300+ reliable trained drivers providing services'
  },
  {
    icon:<MdFace2 />,
    end: 750,
    suffix: '+',
    title: 'Users',
    Description:'750+ happy customers availing facilities regularly'
  },
]


// review card data
export const reviewItems = [
  {
    img: '/images/lady_face.jpg',
    name: 'User Name',
    subName: 'City Name',
    rating: 5,
    content: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." ',
  },
  {
    img: '/images/lady_face.jpg',
    name: 'User Name',
    subName: 'City Name',
    rating: 4.5,
    content: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." ',
  },
  {
    img: '/images/lady_face.jpg',
    name: 'User Name',
    subName:'City Name',
    rating: 4,
    content: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." ',
  },
  {
    img: '/images/lady_face.jpg',
    name: 'User Name',
    subName: 'City Name',
    rating:3.5,
    content: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." ',
  },
]