const express = require('express');
const mysql = require('mysql2');
const appCreateEmail = express();
const appCheckEmail = express();
const appSignIn=express();

const cors = require('cors');

// CORS middleware
appCreateEmail.use(cors());
appCreateEmail.use(express.json());


appCheckEmail.use(cors());
appCheckEmail.use(express.json());

appSignIn.use(cors());
appSignIn.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#123456789#',
  database: 'data'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API 1: Email varlığını kontrol etmek
appCheckEmail.post('/check-email/:email', (req, res) => {
  const { email } = req.params;
  const query = 'SELECT * FROM person WHERE email = ?';
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error('Error while checking email existence:', err);
      res.status(500).json({ success: false, error: err.message });
    } else {
      res.status(200).json({ success: true, exists: result.length > 0 });
    }
  });
});

// API 2: Veritabanına kaydetmek
appCreateEmail.post('/save-to-database/:name/:surname/:email/:password', (req, res) => {
  const { name, surname, email, password } = req.params;

  const query = `INSERT INTO person (name, surname, email, password) values (?, ?, ?, ?)`;
  db.query(query, [name, surname, email, password], (err, result) => {
    if (err) {
      console.error('Error while saving to database:', err);
      res.status(500).json({ success: false, error: err.message });
    } else {
      console.log('Value saved to database');
      res.status(200).json({ success: true });
    }
  });
});


//API 3: Veritabanina giris etmek.

appSignIn.post(`/check-login/:email/:password`, (req, res) => {
  const { email, password } = req.params;

  const query = `SELECT * FROM person WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error while querying the database:', err);
      res.status(500).json({ success: false, error: err.message });
    } else {
      if (result.length > 0) {
        console.log('User found in the database');
        res.status(200).json({ success: true });
      } else {
        console.log('User not found in the database');
        res.status(401).json({ success: false, message: 'Email or password is incorrect' });
      }
    }
  });
});


const portCreateEmail = 3001;
const portCheckEmail = 3002;
const portSignin=3003;

const serverCreateEmail = appCreateEmail.listen(portCreateEmail, () => {
  console.log(`Server is running on port ${portCreateEmail}`);
});
const runningPortCreate = serverCreateEmail.address().port;
console.log(`The server is running on port ${runningPortCreate}`);


const serverCheckEmail = appCheckEmail.listen(portCheckEmail, () => {
  console.log(`Server is running on port ${portCheckEmail}`);
});
const runningPortCheck = serverCheckEmail.address().port;
console.log(`The server is running on port ${runningPortCheck}`);



const serverSignin = appSignIn.listen(portSignin, () => {
  console.log(`Server is running on port ${portSignin}`);
});
const runningPortSignin = serverSignin.address().port;
console.log(`The server is running on port ${runningPortSignin}`);

