const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());

// Leer datos desde los archivos JSON
const historialData = require('./historial.json');
const preguntasData = require('./preguntas.json');

// Ruta para insertar datos en el historial
app.post("/create", (req, res) => {
  const newEntry = {
    fecha: new Date().toISOString(),
    nombreCompleto: req.body.nombreCompleto,
    puntos: req.body.puntos,
    res1: req.body.res1,
    res2: req.body.res2,
    res3: req.body.res3,
    res4: req.body.res4,
    res5: req.body.res5,
    res6: req.body.res6,
    res7: req.body.res7,
    res8: req.body.res8,
    res9: req.body.res9,
    res10: req.body.res10,
  };

  historialData.push(newEntry);

  fs.writeFileSync('./historial.json', JSON.stringify(historialData, null, 2));

  res.send("Historial guardado exitosamente.");
});


app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});

// Ruta para obtener el historial de registros
app.get("/historial", (req, res) => {
    // Devolver los datos del archivo historial.json como respuesta JSON
    res.json(historialData);
});

// Ruta para obtener las preguntas
app.get("/preguntas", (req, res) => {
    // Devolver los datos del archivo preguntas.json como respuesta JSON
    res.json(preguntasData);
});
