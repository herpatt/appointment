###Local Setup

Any latest Node JS need to be already installed in the system

npm --version
11.4.2

node --version
v24.3.0

#####NPM Install
~/appointment/backend npm install<br/>
~/appointment/frontend  npm install<br/>
~/appointment  npm install<br/>

#####Run Application
~/appointment npm run dev

#####Backend URL
http://localhost:3000

#####FrontEnd URL
http://localhost:5173/


#####Included SQLite In-built DB
~/appointment/backend/appointment.db

Load the above db file in Dbeaver IDE or Eclipse to view its table data

#####Load all appointments
http://localhost:3000/appointments

#####Load appointment by appointment_id
http://localhost:3000/appointment/{appointment_id}