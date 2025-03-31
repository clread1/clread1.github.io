let write_article_select = document.getElementsByClassName('write_article_select')[0];
let write_article_select_list = document.getElementsByClassName('write_article_select_list')[0];
    write_article_select.addEventListener('click', function(){
        write_article_select.style.color = "#b9b9b9";
        write_article_select_list.classList.toggle('display_none');
    })

let tab_list_option = document.getElementsByClassName('tab_list_option');
let tab_chk = false;
    for(let i=0; i<tab_list_option.length ;i++){
        tab_list_option[i].addEventListener('click', function(){
            write_article_select.innerHTML = `<span class="c_black">${this.children[0].innerText}</span>`
            tab_chk = true;
            write_article_select_list.classList.toggle('display_none');
        })
    }

let tag_info = document.getElementById('tag_info')
let tag_box = document.getElementsByClassName('write_article_tag_box')[0];
let tag = document.getElementsByClassName('write_article_tag');
let input = document.getElementsByClassName('input_tag');
let count = 0;
let idx = 0;
    // function tag_out(idx){
        
    // }
    function tag_input(){
        $('.input_tag').keydown(function(){
            if(event.keyCode == 13) {
                let input_value = document.getElementsByClassName(`input_tag`)[0].value;
                let span = document.createElement(`span`);
                let button = document.createElement(`button`);
                let tmp_btn = document.createElement(`button`);
                let input = document.createElement(`input`);

                span.append(`${input_value}`);
                button.setAttribute('class', 'x_btn');

                // document.getElementsByClassName('tag_num')[idx].innerHTML = `<span>${input_value}</span>
                //                                                             <button class="x_btn" id="x_btn${idx}">x</button>`;
                document.getElementsByClassName('tag_num')[idx].removeChild(document.getElementsByClassName('input_tag')[0]);
                document.getElementsByClassName('tag_num')[idx].append(span);
                document.getElementsByClassName('tag_num')[idx].append(button);

                count++;
                if(count < 10){
                    
                    input.setAttribute('class', 'input_tag');
                    tmp_btn.setAttribute('class', 'write_article_tag tag_num');
                    tmp_btn.append(input);
                    tag_box.append(tmp_btn);
                    // tag_box.innerHTML += `<button class="write_article_tag tag_num">
                    //                         <input type="text" class="input_tag">
                    //                     </button>`
                    
                    tag_input();
                }
                // let x_btn = document.getElementsByClassName(`x_btn`)[idx];
                // x_btn.addEventListener('click', function(){
                    
                // })
                idx++;
            }
        })
    }
    
    tag_info.addEventListener('click', function(){
        tag_info.style.display = "none";
        // tag_box.innerHTML += `<button class="write_article_tag tag_num">
        //                         <input type="text" class="input_tag">
        //                     </button>`
        let tmp_btn = document.createElement(`button`);
        let input = document.createElement(`input`);
        input.setAttribute('class', 'input_tag');
        tmp_btn.setAttribute('class', 'write_article_tag tag_num');
        tmp_btn.append(input);
        tag_box.append(tmp_btn);
        tag_input();
    })

let write_content_title = document.getElementsByClassName('write_content_title')[0];
let write_article_detail = document.getElementById('write_article_detail');
let save = document.getElementsByClassName('save_btn')[0];
let post = document.getElementsByClassName('post_btn')[0];
post.addEventListener('click', function(){
    // let post_tab = write_article_select.innerText;
    // console.log(post_tab);
    if(tab_chk == false){
        write_article_select.style.color = "red";
    }

    let title_chk = false;
        if(write_content_title.value == ''){
            write_content_title.style.color= "red";
        }
        else{
            title_chk = true;
        }

    
    let detail_chk = false;
        if(write_article_detail.value == ''){
            write_article_detail.style.color = "red";
        }
        else{
            detail_chk = true;
        }

    if(tab_chk == true && title_chk == true && detail_chk == true){
        alert('게시글이 등록되었습니다')
        location.href = "https://clread1.github.io/프로젝트_1/html/main_page.html";
    }
})
write_content_title.addEventListener('click', function(){
    write_content_title.style.color= "black";
})

write_article_detail.addEventListener('click', function(){
    write_article_detail.style.color = "black";
})
    