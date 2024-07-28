console.log('HELLO WORLD');

// Import required modules
const { createServer } = require('http');
const fs = require('fs');
const nodemailer = require('nodemailer');
const passwordGenerator = require('generate-password');

// Create an HTTP server
const server = createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello Node!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});

// Write a message to a file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('File write error:', err);
  } else {
    console.log('File "welcome.txt" created successfully.');
  }
});

// Generate multiple passwords
const generatePasswords = (numberOfPasswords = 3) => {
  return passwordGenerator.generateMultiple(numberOfPasswords);
};

console.log('Generated passwords:', generatePasswords());

// Generate a single password
function generatePassword() {
  const length = 12;
  const charset = "@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz";
  let password = '';

  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

console.log('Generated Password:', generatePassword());

// Configure and send an email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  "chaibisabrinemanouba@gmail.com", 
    pass: "behappy92",
  }
});

const mailOptions = {
  from: "chaibisabrinemanouba@gmail.com", // Use environment variables
  to: 'eyajlassi80@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Email send error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});


