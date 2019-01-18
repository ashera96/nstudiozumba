var data = firebase.database().ref('gallery');
var imgstorage = firebase.storage();
var pathReference;
data.on('value', function(snapshot) {
    document.getElementById('tbody').innerHTML="";
    snapshot.val().forEach(function (a) {
        pathReference = imgstorage.ref('gallery/'+a.name);
        pathReference.getDownloadURL().then(function(url) {
            document.getElementById('tbody').innerHTML+='<tr>\n' +
                '<td class="product-thumbnail">\n' +
                '     <a href="#"><img src='+url+' style="width:200px;height:150px"></a>\n' +
                '</td>\n' +
                '<td class="product-name"><a href="#">'+a.name+'</a></td>\n' +
                '<td class="product-remove">'+"<button type='button' onclick='remove(\""+a.name+"\",\""+a.id+"\")'><i class='fa fa-times'></i></button>"+'</td>\n' +
                '</tr>';
            // document.getElementById('img').src=url;
        }).catch(function(error) {
            // alert("something went wrong")
        });
        // alert(1)

    })
});

var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    document.getElementById('dispimage').style.display="block";
    document.getElementById('btnsubmit').style.display="block";
};

function remove(name,id){
    var storageRef = firebase.storage().ref();
    var dataRef = storageRef.child('gallery/'+name);
    dataRef.delete().then(function() {
        // File deleted successfully
    }).catch(function(error) {
        alert("Something Went Wrong..!")
    });
    firebase.database().ref('gallery/'+id).remove();
    alert("Delete Succeeded")

}

function file() {
    $('#loading').modal('show');
    document.getElementById('btnsubmit').style.display="none";
    const files = document.querySelector('[type=file]').files;
    var file=files[0];
    var id=0;

    //get last id to make new id
    var data = firebase.database().ref('gallery');
    data.on('value', function(snapshot) {
        id=snapshot.val().length
    })

    //save meta data to database
    var data = firebase.database().ref('gallery/'+id);
    data.set({
        id:id,
        name: file.name,
    }, function(error) {
        if (error) {
            alert('Upload Failed..!')
        }
    });

    //Upload file to cloud storage
    var storageRef = firebase.storage().ref();
    var galleryImagesRef = storageRef.child('gallery/'+file.name);
    galleryImagesRef.put(file).then(function(snapshot) {
        $('#loading').modal('hide');
        location.reload();
        alert('Upload Succeeded..!');
    });
}