// var form = document.getElementById ('addForm');
var newName = document.getElementById ('item');

newName.addEventListener ('keyup', addName);
var newItem = document.getElementById ('items');

function addName (e){
    document.getElementById ('name1').innerHTML =  '<h3>Welcome '+e.target.value+'</h3>';
    
}

var select = document.querySelector ('select');
select.addEventListener ('change', formTable);

function formTable (e){
   
    for (var i=0;i<=10;i++){
        var liItem = document.createElement ('li');
        
    liItem.className = 'list-group-item';
    
    liItem.innerHTML =  '<h3>'+i+' X '+e.target.value+' = '+(i*e.target.value)+'</h3>';
    // document.getElementById ('items')
    // liItem.appendChild (document.createTextNode (liItem));
     newItem.appendChild (liItem);   
        
    }
}