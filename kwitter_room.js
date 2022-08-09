// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQD8npnAe5hxFNVjPMNenfMA867AcwbBI",
    authDomain: "project-95-96-de587.firebaseapp.com",
    projectId: "project-95-96-de587",
    storageBucket: "project-95-96-de587.appspot.com",
    messagingSenderId: "817376289355",
    appId: "1:817376289355:web:edb9f89695934d1624a3ce",
    measurementId: "G-MK4XP0NCB9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
          dislike:0
    });
    document.getElementById("msg").value = "";
}