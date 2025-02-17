import express, { Request, Response } from "express";
import { productsRoutes } from "./routes/products-routes";

const app = express();
const port = process.env.PORT || 3000;

//uso json
app.use(express.json());

// Registrar a rota
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
