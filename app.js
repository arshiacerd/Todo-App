function addBtn(){
  var item =   document.getElementById("add-items").value; //textbox value
//  alert(item);
var list =   document.getElementById("list");
var li =   document.createElement("li");
 var liText =  document.createTextNode(item); //innerHtML
  li.appendChild(liText);
list.appendChild(li);
console.log(list);
document.getElementById("add-items").value = "";
var editBtn = document.createElement("input");
editBtn.setAttribute('type' , 'button');
editBtn.setAttribute('value' , 'Edit');
editBtn.setAttribute("onclick", "editItem(this)");
editBtn.setAttribute('class' , 'edit');
 li.appendChild(editBtn);

 var delBtn = document.createElement("input");
 delBtn.setAttribute('type' , 'button');
 delBtn.setAttribute('value' , 'Delete');
 delBtn.setAttribute("onclick", "delItem(this)");
 delBtn.setAttribute('class' , 'del');
  li.appendChild(delBtn);
 

}
function editItem(e){
  var oldValue = e.parentNode.firstChild.nodeValue;
  var newValue = prompt("Enter updated value");
e.parentNode.firstChild.nodeValue = newValue;
}
function delItem(e){
  e.parentNode.remove();
}
function delAll(){
  var msg = prompt("Are you sure you want to delete the list?" , "Yes");
  var msgLower = msg.toLowerCase();
  console.log(msgLower);
  if(msgLower == "yes"){
  
    list.remove();
  }
  
 
}