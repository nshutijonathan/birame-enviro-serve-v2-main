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
      'AZmhCArmt7HzLV0vq1kx5wMdw8zfxK4Koh90f0FPEmnFH3vcj8xGWu7Fg_cTU4XFFkq3K2zqupbS6WtN',
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
