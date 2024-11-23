import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Explore from './pages/Explore';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import DeleteAcc from './pages/DeleteAcc';

import useDocumentTitle from './components/hooks/useDocumentTitle';

function App() {
  const baseTitle = "Totojan - India's first online Toto booking app";
  useDocumentTitle(baseTitle);

  return (
    <>
      <Navbar />
      <main className='mt-[56px] md:mt-[64px] lg:mt-[72px]'>
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/privacy" element = { <Privacy /> } />
          <Route path = "/terms" element = { <Terms /> } />
          <Route path = "/contact" element = { <Contact /> } />
          <Route path = "/login" element = { <Signin /> } />
          <Route path = "/signup" element = { <Signup /> } />
          <Route path = "/explore" element = { <Explore/> } />
          <Route path ="/delete" element = {<DeleteAcc/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;