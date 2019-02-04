firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('body').style.display="block";
    } else {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        location.replace(baseUrl+'/login.html')
    }
});
// window.alert('got')