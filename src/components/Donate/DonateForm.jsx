import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const DonateForm = () => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [bgColor, setBgColor] = useState('bg-purple-500');

  useEffect(() => {
    const colors = [
      'bg-purple-500',
      'bg-pink-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
    ];
    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const makePayment = (token) => {
    const body = { token, amount: donationAmount };
    const headers = { 'Content-Type': 'application/json' };

    return fetch('http://localhost:8282/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log('RESPONSE', res);
        const { status } = res;
        console.log('STATUS', status);
      })
      .catch((err) => console.log(err));
  };

  const handleAmountChange = (e) => {
    setDonationAmount(parseFloat(e.target.value));
  };

  return (
    <div
      className={`${bgColor} transition-colors duration-500 p-8 rounded-lg shadow-2xl max-w-md mx-auto text-center`}
    >
      <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">
        Donate at Birame
      </h1>
      <div className="relative mb-6">
        <input
          type="number"
          value={donationAmount}
          onChange={handleAmountChange}
          min="1"
          step="0.01"
          className="w-full text-3xl p-4 border-4 border-pink-500 rounded-full text-center bg-white bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500">
          $
        </span>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51Pc0t5J9WehNsrcpZahXTR1V2CfBrc5CLvgqjao3sXvjG74HSedn8KSr4lJgE1bdpTLxForTd1tGm1oOZBTQpggc004bAIyoj7"
        token={makePayment}
        amount={donationAmount * 100}
        currency="USD"
      >
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-2xl font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-110 hover:rotate-3 animate-bounce">
          Donate ${donationAmount.toFixed(2)}
        </button>
      </StripeCheckout>
      <div className="mt-6 space-y-4">
        {[10, 25, 50, 100].map((amount) => (
          <button
            key={amount}
            onClick={() => setDonationAmount(amount)}
            className="bg-white bg-opacity-30 text-white text-xl font-semibold py-2 px-4 rounded-full hover:bg-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            ${amount}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DonateForm;
