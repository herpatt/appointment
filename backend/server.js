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
    const allAppointments = await appointment.getAppointments();
    res.send(allAppointments);
});

// GET
app.get("/appointment/:id", async function(req, res) {
    const agent = await appointment.getAppointmentById(req.params.id);
    res.send(agent);
});

// POST
app.post("/appointment", async function(req, res) {
    const name = req.body.name;
    console.log('request body input : ',req.body);
    const mobile = req.body.mobile;
    const email = req.body.email;
    const enquiry_type = req.body.enquiry_type;
    const appointment_date = req.body.appointment_date;
    const appointment_time = req.body.appointment_time;
    await appointment.addAppointment(name, mobile, email, enquiry_type, appointment_date, appointment_time);
    res.send({"message": "Success"});
});

// GET
app.get("/slot/:name", async function(req, res) {
    console.log('request params name : ',req.params.name);
    const slots = await appointment.loadAppointmentSlot(req.params.name);
    //const jsonObject = JSON.parse(slots);
    console.log('response body jsonObject : ',slots.VALUE);
    console.log('response body input : ',slots);
    res.send(slots.VALUE);
});

// POST
app.post("/slot/:name", async function(req, res) {
    console.log('request params name : ',req.params.name);
    console.log('request body input : ',req.body);
    await appointment.addAppointmentSlots(req.params.name, req.body);
    res.send({"message": "Success"});
});

// PUT
app.put("/slot/:name", async function(req, res) {
    console.log('request params name : ',req.params.name);
    console.log('request body input : ',req.body);
    await appointment.editAppointmentSlots(req.params.name, req.body);
    res.send({"message": "Success"});
});


// PUT
app.put("/appointment/:id", async function(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const enquiry_type = req.body.enquiry_type;
    const appointment_date = req.body.appointment_date;
    const appointment_time = req.body.appointment_time;
    await appointment.editAppointment(id, name, mobile, email, enquiry_type, appointment_date, appointment_time);
    res.send({"message": "Success"});
});

// DELETE
app.delete("/appointment/:id", async function(req, res) {
    await appointment.deleteAppointment(req.params.id);
    res.send({"message": "Success"});
});


const SERVER_PORT = 3000;

// Server setup
app.listen(SERVER_PORT, () => {
    console.log(`Backend Server running on port ${SERVER_PORT}.`)
});