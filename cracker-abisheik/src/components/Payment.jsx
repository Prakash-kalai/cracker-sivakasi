import React from "react";

function Payment() {
  return (
    <div className="payment-section">

      <h2 className="payment-title">PAYMENT INFORMATION</h2>
      <p className="payment-subtitle">
        We accept both UPI and bank transfer payments.
      </p>

      <div className="payment-box">
        <p><b>Bank Name:</b> State Bank of India</p>
        <p><b>Account Name:</b> Abishek Crackers & Dhanraj Crackers</p>
        <p><b>Account No:</b> 1234567890</p>
        <p><b>IFSC:</b> SBIN0001234</p>
        <p><b>UPI ID:</b> dhanrajcrackers@oksbi</p>
      </div>

    </div>
  );
}

export default Payment;
