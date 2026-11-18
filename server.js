
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({limit:"10kb"}));

app.get("/", (req,res)=>{
  res.send("Infinity World CCTV Server is running!");
});

app.post("/api/qr", (req,res)=>{
  const {qrData,source} = req.body || {};

  if(typeof qrData !== "string" || !qrData.trim()){
    return res.status(400).json({
      success:false,
      message:"QR information missing"
    });
  }

  // QR-এর সম্পূর্ণ তথ্য সংরক্ষণ করা হচ্ছে না।
  console.log("QR received from:",source || "unknown");

  res.json({
    success:true,
    message:"QR received by server",
    received:true
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,"0.0.0.0",()=>{
  console.log("Server running on port "+PORT);
});
