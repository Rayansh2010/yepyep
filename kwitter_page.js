//YOUR FIREBASE LINKS

var user_name = localStorage.getItem("username");
var room_name = localStorage.getItem("Addedroom");

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

    function send() {

      var msg = document.getElementById("messagegiven").value;

      firebase.database().ref(room_name).update({
            message: msg,
            name: user_name,
            like: 0

      });

      document.getElementById("messagegiven").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("Addedroom");
      window.location = "index.html";
}