import express from "express";
import cors from "cors";
import regRoutes from "./routes/registrations.js";

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/registrations", regRoutes);

app.listen(PORT, () => {
  console.log("running on port:", PORT);
});
