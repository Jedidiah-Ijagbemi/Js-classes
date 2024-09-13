// Default functions  

const Signinpage = document.getElementById("signinpage");  
const registerpage = document.getElementById("registration");  

registerpage.style.display = "none";  
Signinpage.style.display = "block";  

function registrationpage() {  
  Signinpage.style.display = "none";  
  registerpage.style.display = "block";  
}  

function openlogin() {  
  Signinpage.style.display = "block";  
  registerpage.style.display = "none";  
}  

// Adding users to local storage  

let data = localStorage.getItem("userData");  
let users = [];  
if (data != null) {  
  users = JSON.parse(data);  
  console.log("Database working");  
}  

// For the login page  

const login = document.getElementById("loginpage");  
login.addEventListener("submit", function (event) {  
  event.preventDefault();  

  const username = document.getElementById("username").value;  
  const password = document.getElementById("password").value;  
  let userFound = false; // Flag to check if the user is found  

  for (let i = 0; i < users.length; i++) {  
    if (users[i].user === username && users[i].pin === password) {  
      userFound = true; // Set flag to true  
      console.log("User accepted");  
      alert(`Welcome ${username}`);  
      // window.location.href = '/Todo/index.html'; // Uncomment to redirect  
      break; // Exit loop on successful login  
    }  
  }  

  if (!userFound) {  
    alert("Username or password incorrect. Please try again.");  
    console.error("User access denied");  
  }  
});  

// For the signup / register page  

const signUp = document.getElementById("signup");  
signUp.addEventListener("submit", function (event) {  
  event.preventDefault();  

  const newUsername = document.getElementById("newuser").value;  
  const newPassword = document.getElementById("newpassword").value;  

  const newUser = {  
    user: newUsername,  
    pin: newPassword,  
  };  

  users.push(newUser);  
  alert("You have been added");  

  // Updating user to storage  
  const userdata = JSON.stringify(users);  
  localStorage.setItem("userData", userdata);  
});  


console.log(users);