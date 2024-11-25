//  two separate components
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import ContactForm from './pages/ContactForm';
import ResumePage from './pages/ResumePage';


function App() {
  return (
    <>
      <Header />

      {/* any elements output to the window will be output to the main element parent(?) */}
      <main>

        {/* switch between components based on what page we're on. what react router is for! */}
        <Routes>

          {/* Route tag needs two props. path name you want to listen for. / for the root of our address. and what element you want to show */}
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<ResumePage />} />

        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App


