const myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please Enter your Name: ');
    if(!myName){
        setUserName()
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla is cool, '+myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+storedName;
    myButton.textContent = 'Change user';
}
myButton.onclick = function(){
    setUserName();
}