
var firebaseConfig = {
      apiKey: "AIzaSyAlIHnArmQjYgPYDFParBci_AW9ayojOU8",
      authDomain: "kwitter-2a384.firebaseapp.com",
      databaseURL: "https://kwitter-2a384-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a384",
      storageBucket: "kwitter-2a384.appspot.com",
      messagingSenderId: "268114156184",
      appId: "1:268114156184:web:af19fb1cb248c1adc90eed"
    };
    

  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" + Room_names+ " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

