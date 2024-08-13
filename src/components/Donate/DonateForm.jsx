import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';

const DonateForm = () => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [userName, setUserName] = useState('');
  const [bgColor, setBgColor] = useState('bg-purple-500');
  const [{ isPending }] = usePayPalScriptReducer();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const colors = [
      'bg-purple-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-red-500',
      'bg-yellow-500',
    ];
    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setUserName('');
        setDonationAmount(10);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: donationAmount.toFixed(2),
          },
          description: `Donation from ${userName}`,
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      setSuccess(true);
      console.log('Donation successful:', details);
    });
  };

  const handleAmountChange = (e) => {
    setDonationAmount(parseFloat(e.target.value));
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleDonateClick = () => {
    const paypalButton = document.querySelector('.paypal-buttons');
    if (paypalButton) {
      paypalButton.click();
    }
  };

  return (
    <div
      className={`${bgColor} transition-colors duration-500 p-8 mt-[5rem]  rounded-lg shadow-2xl md:mt-0 max-w-md mx-auto text-center`}
    >
      <h1 className=" md:text-[1rem]  xl:text-[2rem] font-bold text-white mb-6 animate-pulse">
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
      <input
        type="text"
        value={userName}
        onChange={handleNameChange}
        placeholder="Your Name"
        className="w-full text-xl p-4 border-4 border-pink-500 rounded-lg mb-4 bg-white bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        required
      />
      {isPending ? (
        <div>Loading PayPal Button...</div>
      ) : (
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err) => {
            setError(err);
            console.error('PayPal Error:', err);
          }}
          style={{ layout: 'vertical' }}
          disabled={!userName.trim()}
        />
      )}
      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you, {userName}! Your Donation was successful!
        </div>
      )}
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
