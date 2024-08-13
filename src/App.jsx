import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Footer from './components/Footer/Footer';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
// import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Resource from './components/Resource/Resource';
import WhatWeDo from './components/Resources/Resources';
const App = () => {
  const initialOptions = {
    'client-id':
      'AVP2A-WbzIypgnQ2AoeaW_n5hM7sZNyPkVJw0a5-PBDdVUD00WbhnJ2iVaY0VDOiq9o4v_QC2mwdXvi0',
    currency: 'USD',
    intent: 'capture',
  };
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Hello />
        <About />

        <WhatWeDo />
        <Projects />
        <Team />
        <Resource />

        <Donate />
        <Footer />
      </PayPalScriptProvider>
    </>
  );
};

export default App;
