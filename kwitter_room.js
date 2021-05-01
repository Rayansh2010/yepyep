
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBkLlU4nma5cc6llyMl2pWeqDJ-E5HMd7U",
      authDomain: "my-school-app-4f724.firebaseapp.com",
      databaseURL: "https://my-school-app-4f724-default-rtdb.firebaseio.com",
      projectId: "my-school-app-4f724",
      storageBucket: "my-school-app-4f724.appspot.com",
      messagingSenderId: "178662725939",
      appId: "1:178662725939:web:4ed6915697f47ac31e8646",
      measurementId: "G-DRJ4J7SZ7T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var Username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + Username;
    function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
       });
     });
   
   }
getData();


function addRoom() {
      added_room_name = document.getElementById("roommade").value;

      firebase.database().ref("/").child(added_room_name).update({
            roomis: "roomnameadded"
      })

      localStorage.setItem("Addedroom", added_room_name);

      document.getElementById("roommade").value = "";

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Addedroom", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("Addedroom");
      window.location = "index.html";
}