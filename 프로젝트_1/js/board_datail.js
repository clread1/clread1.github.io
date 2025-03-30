function get_url_info(key) {
    let url = location.href; // 224-2.페이지이동_연습2(상세페이지).html?cateNo=0&itemNo=2 
    url = url.split("?");// [224-2.페이지이동_연습2(상세페이지).html  ,  cateNo=0&itemNo=2 ]
    if(url.length > 1) { // 1개보다 크면 정보가(?) 1개 이상 있다 라는 뜻
        url = url[1].split("&"); // cateNo=0&itemNo=2  =>  [cateNo=0, itemNo=2]

        for(let i=0; i<url.length; i++){
            let tmp_url=url[i].split("=") // i=0, cateNo=0 => [cateNo , 0]
                                        // i=1, itemNo=2 => [itemNo , 2]
                
            if(tmp_url[0] == key) {
                return tmp_url[1];
            }
        }   
    }
} 
let post_no = get_url_info('post_no');

let detail_area = document.getElementsByClassName('detail_area')[0];
    detail_area.innerHTML = `<button class="this_board_list border">
                                        <span>${POST_LIST[post_no - 1].post_tab} </span>>
                                    </button>
                                    <div class="detail_title">
                                        <span>${POST_LIST[post_no - 1].post_title}</span>
                                    </div>
                                    <div class="user_info_header">
                                        <div class="user_profile"></div>
                                        <div class="user_info_box">
                                            <div class="user_name_box">
                                                <span class="user_name">${POST_LIST[post_no - 1].post_writer}</span>
                                            </div>
                                            <div class="post_date_box">
                                                <div class="post_date">${POST_LIST[post_no - 1].post_date}</div>
                                                <div class="post_views_box">
                                                    <div class="post_views_icon"></div>
                                                    <div class="post_views">${POST_LIST[post_no - 1].post_views}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menu_btn_box">
                                            <div class="bookmark_btn"></div>
                                            <div class="menu_btn"></div>
                                        </div>
                                    </div>
                                    <div class="board_detail">
                                        <p>${POST_LIST[post_no - 1].post_detail}</p>
                                    </div>
                                    <div class="newest_post_box">
                                        <div class="newest_post">
                                            <div class="newest_header">
                                                <div class="user_profile user_profile_m"></div>
                                                <span class="user_name user_name_m">NAVER GAME</span><span>님의 최신글</span>
                                            </div>
                                            <ul class="newest_list_ul">
                                                <li class="newest_list_li">
                                                    <span>2025 LCK 경기 관람 이벤트</span>
                                                </li>
                                                <li class="newest_list_li">
                                                    <span>2025 LCK 컵 PO 직관 티켓을 티켓 교환소에서 획득해보세요!</span>
                                                </li>
                                                <li class="newest_list_li">
                                                    <span>2025 LCK 컵 직관 티켓을 교환소에서</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="buff_box">
                                        <div class="buff_btn_box">
                                            <div class="buff_btn"></div>
                                            <div class="count buff_count">
                                                <span>${POST_LIST[post_no - 1].post_buff}</span>
                                            </div>
                                        </div>
                                        <div class="nuff_btn_box">
                                            <div class="nuff_btn"></div>
                                            <div class="count nuff_count">
                                                <span>${POST_LIST[post_no - 1].post_nuff}</span>
                                            </div>
                                        </div>
                                    </div>`

let comment_box_area = document.getElementsByClassName('comment_box_area')[0];
    for(let i=0; i<COMMENT_LIST[post_no - 1].length; i++){
        comment_box_area.innerHTML += `<div class="comment_box">
                                        <div class="user_profile comment_user_profile"></div>
                                        <div class="comment_top">
                                            <div class="name_detail_box">
                                                <div class="user_name">${COMMENT_LIST[post_no - 1][i].comment_writer}</div>
                                                <div class="comment_detail" style="word-break:break-all">${COMMENT_LIST[post_no - 1][i].comment_detail}</div>
                                            </div>
                                        </div>
                                        <div class="comment_item_bottom">
                                            <div class="reply_box">
                                                <div class="comment_date">
                                                    <span>${COMMENT_LIST[post_no - 1][i].comment_date}</span>
                                                </div>
                                                <div class="write_reply">
                                                    <span>답글 쓰기</span>
                                                </div>
                                                <div class="reply_list">
                                                    <span>답글</span><span>${COMMENT_LIST[post_no - 1][i].comment_reply}</span>
                                                </div>
                                            </div>
                                            <div class="comment_buff_box">
                                                <div class="buff_btn_box">
                                                    <div class="comment_buff_btn"></div>
                                                    <div class="count comment_buff_count">
                                                        <span>${COMMENT_LIST[post_no - 1][i].comment_buff}</span>
                                                    </div>
                                                </div>
                                                <div class="nuff_btn_box">
                                                    <div class="comment_nuff_btn"></div>
                                                    <div class="count comment_nuff_count">
                                                        <span>${COMMENT_LIST[post_no - 1][i].comment_nuff}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
    }    

let bookmark = document.getElementsByClassName('bookmark_btn')[0]; // 북마크 버튼 클릭
    bookmark.addEventListener('click', function(){
        bookmark.classList.toggle('bookmark_btn_click');
    })

function resize(obj) {
    if(obj.scrollHeight == 0) {
		obj.style.height = "60px";
	}
    else {
        obj.style.height = 'auto';
        obj.style.height = obj.scrollHeight + 'px';
	}
}
let comment = document.getElementById('comment');
comment.addEventListener('keydown', function(){ // 댓글 textarea스크롤 없애기
    if(event.keyCode == 13) {
        resize(this);
    }
})

let post_btn = document.getElementsByClassName('comment_post_btn')[0];
post_btn.addEventListener('click', function(){
    let detail = comment.value;
    
})
