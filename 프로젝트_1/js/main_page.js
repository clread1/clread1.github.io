let login_btn = document.getElementsByClassName('login_btn')[0];
let profile = document.getElementsByClassName('profile')[0];
let write = document.getElementsByClassName('btn_write')[0];



function is_login(key){
    let url = location.href;
    url = url.split("?"); // [main_page.html, admin=1]
    if(url.length > 1){ // 1개보다 크면 정보가(?) 1개 이상 있다 라는 뜻
        url = url[1].split("&") // [admin=1]
        for(let i=0; i<url.length; i++){
            let tmp_url = url[i].split("=") // i=0, admin=1 => [admin, 1]
            if(tmp_url[0] == key){ // tmp_url == admin 
                if(tmp_url[1] == 1){
                    return true; 
                }
                else{
                    return false;
                }
            }
        }
    }
}

let login = is_login('admin');
if(login == true){
    login_btn.style.display = 'none';
    profile.style.display = 'block';
}

write.addEventListener('click', function(){
    location.href = "file:///C:/Users/user1/Desktop/web/프로젝트_1/html/write_page.html";
})