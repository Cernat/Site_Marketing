//alert("conectatContact");

// ---------------> Formular!!!!!!!


var formular=document.getElementById("Formular");
//formular.style.max-height="50%";
//formular.style.max-width="50%";
//formular.style.background="dark-orange";
//formular.style.position="relative";
//formular.style.left="45px";

var creeazaFormular = document.createElement("form");
creeazaFormular.setAttribute("action","");
creeazaFormular.setAttribute("method","post");
formular.appendChild(creeazaFormular);

var titlu = document.createElement('h2');
titlu.innerHTML = "Contacteaza-ne!";
creeazaFormular.appendChild(titlu);

var linie = document.createElement('hr');
creeazaFormular.appendChild(linie);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var numeEmail = document.createElement('label');
numeEmail.innerHTML = "Adresa Email: ";
creeazaFormular.appendChild(numeEmail);

var inputEmail = document.createElement('input');
inputEmail.setAttribute("type","email");
//inputEmail.setAttribute("name","dName");
//inputEmail.id ="myInputEmail";
creeazaFormular.appendChild(inputEmail);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);


var parola = document.createElement('label');
parola.innerHTML = "Nume complet: ";
creeazaFormular.appendChild(parola);

var inputPass = document.createElement('textarea');
inputPass.setAttribute("name","dmessage");
inputPass.setAttribute("class","nume_complet");
creeazaFormular.appendChild(inputPass);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var textObs = document.createElement('label');
textObs.innerHTML = "Observatii: ";
creeazaFormular.appendChild(textObs);

var textObservatii = document.createElement('textarea');
textObservatii.setAttribute("name","dmessage");
creeazaFormular.appendChild(textObservatii);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

//Check Box-ul !!!

var myCheckBox = document.createElement('input');
myCheckBox.type = "checkbox";
myCheckBox.name = "testttt";
myCheckBox.value = "value";
myCheckBox.id = "myCheckBoxID";


var label = document.createElement('label')
label.htmlFor = "myCheckBoxID";
label.appendChild(document.createTextNode('Check me out!'));

creeazaFormular.appendChild(myCheckBox);
creeazaFormular.appendChild(label);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);

var breakPoint = document.createElement('br');
creeazaFormular.appendChild(breakPoint);



// Butonul de Submit!!

var mySubmit = document.createElement('BUTTON');
mySubmit.innerHTML = "Submit";
mySubmit.setAttribute("class", "mySubmitClass");
mySubmit.setAttribute("type", "submit");
mySubmit.setAttribute("name", "dsubmit");
mySubmit.setAttribute("value", "Submit");
mySubmit.setAttribute("id", "mySubmitId");

creeazaFormular.appendChild(mySubmit);

// Butonul de Reset!!

var myReset = document.createElement('BUTTON');
myReset.innerHTML = "Reset";
myReset.setAttribute("class", "myResetClass");
creeazaFormular.appendChild(myReset);









//-----------------------------Sus a fost creearea de butoane in formular.


// 2)


mySubmit.addEventListener('click',function(e){
	
	e.preventDefault(e);
	//alert("conectat!");
	var email = inputEmail.value;
	var pass = inputPass.value;
	
	console.log(email);
	console.log(pass);
	
	if (ValidateEmail(email)){
	document.getElementById("input").innerHTML = 'Email: '+email+'<br>Password: '+pass;
	/*
	Swal.fire(
	 'Good job!',
	'Multumim frumos!',
	'A fost trimis un email catre noi!',
	'Iti vom raspunde in cel mai scurt timp posibil'
)
*/
	Swal.fire(
  'Multumim frumos!',
  'A fost trimis un email catre noi!',
  'success'
)
	
	}
	else{
		
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[0]);
	
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[1]);
	}
	
});

// Trebuie sa dai check la buton ca sa poti da submit!!

myCheckBox.checked =false;

mySubmit.style.opacity=".5";
mySubmit.disabled=true;
mySubmit.style.cursor="not-allowed";
	
//console.log(check.value);
myCheckBox.addEventListener("click",function (){
	
  if (myCheckBox.checked) {
    //alert("checked");
	mySubmit.style.opacity="";
	mySubmit.disabled=false;
	mySubmit.style.cursor="default";
	
  } else {
   // alert("You didn't check it! Let me check it for you.");
	mySubmit.style.opacity=".5";
	mySubmit.disabled=true;
	mySubmit.style.cursor="not-allowed";
  }
	
});



var rezultat = null;
myReset.addEventListener('click',function(e){
	
	e.preventDefault(e);
	
	var result = confirm("Sigur vrei sa reseti formularul?");
	if (result==true) {
		
	inputEmail.value="";
	inputPass.value="";
	textObservatii.value="";
	myRange.value="1";
    //var email=document.getElementById("myInputEmail").value="";
	//var pass=document.getElementById("exampleInputPassword1").value="";
	//var range=document.getElementById("formControlRange").value="18";
	//var anul=document.getElementById("exampleFormControlSelect1").value="1";
	
	myCheckBox.checked =false;
	mySubmit.style.opacity=".5";
	mySubmit.disabled=true;
	mySubmit.style.cursor="not-allowed";
	
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[0]);
	
	var list = document.getElementById("input");
	list.removeChild(list.childNodes[1]);
	}
		
	
});

function ValidateEmail(mail) 
{
	//console.log(mail);
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    //alert("Ai introdus o adresa de email invalida!")
	
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: ' Ai introdus o adresa de email invalida!',
	  footer: 'Trebuie introdus: exemplu@yahoo.com'
	})
	
    return (false)
}


document.body.addEventListener("keydown", function(event){

	if(event.key === "Enter")
	{
		//alert("conectat boss");
		event.preventDefault();
		document.getElementById("mySubmitId").click();		
	}

});

document.addEventListener('keydown', function(e){
  if(e.key == "Escape")
    window.location.reload(true); 
	
})







