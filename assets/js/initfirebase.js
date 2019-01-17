// Initialize Firebase
var config = {
    apiKey: "AIzaSyANibEP4Em0YoknfGPgYrGJ4xGpvVrKl9k",
    authDomain: "n-studio-zumba.firebaseapp.com",
    databaseURL: "https://n-studio-zumba.firebaseio.com",
    projectId: "n-studio-zumba",
    storageBucket: "n-studio-zumba.appspot.com",
    messagingSenderId: "435999712713"
};
firebase.initializeApp(config);

function signin() {
    var email=$('#email').val();
    var password=$('#password').val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('error').innerHTML="Invalid Credentials..!";
    });
}

function logout(){
    firebase.auth().signOut();
}
