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
