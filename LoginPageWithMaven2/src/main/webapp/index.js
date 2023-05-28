const log = document.querySelector('.login-popup');
const login = document.querySelector('.login-link');
const register = document.querySelector('.register-link');
const update = document.querySelector('.update-link');
const deletes = document.querySelector('.delete-link');
const close1 =document.querySelector('.icon-close1');
const close2 =document.querySelector('.icon-close2');
const close3 = document.querySelector('.icon-close3');
const close4 = document.querySelector('.icon-close4');
const inputMail = document.querySelector('#email');
const inputPass = document.querySelector('#password');
const showMail = document.querySelector('.e-mail');
const showPass = document.querySelector('.pass-word');
const inputMail2 = document.querySelector('#username');
const inputPass2 = document.querySelector('#password2');
const showMail2 = document.querySelector('.e-mail2');
const showPass2 = document.querySelector('.pass-word2');

const inputMail3 = document.querySelector('#email3');
const inputPass3 = document.querySelector('#password3');
const inputPass33 = document.querySelector('#password33');
const showMail3 = document.querySelector('.e-mail3');
const showPass3 = document.querySelector('.pass-word3');
const showPass33 = document.querySelector('.pass-word33');

const inputMail4 = document.querySelector('#email4');
const inputPass4 = document.querySelector('#password4');
const showMail4 = document.querySelector('.e-mail4');
const showPass4 = document.querySelector('.pass-word4');
const option = document.querySelector('#rate1');
const tick = document.querySelector('#check1');
const option2 = document.querySelector('#rate2');
const tick2 = document.querySelector('#check2');

const form = document.querySelector('#first');

/*registerLink.addEventListener('click', funcR);
function funcR(){
    let reg = document.querySelector('.form-box-register');
    reg.style.display=block;
}*/


/*login event*/
log.addEventListener('click', funcL1);
function funcL1(){
    document.querySelector('.wrapper').classList.add('showWrapper');
}
log.addEventListener('click', funcL2);
function funcL2(){
    document.querySelector('.form-box').classList.add('showLoginForm');
}

/*icon close1 event*/
close1.addEventListener('click', funcc1);
function funcc1(){
    document.querySelector('.wrapper').classList.remove('showWrapper');
}
close1.addEventListener('click', funcc2);
function funcc2(){
    document.querySelector('.form-box').classList.remove('showLoginForm');
}
close1.addEventListener('click', funcc5);
function funcc5(){
    inputMail.value="";
    inputPass.value="";
    showMail.innerHTML="";
    showPass.innerHTML="";
    option.value="Select";
    tick.checked=false;
}


/*register-link*/
register.addEventListener('click', funcR1);
function funcR1(){
    document.querySelector('.form-box').classList.remove('showLoginForm');
}
register.addEventListener('click', funcR2);
function funcR2(){
    document.querySelector('.form-box-register').classList.add('showRegistrationForm');
}

/*login link*/
login.addEventListener('click', funcLC1);
function funcLC1(){
    document.querySelector('.form-box').classList.add('showLoginForm');
}
login.addEventListener('click', funcLC2);
function funcLC2(){
    document.querySelector('.form-box-register').classList.remove('showRegistrationForm');
}

/*icon close2 Event*/
close2.addEventListener('click', funcc3);
function funcc3(){
    document.querySelector('.wrapper').classList.remove('showWrapper');
}
close2.addEventListener('click', funcc4);
function funcc4(){
    document.querySelector('.form-box-register').classList.remove('showRegistrationForm');
}
close2.addEventListener('click', funcc6);
function funcc6(){
    inputMail2.value="";
    inputPass2.value="";
    showMail2.innerHTML="";
    showPass2.innerHTML="";
    option2.value="Select";
    tick2.checked=false;
}


// Update Event // 
update.addEventListener('click', ()=>{
    document.querySelector('.form-box-update').classList.add('showUpdateForm');
    document.querySelector('.form-box').classList.remove('showLoginForm');
})

// Delete Event //
deletes.addEventListener('click', ()=>{
    document.querySelector('.form-box-delete').classList.add('showDeleteForm');
    document.querySelector('.form-box').classList.remove('showLoginForm');
})

//icon-close-3-event //
close3.addEventListener('click', ()=>{
    document.querySelector('.form-box-update').classList.remove('showUpdateForm');
    document.querySelector('.wrapper').classList.remove('showWrapper');
    inputMail3.value="";
    inputPass3.value="";
    inputPass33.value="";
    showMail3.innerHTML="";
    showPass3.innerHTML="";
    showPass33.innerHTML="";

})

//
close4.addEventListener('click', ()=>{
    document.querySelector('.form-box-delete').classList.remove('showDeleteForm');
    document.querySelector('.wrapper').classList.remove('showWrapper');
    inputMail4.value="";
    inputPass4.value="";
    showMail4.innerHTML="";
    showPass4.innerHTML="";
})

// Login-Form Valid Check //

//1.Email // 
inputMail.addEventListener('input', ()=>{
    inputMail.type='email';
  let str = inputMail.value;
  let indexa=-1;
  let indexd=-1;

  for(var i=0; i<str.length; i++){
      if(str.charAt(i)==='@'){
         indexa = i;
         break;
      }
  }

  if(indexa>0){
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==='.'){
           indexd = i;
           break;
        }
  }
}
  if(indexd>indexa && indexd<str.length-1){
     showMail.innerHTML="Valid Email Address";
     showMail.style.color = 'green';
  }
  else{
    showMail.innerHTML="Invalid Email Address";
    showMail.style.color = 'rgb(255,0,0)';
  }

});

//2.Password//

inputPass.addEventListener('input', ()=>{
    inputPass.type='password';
    let str = inputPass.value;
    if(str.length<6){
        showPass.innerHTML="Password is too short";
        showPass.style.color = 'red';
    }
    else if(str.length>15){
        showPass.innerHTML="Password is too long";
        showPass.style.color = 'red';
    }
    else{
        showPass.innerHTML="";
    }
});


// Register Form Valid Check //

//1.Email // 
inputMail2.addEventListener('input', ()=>{
    inputMail2.type='email';
    let str = inputMail2.value;
    let indexa=-1;
    let indexd=-1;
  
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==='@'){
           indexa = i;
           break;
        }
    }
  
    if(indexa>0){
      for(var i=0; i<str.length; i++){
          if(str.charAt(i)==='.'){
             indexd = i;
             break;
          }
    }
  }
    if(indexd>indexa && indexd<str.length-1){
       showMail2.innerHTML="Valid Email Address";
       showMail2.style.color = 'green';
    }
    else{
      showMail2.innerHTML="Invalid Email Address";
      showMail2.style.color = 'rgb(255,0,0)';
    }
  
  });
  
  //2.Password//
  
  inputPass2.addEventListener('input', ()=>{
      inputPass2.type = 'password';
      let str = inputPass2.value;
      if(str.length<6){
          showPass2.innerHTML="Password is too short";
          showPass2.style.color = 'red';
      }
      else if(str.length>15){
          showPass2.innerHTML="Password is too long";
          showPass2.style.color = 'red';
      }
      else{
          showPass2.innerHTML="";
      }
  });

  // Update Form Valid Check

  inputMail3.addEventListener('input', ()=>{
    inputMail3.type='email';
  let str = inputMail3.value;
  let indexa=-1;
  let indexd=-1;

  for(var i=0; i<str.length; i++){
      if(str.charAt(i)==='@'){
         indexa = i;
         break;
      }
  }

  if(indexa>0){
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==='.'){
           indexd = i;
           break;
        }
  }
}
  if(indexd>indexa && indexd<str.length-1){
     showMail3.innerHTML="Valid Email Address";
     showMail3.style.color = 'green';
  }
  else{
    showMail3.innerHTML="Invalid Email Address";
    showMail3.style.color = 'rgb(255,0,0)';
  }

});

  inputPass3.addEventListener('input', ()=>{
    inputPass3.type = 'password';
    let str = inputPass3.value;
    if(str.length<6){
        showPass3.innerHTML="Password is too short";
        showPass3.style.color = 'red';
    }
    else if(str.length>15){
        showPass3.innerHTML="Password is too long";
        showPass3.style.color = 'red';
    }
    else{
        showPass3.innerHTML="";
    }
});   

    inputPass33.addEventListener('input', ()=>{
        inputPass33.type='password';
        let str = inputPass33.value;
        if(str.length<6){
            showPass33.innerHTML="Password is too short";
            showPass33.style.color = 'red';
        }
        else if(str.length>15){
            showPass33.innerHTML="Password is too long";
            showPass33.style.color = 'red';
        }
        else{
            showPass33.innerHTML="";
        }
    });

// Delete Form Valid Check //
inputMail4.addEventListener('input', ()=>{
    inputMail4.type='email';
  let str = inputMail4.value;
  let indexa=-1;
  let indexd=-1;

  for(var i=0; i<str.length; i++){
      if(str.charAt(i)==='@'){
         indexa = i;
         break;
      }
  }

  if(indexa>0){
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==='.'){
           indexd = i;
           break;
        }
  }
}
  if(indexd>indexa && indexd<str.length-1){
     showMail4.innerHTML="Valid Email Address";
     showMail4.style.color = 'green';
  }
  else{
    showMail4.innerHTML="Invalid Email Address";
    showMail4.style.color = 'rgb(255,0,0)';
  }

});

  inputPass4.addEventListener('input', ()=>{
    inputPass4.type = 'password';
    let str = inputPass4.value;
    if(str.length<6){
        showPass4.innerHTML="Password is too short";
        showPass4.style.color = 'red';
    }
    else if(str.length>15){
        showPass4.innerHTML="Password is too long";
        showPass4.style.color = 'red';
    }
    else{
        showPass4.innerHTML="";
    }
});

  // Login Form Submit Check  // 
  
  function legit1(){
	  const name = document.querySelector('#email');
	  const pass = document.querySelector('#password');
	  x=false,y=false;
	  
	  // email//
	  let str = name.value;
      let indexa=-1;
      let indexd=-1;

      for(var i=0; i<str.length; i++){
           if(str.charAt(i)==='@'){
              indexa = i;
              break;
              }
            }

       if(indexa>0){
            for(var i=0; i<str.length; i++){
                 if(str.charAt(i)==='.'){
                     indexd = i;
                     break;
                 }
               }
             }
       if(indexd>indexa && indexd<str.length-1){
               x=true;
             }
             
        //password
        
        let str2 = pass.value;
        if(str2.length>5&&str2.length<16){
			y=true;
		}
		
		//final
		
		if(x==true && y == true){
			return true;
		}
		else {
			alert('Please enter a valid Email and Password');
			return false;
		}
             
       }
       
       
// Register Form Submit Check //    
  function legit2(){
	  const name = document.querySelector('#username');
	  const pass = document.querySelector('#password2');
	  x=false,y=false;
	  
	  // email//
	  let str = name.value;
      let indexa=-1;
      let indexd=-1;

      for(var i=0; i<str.length; i++){
           if(str.charAt(i)==='@'){
              indexa = i;
              break;
              }
            }

       if(indexa>0){
            for(var i=0; i<str.length; i++){
                 if(str.charAt(i)==='.'){
                     indexd = i;
                     break;
                 }
               }
             }
       if(indexd>indexa && indexd<str.length-1){
               x=true;
             }
             
        //password
        
        let str2 = pass.value;
        if(str2.length>5&&str2.length<16){
			y=true;
		}
		
		//final
		
		if(x==true && y == true){
			return true;
		}
		else {
			alert('Please enter a valid Email and Password');
			return false;
		}
             
       }

// Update Form Submit Check   //  
function legit3(){
    const name = document.querySelector('#email3');
    const pass = document.querySelector('#password3');
    const pass2 = document.querySelector('#password33');
    x=false,y=false, z= false;
    
    // email//
    let str = name.value;
    let indexa=-1;
    let indexd=-1;

    for(var i=0; i<str.length; i++){
         if(str.charAt(i)==='@'){
            indexa = i;
            break;
            }
          }

     if(indexa>0){
          for(var i=0; i<str.length; i++){
               if(str.charAt(i)==='.'){
                   indexd = i;
                   break;
               }
             }
           }
     if(indexd>indexa && indexd<str.length-1){
             x=true;
           }
           
      //password
      
      let str2 = pass.value;
      let str3 = pass2.value;
      
      if(str2.length>5&&str2.length<16){
          y=true;
      }
      
      if(str3.length>5&&str3.length<16){
          z=true;
      }
      
     
      
      //final
      
      if(x==true && y == true && z==true){
		 if(str2 != str3){
		  alert('Password Mismatch');
		  return false;
	  }
          return true;
      }
      else {
          alert('Please enter valid Email and Password Values');
          return false;
      }
           
     }
       
// Delete Form Submit Check //
function legit4(){
    const name = document.querySelector('#email4');
    const pass = document.querySelector('#password4');
    x=false,y=false;
    
    // email//
    let str = name.value;
    let indexa=-1;
    let indexd=-1;

    for(var i=0; i<str.length; i++){
         if(str.charAt(i)==='@'){
            indexa = i;
            break;
            }
          }

     if(indexa>0){
          for(var i=0; i<str.length; i++){
               if(str.charAt(i)==='.'){
                   indexd = i;
                   break;
               }
             }
           }
     if(indexd>indexa && indexd<str.length-1){
             x=true;
           }
           
      //password
      
      let str2 = pass.value;
      if(str2.length>5&&str2.length<16){
          y=true;
      }
      
      
      //final
      
      if(x==true && y == true){
          return true;
      }
      else {
          alert('Please enter valid Email and Password Values');
          return false;
      }
           
     }
       



 // using fetch method to make entries to database //
 
const entry = async () => {
	 event.preventDefault();
	 let formData = new FormData(form);
	 let sendData ={};
	 for(let[key, value] of formData.entries()){
		 sendData[key] = value;
	 }
	 
	 try{
		 
		 let res = await fetch('http://localhost:9494/LoginPage/login2',{
		 method:'post',
		 headers:{
			'Content-Type' : 'application/json' 
		 },
		 body:JSON.stringify(sendData)
	     });
	     
	     let data = await res;
	     
	     console.log(data+" operation completed successfully");
         }
	     catch(error){
		 console.log("An error occurred "+error);
	     }
	
         } 
       form.addEventListener('submit', entry);