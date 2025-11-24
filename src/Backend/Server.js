import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let orders = [];

app.post("/api/orders", (req, res) => {
  const { name, phone, address, method, message } = req.body;
  if (!name || !phone) return res.json({ success: false, error: "Missing data" });

  const newOrder = {
    id: Date.now(),
    name,
    phone,
    address,
    method,
    message,
    status: "pending",
    createdAt: new Date(),
  };
  orders.push(newOrder);
  console.log("✅ Order received:", newOrder);
  res.json({ success: true });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
