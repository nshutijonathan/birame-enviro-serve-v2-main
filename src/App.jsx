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
    clientId:
      'ASv2LIj_UOt09y64vOdz6Qd_3GHh1yzF3Vyk_ynDmZE3TRmbPA_lqCzk4gr69DNKB1dJ7SjsSm974mzu',
    currency: 'USD',
    intent: 'capture',
    "data-client-token": "EJt6---GA6GWAGuJCKSWKX1LMvb-wOUHKBBE8ZjdI3WaSGhoY7vBTvtbkb2w6A-UtDB6kBE49zvdLIpu"
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
