import React from "react";

function View({ payment, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          <Detail label="Project" value={payment.project} />
          <Detail label="Payment Type" value={payment.type} />
          <Detail label="Milestone/Support" value={payment.milestone} />
          <Detail label="Payment Code" value={payment.code} />
          <Detail label="Amount" value={`₹${payment.amount.toLocaleString()}`} />
          <Detail label="Status" value={payment.status} />
          <Detail label="Due Date" value={payment.dueDate} />
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4 text-right">
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium text-gray-700">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

export default View;
