var firebaseConfig = {
    apiKey: "AIzaSyCQR7_B-8i6eRSJzdjq3cYsZ4o1xtLSc08",
    authDomain: "hackathon-9a101.firebaseapp.com",
    databaseURL: "https://hackathon-9a101-default-rtdb.firebaseio.com",
    projectId: "hackathon-9a101",
    storageBucket: "hackathon-9a101.appspot.com",
    messagingSenderId: "1053508331058",
    appId: "1:1053508331058:web:64170e91fc6778e97fbe2b",
    measurementId: "G-Q41JB5Z8HW",
  };// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(files[i].name);

      //upload file
      var upload = storage.put(files[i]);

      //update progress bar
    //   upload.on(
    //     "state_changed",
        
    //     function error() {
    //       alert("error uploading file");
    //     },

    //     function complete() {
    //       document.getElementById(
    //         "uploading"
    //       ).innerHTML += `${files[i].name} upoaded <br />`;
    //       document.getElementById('showda').style.display="block";
    //     }
    //   );
    }
  } else {
    alert("No file chosen");
  }
});

function getFileUrl(filename) {
  //create a storage reference
  var storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function(url) {
      console.log(url);
    })
    .catch(function(error) {
      console.log("error encountered");
    });
}