import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Footer from './components/Footer/Footer';
import Hello from './components/Hello/Hello';
import Projects from './components/Projects/Projects';
import Resources from './components/Resources/Resources';
import Team from './components/Team/Team';
// import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import WhatWeDo from './components/Resources/Resources';
import Resource from './components/Resource/Resource';
const App = () => {
  const initialOptions = {
    'client-id':
      'AZvdle3o3OD7QtoG7cGhoeNqT8Ht4_Nl9FgA-pdutQkBpU-FQ9l6BW9FBaqYx4k2cmg4nsdR9gQzF-pl',
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
