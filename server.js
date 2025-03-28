const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost/incidentsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

const incidentSchema = new mongoose.Schema({
  reporter: {
    type: String,
    required: [true, 'El campo reporter es obligatorio']
  },
  description: {
    type: String,
    required: [true, 'El campo description es obligatorio'],
    minlength: [10, 'La descripción debe tener al menos 10 caracteres']
  },
  status: {
    type: String,
    enum: ['pendiente', 'en proceso', 'resuelto'],
    default: 'pendiente'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Incident = mongoose.model('Incident', incidentSchema);


app.post('/incidents', async (req, res) => {
  try {
    const newIncident = new Incident(req.body);
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * GET /incidents
 * Obtiene la lista de incidentes.
 */
app.get('/incidents', async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
