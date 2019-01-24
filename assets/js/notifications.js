
var data = firebase.database().ref('notifications').orderByKey().endAt("3").limitToLast(4);

data.on('value', function(snapshot) {
    document.getElementById('tbody').innerHTML ="";
    snapshot.val().reverse().forEach(function (a) {
        document.getElementById('tbody').innerHTML +='<tr>\n' +
                '  <td class="product-name"><a href="#" readonly>'+a.createdat+'</a></td>\n' +
                '  <td class="product-name"><a href="#">'+a.title+'</a></td>\n' +
                '  <td class="product-name text-left"><a href="#">'+a.message+'</a></td>\n' +
                '  <td class="product-name"><a href="#">'+a.image+'</a></td>\n' +
                '  <td class="product-remove"><a><i class="fa fa-times" onclick="edit(\''+a.id+'\',\''+a.title+'\',\''+a.message+'\',\''+a.image+'\')"></i></a></td>\n' +
                '  <td class="product-remove"><a><i class="fa fa-times" onclick="remove(\''+a.image+'\',\''+a.id+'\')"></i></a></td>\n' +
                '  </tr>'
    })
        // window.alert(snapshot.val().length);
});

function edit(id,title,message,image) {
    document.getElementById('header').innerHTML='<img src="../assets/images/logo/ttl-bar.png" alt="title-img">\n' +
        '                            <h3>Update Items</h3>\n' +
        '                            <p>Please change the related data and hit update button</p>';

    document.getElementById('button').innerHTML='<button type="button" class="btn active full-width btn-primary" onclick="update(\''+id+'\')">Update</button>';
    document.getElementById('title').value=title;
    document.getElementById('message').value=message;
    document.getElementById('imageval').value=image;
    document.getElementById('imgholder').innerHTML='<div class="text-danger text-center">If you want to change the image, please delete this notification and create a new notification</div>';
    // alert(document.getElementById('imageval').value)
    $('#additems').modal('show');
}

function update(id) {
    var title=$('#title').val();
    var message=$('#message').val();
    var image=$('#imageval').val();
    var createdat=new Date().toLocaleString();
    if((title==""||message=="")==true){
        alert('Please fill all fields correctly')
    }else{
        var data = firebase.database().ref('notifications');
        data.once('value', function(snapshot) {
            var data = firebase.database().ref('notifications/'+id);
            data.set({
                id:id,
                title: title,
                message: message,
                image: image,
                createdat: createdat,
            }, function(error) {
                if (error) {
                    alert('Failed..! Try Again');
                    $('#additems').modal('hide');
                    // location.reload();
                }else{
                    alert('Update Suceeded');
                    $('#additems').modal('hide');
                    // location.reload();
                }
            });
        })
    }
}


function remove(name,id) {
    if(name!="none"){
        var storageRef = firebase.storage().ref();
        var dataRef = storageRef.child('notifications/'+name);
        dataRef.delete().then(function() {
            // File deleted successfully
        }).catch(function(error) {
            alert("Something Went Wrong..!")
        });
    }
    firebase.database().ref('notifications/'+id).remove();
    alert('Removed Success')
}
function additembutton() {
    document.getElementById('header').innerHTML='<img src="../assets/images/logo/ttl-bar.png" alt="title-img">\n' +
        '                            <h3>Add Items</h3>\n' +
        '                            <p>Please fill the form and hit submit button</p>';

    document.getElementById('button').innerHTML='<button type="button" class="btn active full-width btn-primary" onclick="additem()">Submit</button>';
    document.getElementById('title').value="";
    document.getElementById('message').value="";
    document.getElementById('imgholder').innerHTML='<label for="image" class="btn active btn-primary">Upload Image</label>\n' +
        '                                    <input id="image" type="file" accept="image/*" onchange="loadFile(event)"/>\n' +
        '                                    <div id="dispimage" class="col-md-12" style="margin-top: 30px;display: none">\n' +
        '                                        <img id="output" style="width: 300px;height: 200px;border-radius: 10px;border:solid 1px hotpink;"/>\n' +
        '                                    </div>';
    document.getElementById('dispimage').style.display="none";
    var output = document.getElementById('output');
    output.src ="";
    document.querySelector('[type=file]').value=null
    $('#additems').modal('show');
}

var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    document.getElementById('dispimage').style.display="block";
};

function additem(){
    var title=$('#title').val();
    var message=$('#message').val();
    if((title==""||message=="")==true){
        alert('Please fill all fields correctly')
    }else{
        var createdat=new Date().toLocaleString();
        var files = document.querySelector('[type=file]').files;
        var image="none"
        if(files.length==1){
            $('#additems').modal('hide');
            $('#loading').modal('show');
            var file=files[0];
            image=file.name
            var storageRef = firebase.storage().ref();
            var galleryImagesRef = storageRef.child('notifications/'+file.name);
            galleryImagesRef.put(file).then(function(snapshot) {
                $('#loading').modal('hide');
            });
        }
        var data = firebase.database().ref('notifications');
        data.once('value', function(snapshot) {
            if(snapshot.numChildren()==0){
                var id=0
            }else{
                var id=snapshot.val().length
            }
            var data = firebase.database().ref('notifications/'+id);
            data.set({
                id:id,
                title: title,
                message: message,
                image: image,
                createdat: createdat,
            }, function(error) {
                if (error) {
                    alert('Failed..! Try Again');
                    $('#additems').modal('hide');
                }else{
                    alert('Add Suceeded');
                    $('#additems').modal('hide');
                }
            });
        })
    }
    //save meta data to database
}