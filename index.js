require('dotenv').config(); // ✅ Cargar variables desde .env
console.log('🔑 Clave API detectada:', process.env.OPENAI_API_KEY);

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/api/chat", async (req, res) => {
  const prompt = req.body.message;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Eres un asistente virtual elegante y cálido llamado Rosas...`,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).send("Error al procesar mensaje");
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'FWROSAS.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`));
