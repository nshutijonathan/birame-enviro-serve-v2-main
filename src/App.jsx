import Navbar from './components/Navbar/Navbar';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Resources from './components/Resources/Resources';
import About from './components/About/About';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Donate from './components/Donate/Donate';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
const App = () => {
  const initialOptions = {
    'client-id':'AaTO2zcGFgoftYOmREXVsas5chQji80E3Bs5J2F0fCm5dau-xw17Kv5ZyBxOTV2UPOsHVTiVj2u7h0QY',
    currency: 'USD',
    intent: 'capture',
  };
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Hello />

        <Resources />
        <Projects />
        <About />
        <WhatWeDo />

        <Team />
        <Donate />
        <Footer />
      </PayPalScriptProvider>
    </>
  );
};

export default App;
