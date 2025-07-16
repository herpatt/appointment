const db = require('./db');

function getAppointments() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM appointment', (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function getAppointmentById(id) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM appointment where id=(?)',id, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function addAppointment(name, mobile, email, enquiry_type, appointment_date, appointment_time) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO appointment (name, mobile, email, enquiry_type, appointment_date, appointment_time,status) VALUES (?, ?, ?, ?, ?, ?, ?)', name, mobile, email, enquiry_type, appointment_date, appointment_time,'Pending', (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function addAppointmentSlots(key, jsonObject) {
    return new Promise((resolve, reject) => {
        const jsonString = JSON.stringify(jsonObject);

        db.run('INSERT INTO appointment_slots (key, value) VALUES (?, ?)', key, jsonString, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function editAppointmentSlots(key, jsonObject) {
    return new Promise((resolve, reject) => {
        const jsonString = JSON.stringify(jsonObject);
        db.run('UPDATE appointment_slots SET value = (?) where key = (?)', [key, jsonString], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function loadAppointmentSlot(key) {
    return new Promise((resolve, reject) => {
        db.get('SELECT value FROM appointment_slots where key=(?)',key, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function editAppointment(id, name, mobile, email, enquiry_type, appointment_date, appointment_time) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE appointment SET name = (?), mobile = (?), mobile = (?), email = (?), enquiry_type = (?), appointment_date = (?), appointment_time = (?)  where id = (?)', [name, mobile, email, enquiry_type, appointment_date, appointment_time], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function editAppointmentStatus(id, status) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE appointment SET status = (?) where id = (?)', [status], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function deleteAppointment(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM appointment WHERE id = (?)', id, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

module.exports = {
    getAppointments,
    getAppointmentById,
    addAppointment,
    editAppointment,
    editAppointmentStatus,
    deleteAppointment,
    addAppointmentSlots,
    editAppointmentSlots,
    loadAppointmentSlot
};