document.addEventListener('DOMContentLoaded',function(){

const list=document.querySelector('#movie-list ul');
const forms=document.forms;

//delete movie function
list.addEventListener('click',(e)=>{
if(e.target.className=='delete'){
    const li=e.target.parentElement;
    li.parentNode.removeChild(li);
}

});
//add movie function
const addForm=forms['add-movie'];
addForm.addEventListener('submit',function(e){
e.preventDefault();


//creating elements
const value=addForm.querySelector('input[type=text]').value;
const li=document.createElement('li');
const movieName=document.createElement('span');
const deleteButton=document.createElement('span');

//add text content
movieName.textContent=value;
deleteButton.textContent='delete';
//add classes
movieName.classList.add('name');
deleteButton.classList.add('delete');
//append to DOM
li.appendChild(movieName); 
li.appendChild(deleteButton); // 
list.appendChild(li);


});

})