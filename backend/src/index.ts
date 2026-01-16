import express from "express";
import cors from "cors";

const initializeApp = () => {
  const app = express();

  app.use(express.json());

  const allowedOrigins = [
    "https://walter-lyart-gamma.vercel.app",
    "http://localhost:5173"
  ];

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

  app.get("/", (_req, res) => {
    res.send("Backend server running successfully!");
  });

  


  return app;
};

const app = initializeApp();
export default app;
