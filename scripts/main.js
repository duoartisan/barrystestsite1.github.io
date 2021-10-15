let myImage=document.querySelector('img');

myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/images1.png'){
        myImage.setAttribute('src','images/images2.png');
    }else{
        myImage.setAttribute('src','images/images1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }   else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mages cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent = 'Mages care cool too, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }