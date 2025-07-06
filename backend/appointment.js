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
        db.run('INSERT INTO appointment (name, mobile, email, enquiry_type, appointment_date, appointment_time) VALUES (?, ?, ?, ?, ?, ?)', name, mobile, email, enquiry_type, appointment_date, appointment_time, (err) => {
            if(err)
                reject(err);
            else
                resolve();
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
    deleteAppointment
};