function sc(){

    let pwd = document.querySelector('#pwd').value
    let pw = pwd.length
    let medium_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})$/
    let strong_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/

    if(pw = 0){
        document.querySelector('.em').innerText = 'password must be not be blank'

     }/*else if(pw >= 0 ){
       document.querySelector('.em').innerText = 'Weak'
     }*/ 
    
    else if(pwd.match(medium_pwd)){   
         document.querySelector('.sm').innerText = 'medium'

    } else if(!pwd.match(strong_pwd)){
        console.log('strong ')
        document.querySelector('.em').innerText = 'pwds must contain 1 no,1 upper case cahr,1 special char'
    } else{

        console.log('strong working')
        document.querySelector('.em').innerText = ''
        document.querySelector('.sm').innerText = 'Strong'
    }

}
