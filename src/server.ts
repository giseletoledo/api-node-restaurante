import express, { Request, Response } from "express";
import { errorHandling } from "./middlewares/error-handling";
import { routes } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

//uso json
app.use(express.json());

// Registrar as rotas
app.use(routes);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
