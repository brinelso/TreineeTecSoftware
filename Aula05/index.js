import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

/*
    GET    - Buscar
    POST   - Criar
    PUT    - Atualizar
    DELETE - Remover
*/

const jogos = [
    { id: 1, nome: "League of Legends", genero: "MOBA",        ano: 2009 },
    { id: 2, nome: "Valorant",          genero: "FPS Tático",  ano: 2020 },
    { id: 3, nome: "World of Warcraft", genero: "MMORPG",      ano: 2004 },
    { id: 4, nome: "PES 2018",          genero: "Futebol",     ano: 2017 },
    { id: 5, nome: "TFT",               genero: "Auto Battler", ano: 2019 },
    { id: 6, nome: "No Rest for the Wicked", genero: "RPG de ação", ano: 2024 },
];


app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "pages", "index.html")
    );
});


app.get("/jogos", (req, res) => {
    res.sendFile(
        path.join(__dirname, "pages", "jogos.html")
    );
});


app.get("/contato", (req, res) => {
    res.sendFile(
        path.join(__dirname, "pages", "contato.html")
    );
});


app.get("/api/jogos", (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.json(jogos);
    }

    const resultado = jogos.find(jogo => jogo.nome.toLowerCase() === nome.toLowerCase());

    if (!resultado) {
        return res.status(404).json({ mensagem: "Jogo não encontrado" });
    }

    return res.json(resultado);
});


app.get("/api/jogos/:id", (req, res) => {
    const { id } = req.params;

    const jogo = jogos.find(j => j.id === Number(id));

    if (!jogo) {
        return res.status(404).json({ mensagem: "Jogo não encontrado" });
    }

    return res.json(jogo);
});

app.listen(port, () => {
    console.log(`Catálogo de jogos rodando na porta ${port}`);
});