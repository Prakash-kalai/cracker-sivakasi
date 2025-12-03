import React, { useEffect, useState } from "react";

function Home({ onNav }) {
const addImage = [
  "/hero-slider-one.webp",
  "/hero-slider-three.webp",
  "/hero-slider-two.webp"
];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % addImage.length);
  }, 8000);

  return () => clearInterval(interval);
}, []);
  return (
    <div
      className=""
      style={{
        
       
        
        backgroundImage:
          "url('https://www.icegif.com/wp-content/uploads/2023/05/icegif-1117.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

       <div>
        <img src={addImage[index]} alt="" />
      </div>

      <p className="page-desc" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
        Welcome to <strong>Abishek Crackers & Dhanraj Crackers</strong>.
      </p>

      <h2 className="page-title" style={{ margin: "20px 0" }}>
        Minimum Order Amount: ₹3000
      </h2>

      <p className="page-offer" style={{ fontSize: "1.1rem" }}>
        🔥 60% Festival Mega Offer LIVE Now! 🔥
      </p>

      <p className="page-sub" style={{ marginBottom: "30px" }}>
        Browse our Price List & create your estimate instantly!
      </p>

      <button
        className="btn-primary"
        onClick={() => onNav("pricelist")}
        style={{
          padding: "12px 25px",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#ff9800",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        View Price List
      </button>
    </div>
  );
}

export default Home;
