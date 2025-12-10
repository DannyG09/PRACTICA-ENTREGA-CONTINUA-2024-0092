const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo desde DevOps! Danny Enmanuel Guerrero Martinez (2024-0092)");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
