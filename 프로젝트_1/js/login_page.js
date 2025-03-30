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
let login_btn = document.getElementById('login_btn');
login_btn.addEventListener('click', function(){
    let user_id = document.getElementById('user_id');
    let user_pw = document.getElementById('user_pw');
    let id_place = document.getElementById('id_placeholder');
    let id_place_text = document.getElementById('id_placeholder_text');
    let pw_place = document.getElementById('pw_placeholder');
    let pw_place_text = document.getElementById('pw_placeholder_text');
    let count = 0;
    let login_chk = false;

    if(user_id.value == ''){
        id_place.style.color = "red"; 
        id_place_text.innerHTML = "아이디를 입력하세요"
    }
    else{
        id_place.style.color = "#757575"; 
        id_place_text.innerHTML = "아이디 또는 전화번호"
    }
    if(user_pw.value == ''){
        pw_place.style.color = "red"; 
        pw_place_text.innerHTML = "비밀번호를 입력하세요"
    }
    else{
        pw_place.style.color = "#757575"; 
        pw_place_text.innerHTML = "비밀번호"
    }
    if(user_id.value != '' && user_pw.value != ''){ // 로그인 체크
        while(count < USER_LIST.length){
            if(user_id.value == USER_LIST[count].user_id && user_pw.value == USER_LIST[count].user_pw){
                login_chk = true;
                alert('로그인 되었습니다');
                location.href = "file:///C:/Users/home/Desktop/web/프로젝트_1/html/main_page.html?admin=1" 
                break;
            }
            count++;
        }
        if(login_chk == false){
            alert('일치하는 회원 정보가 없습니다');
        }
    }
})

let admin_page = document.getElementsByClassName('admin')[0];
admin_page.addEventListener('click', function(){
    location.href = "file:///C:/Users/home/Desktop/web/프로젝트_1/html/signUp_page.html"
})