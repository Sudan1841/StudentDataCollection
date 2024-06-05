/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



  // Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvdNdHfdIMqVRA0q8AGc5ZznMobedP0yY",
  authDomain: "contactform-efe7a.firebaseapp.com",
  databaseURL: "https://contactform-efe7a-default-rtdb.firebaseio.com",
  projectId: "contactform-efe7a",
  storageBucket: "contactform-efe7a.appspot.com",
  messagingSenderId: "136919636406",
  appId: "1:136919636406:web:14df42195e59b79b510917"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const studentForm = document.getElementById('studentForm');
const alertElement = document.getElementById('myAlert');

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const grade = document.getElementById('grade').value;

  saveStudentData(name, age, grade);

  showAlert();

  studentForm.reset();
});

function saveStudentData(name, age, grade) {
  db.collection('students').add({
    name: name,
    age: age,
    grade: grade
  })
  .then(() => {
    console.log('Student data saved successfully');
  })
  .catch((error) => {
    console.error('Error saving student data:', error);
  });
}

function showAlert() {
  alertElement.style.display = 'block';
  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 3000);
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  alertElement.style.display = 'none';
});


