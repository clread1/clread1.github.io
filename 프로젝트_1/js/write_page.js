let write_article_detail = document.getElementById('write_article_detail');
let save = document.getElementsByClassName('save_btn')[0];
let post = document.getElementsByClassName('post_btn')[0];
post.addEventListener('click', function(){
    location.href = "https://clread1.github.io/project1/프로젝트_1/html/main_page.html";
})

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

    

    