let login_btn = document.getElementsByClassName('login_btn')[0];
let profile = document.getElementsByClassName('profile')[0];

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

let write = document.getElementsByClassName('btn_write')[0];
    write.addEventListener('click', function(){
        if(login == true){
            // location.href = "file:///C:/Users/user1/Desktop/web/프로젝트_1/html/write_page.html";
            location.href ="https://clread1.github.io/프로젝트_1/html/write_page.html"
        }
        else{
            alert('로그인 후 이용할 수 있습니다')
        }
    })
    function cur_pagination(key){
        let url = location.href;
        url = url.split("?");
        if(url.length > 1){ // 1개보다 크면 정보가(?) 1개 이상 있다 라는 뜻
            url = url[1].split("&") // [admin=1, page=1]
            for(let i=0; i<url.length; i++){
                let tmp_url = url[i].split("=") // i=0, admin=1 => [admin, 1]  i=1, page=1 => [page, 1]
                if(tmp_url[0] == key){ // tmp_url == page 
                    return tmp_url[1]; // return page번호 
                }
            }
        }
        return 1;
    }
let cur_pagination_page = cur_pagination('page');

let tbody = document.getElementById('tbody');
let btn_pagination_page_box = document.getElementsByClassName('btn_pagination_page_box')[0];
    for(let i=0; i<25; i++){
        let idx = ((25 * (cur_pagination_page - 1)) + i)
        tbody.innerHTML += `<tr class="board_table_detail">
                            <td>
                                <div class="board_table_detail_title">
                                    <a href="https://clread1.github.io/프로젝트_1/html/board_detail.html?post_no=${POST_LIST[idx].post_no}">${POST_LIST[idx].post_title}</a>
                                </div>
                            </td>
                            <td>
                                <div class="board_table_detail_writer">
                                    <span>${POST_LIST[idx].post_writer}</span>
                                </div>
                            </td>
                            <td>
                                <span class="board_table_detail_date">${POST_LIST[idx].post_date}</span>
                            </td>
                            <td>
                                <span class="board_table_detail_viewCount">${POST_LIST[idx].post_views}</span>
                            </td>
                            <td>
                                <span class="board_table_detail_buff">${POST_LIST[idx].post_buff}</span>
                            </td>
                        </tr>`
    }
    // for(let i=0; i<(POST_LIST.length / 25); i++){ // pagination 버튼 게시글 25개마다 한개씩 추가
    //     btn_pagination_page_box.innerHTML += `<button class="btn_pagination btn_pagination_page">${i}</button>`
    // }

let btn_pagination_page = document.getElementsByClassName('btn_pagination_page');
    for(let i=0; i<btn_pagination_page.length; i++){
        btn_pagination_page[i].addEventListener('click', function(){
            location.href = `https://clread1.github.io/프로젝트_1/html/main_page.html?admin=1&page=${this.innerText}`
        })
    }
