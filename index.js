const express = require("express");
const comicsRouter = require("./routes/comics");

const app = express();

process.loadEnvFiles();

const port = 3000;

app.use(express.json());

app.use("/comics", comicsRouter);
app.use("ability", abilitiesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

