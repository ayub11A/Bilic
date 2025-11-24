import React, { useState } from "react";

function Manualpayment() {
  const [amount, setAmount] = useState("");

  // ✅ WhatsApp number admin
  const adminNumber = "252619355029"; // without "+"

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Please send the screenshot and confirm with admin .");

    // fariinta loo dirayo WhatsApp
    const message = `Hi 👋,\nI have made a payment.\n\n💰 Amount: $${amount}\nPlease confirm my order.`;
    const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-300 shadow-lg rounded-xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-center mb-4 text-green-800">Manual Payment</h1>
      <p className="text-gray-600 text-center mb-6">
        Please send your payment manually to the number below 👇 and send the screenshot on WhatsApp to Confirm
      </p>

      {/* ✅ Payment Details */}
      <div className="bg-gray-400 p-4 rounded text-center">
        <p className="font-semibold   text-lg">Send Payment To:</p>
        <p className="text-xl font-bold text-green-700 mt-2">
          +252 619 355 029
        </p>
        <p className="text-gray-500 text-sm mt-1 text-white">
          (Hormuud <span className="text-green-400">619355020</span> / Zaad <span className="text-green-400">619355029 </span> / E-Dahab <span className="text-green-400"> 619355029 </span>/ Wallet <span className="text-green-400">619355029</span> )
        </p>
      </div>

      {/* ✅ Amount Input */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">


        {/* ✅ Confirm Button */}
  
      </form>

      {/* ✅ WhatsApp Screenshot Button */}
      <div className="text-center mt-6">
        <a
          href={`https://wa.me/${adminNumber}?text=${encodeURIComponent(
            "Hello, I want to send a payment screenshot 📸"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Send Screenshot on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Manualpayment;
