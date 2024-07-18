import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51Pc0t5J9WehNsrcpZahXTR1V2CfBrc5CLvgqjao3sXvjG74HSedn8KSr4lJgE1bdpTLxForTd1tGm1oOZBTQpggc004bAIyoj7");

const DonateForm = () => {
  const [donationAmount, setDonationAmount] = useState(10);
  const [userName, setUserName] = useState('');
  const [bgColor, setBgColor] = useState('bg-purple-500');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded yet. Please try again.');
      setIsLoading(false);
      return;
    }

    if (!userName.trim()) {
      setError('Please enter your name.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://biramedonation.onrender.com/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: userName,
          },
        }
      });

      if (result.error) {
        throw new Error(result.error.message);
      } else {
        console.log('Payment successful:', result.paymentIntent);
        setSuccess(true);
      }
    } catch (error) {
      console.error('Payment failed:', error);
      setError(`Payment failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAmountChange = (e) => {
    setDonationAmount(parseFloat(e.target.value));
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className={`${bgColor} transition-colors duration-500 p-8 rounded-lg shadow-2xl mt-[1rem] md:mt-0 max-w-md mx-auto text-center`}>
      <h1 className="text-4xl font-bold text-white mb-6 animate-pulse">Donate at Birame</h1>
      <div className="relative mb-6">
        <input
          type="number"
          value={donationAmount}
          onChange={handleAmountChange}
          min="1"
          step="0.01"
          className="w-full text-3xl p-4 border-4 border-pink-500 rounded-full text-center bg-white bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-500">$</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="w-full text-xl p-4 border-4 border-pink-500 rounded-lg mb-4 bg-white bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          required
        />
        <CardElement className="bg-white p-4 rounded-lg mb-4" />
        <button
          type="submit"
          disabled={!stripe || isLoading}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-2xl font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-110 hover:rotate-3 animate-bounce"
        >
          {isLoading ? 'Processing...' : `Donate $${donationAmount.toFixed(2)}`}
        </button>
      </form>
      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>
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

const WrappedDonateForm = () => (
  <Elements stripe={stripePromise}>
    <DonateForm />
  </Elements>
);

export default WrappedDonateForm;