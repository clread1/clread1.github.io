let user_id = document.getElementById('id');
let user_pw = document.getElementById('pw');
let user_mail = document.getElementById('mail');
let user_name = document.getElementById('name');
let user_birth = document.getElementById('birth');
let user_phone = document.getElementById('phone');
let user_telecom = document.getElementById('telecom');
let user_gender = '';
let user_foreign = '';
let array_input_a = [user_id, user_pw, user_name, user_birth, user_phone]
let array_input = ['id', 'pw', 'name', 'birth', 'phone']
let array_text = ['아이디', '비밀번호', '이름', '생년월일', '휴대전화번호']

let id_check = false;
let pw_check = false;
let name_check = false;
let birth_check = false;
let phone_check = false;
let agree_check = false;
let array_check = [id_check, pw_check, name_check, birth_check, phone_check]

function check(input, text, index){
    let get_input = document.getElementById(input);
    if(get_input.value == ''){
        get_input.placeholder= `${text}(필수)`;
        get_input.style.color= 'red';
        get_input.style.textDecoration= 'underline';
        array_check[index] = false;
    }
    else{
        array_check[index] = true;
    }
}
function check2(get_input){
    get_input.style.color= '#757575';
    get_input.style.textDecoration= 'none';
}
for(let i=0; i<5; i++){
    array_input_a[i].addEventListener('click', function(){
        check2(array_input_a[i]);
    })
}

let btn_admin = document.getElementById('btn_admin')
    btn_admin.addEventListener('click', function(){
    let user_id = document.getElementById('id').value;
    let user_pw = document.getElementById('pw').value;
    let user_mail = document.getElementById('mail').value;
    let user_name = document.getElementById('name').value;
    let user_birth = document.getElementById('birth').value;
    let user_phone = document.getElementById('phone').value;
    // let user_telecom = document.getElementById('telecom').value;

    if($('#male').is(':checked')){ // 성별 체크
        user_gender = 'male';
    }
    else{
        user_gender = 'female';
    }
    if($('#local').is(':checked')){ // local 체크
        user_foreign = 'local';
    }
    else{
        user_foreign = 'foreign';
    }

    for(let i=0; i<5; i++){ // 필수 입력사항 입력 여부 체크
        check(array_input[i], array_text[i], i);
    }

    if($('#agree_check').is(':checked')){ // 인증 약관 동의 여부 체크
        agree_check = true;
    }
    else{
        agree_check = false;
    }
    let final_check = array_check[0] && array_check[1] && array_check[2] && array_check[3] && array_check[4] && agree_check;

    if(final_check == true){
        alert('회원가입이 완료되었습니다.');
        location.href = "https://clread1.github.io/project1/프로젝트_1/html/login_page.html"
    }
})