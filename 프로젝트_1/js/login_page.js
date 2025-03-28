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
let admin_page = document.getElementsByClassName('admin')[0];
admin_page.addEventListener('click', function(){
    location.href = "file:///C:/Users/user1/Desktop/web/프로젝트_1/html/signUp_page.html";
})