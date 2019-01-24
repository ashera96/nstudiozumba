var data = firebase.database().ref('packages');
data.on('value', function(snapshot) {
    document.getElementById('tbody').innerHTML ="";
    snapshot.val().forEach(function (a) {
        document.getElementById('tbody').innerHTML +='<tr>\n' +
            '  <td class="product-name"><a href="#">'+a.name+'</a></td>\n' +
            '  <td class="product-name"><a href="#">'+a.service+'</a></td>\n' +
            '  <td class="product-name"><input type="number" value='+a.amount+' readonly/></td>\n' +
            '  <td class="product-name"><a href="#">'+a.validity+'</a></td>\n' +
            '  <td class="product-name"><input type="number" value='+a.regfee+' readonly/></td>\n' +
            '  <td class="product-remove"><a><i class="fa fa-pencil" onclick="edit(\''+a.id+'\',\''+a.name+'\',\''+a.service+'\',\''+a.amount+'\',\''+a.regfee+'\',\''+a.validity+'\')"></i></a></td>\n' +
            '  <td class="product-remove"><a><i class="fa fa-times" onclick="remove(\''+a.id+'\')"></i></a></td>\n' +
            '  </tr>'
    })
    // window.alert(snapshot.val().length);
});

function additembutton() {
    document.getElementById('header').innerHTML='<img src="../assets/images/logo/ttl-bar.png" alt="title-img">\n' +
        '                            <h3>Add Items</h3>\n' +
        '                            <p>Please fill the form and hit submit button</p>';

    document.getElementById('button').innerHTML='<button type="button" class="btn active full-width btn-primary" onclick="additem()">Submit</button>';
    document.getElementById('name').value="";
    document.getElementById('service').value="";
    document.getElementById('amount').value=0;
    $('#additems').modal('show');
}

function additem(){
    var name=$('#name').val();
    var service=$('#service').val();
    var amount=$('#amount').val();
    var regfee=$('#regfee').val();
    var validity=$('#validity').val();
    if((name==""||service==""||amount==""||regfee=="")==true){
        alert('Please fill all fields correctly')
    }else{
        var data = firebase.database().ref('packages');
        var id=0;
        data.once('value', function(snapshot) {
            id=snapshot.val().length;
        })
        var data = firebase.database().ref('packages/'+id);
        data.set({
            id:id,
            name: name,
            service: service,
            amount: amount,
            regfee: regfee,
            validity: validity,
        }, function(error) {
            if (error) {
                alert('Failed..! Try Again');
                $('#additems').modal('hide');
            }else{
                alert('Add Suceeded');
                $('#additems').modal('hide');
                // location.reload();
            }
        });
    }
    //save meta data to database
}

function update(id) {
    var name=$('#name').val();
    var service=$('#service').val();
    var amount=$('#amount').val();
    var regfee=$('#regfee').val();
    var validity=$('#validity').val();
    if((name==""||service==""||amount==""||regfee=="")==true){
        alert('Please fill all fields correctly')
    }else{
        var data = firebase.database().ref('packages');
        data.once('value', function(snapshot) {
            var data = firebase.database().ref('packages/'+id);
            data.set({
                id:id,
                name: name,
                service: service,
                amount: amount,
                regfee: regfee,
                validity:validity
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

function edit(id,name,service,amount,regfee,validity) {
    document.getElementById('header').innerHTML='<img src="../assets/images/logo/ttl-bar.png" alt="title-img">\n' +
        '                            <h3>Update Items</h3>\n' +
        '                            <p>Please change the related data and hit update button</p>';

    document.getElementById('button').innerHTML='<button type="button" class="btn active full-width btn-primary" onclick="update(\''+id+'\')">Update</button>';
    document.getElementById('name').value=name;
    document.getElementById('service').value=service;
    document.getElementById('amount').value=amount;
    if(regfee==500){
        document.getElementById('regfee').selectedIndex=0;
    }else{
        document.getElementById('regfee').selectedIndex=1;
    }

    if(validity=="Monthly"){
        document.getElementById('validity').selectedIndex=0;
    }else{
        document.getElementById('validity').selectedIndex=1;
    }

    $('#additems').modal('show');
}

function remove(id) {
    firebase.database().ref('packages/'+id).remove();
    alert('Removed Success')
}
