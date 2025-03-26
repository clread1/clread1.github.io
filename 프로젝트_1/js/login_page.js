let login_data = document.getElementsByClassName('login_data');
let wrap = document.getElementById('wrap');
    // wrap.addEventListener('click', function(){
    //     for(let i=0; i<2; i++){
    //             document.getElementsByClassName('placeholder')[i].classList.remove('focus');
    //     }
    // })
for(let i=0; i<2; i++){
    login_data[i].addEventListener('click', function(){
        document.getElementsByClassName('placeholder')[i].classList.add('focus');
    })
}
