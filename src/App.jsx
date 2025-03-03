import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import About from './components/About/About';

import Footer from './components/Footer/Footer';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
// import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Resource from './components/Resource/Resource';
import WhatWeDo from './components/Resources/Resources'; 
import Donate from "./components/Donate/Donate"
const App = () => {
  const envVariable = import.meta.env.VITE_API_URL;
  const initialOptions = {
    clientId: envVariable,
    currency:'USD',
    intent: 'capture',
  };
  return (
    <>
      {/* <PayPalScriptProvider options={initialOptions}> */}
        <Hello />
        <About />
        <WhatWeDo />
        <Projects />
        <Team />
        <Resource />
        {/* donate */}
        <Donate/>
        <Footer />
      {/* </PayPalScriptProvider> */}
    </>
  );
};

export default App;
