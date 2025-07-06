var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
const appointment = require('./appointment');

var app = express();
// enabling CORS for some specific origins only.
const corsOptions = {
   origin : ['http://localhost:5173'],
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET ALL
app.get("/appointments", async function(req, res) {
    const allAgents = await appointment.getAgents();
    res.send(allAgents);
});

// GET
app.get("/appointment/:id", async function(req, res) {
    const agent = await appointment.getAgentById(req.params.id);
    res.send(agent);
});

// POST
app.post("/appointment", async function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await appointment.addAgent(firstName, lastName);
    res.send({"message": "Success"});
});

// PUT
app.put("/appointment/:id", async function(req, res) {
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await appointment.editAgent(id,firstName,lastName);
    res.send({"message": "Success"});
});

// DELETE
app.delete("/appointment/:id", async function(req, res) {
    await appointment.deleteAgent(req.params.id);
    res.send({"message": "Success"});
});


const SERVER_PORT = 3000;

// Server setup
app.listen(SERVER_PORT, () => {
    console.log(`Backend Server running on port ${SERVER_PORT}.`)
});