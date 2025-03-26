    let tag_info = document.getElementById('tag_info')
    let tag_box = document.getElementsByClassName('write_article_tag_box')[0];
    let tag = document.getElementsByClassName('write_article_tag');
    let input = document.getElementsByClassName('input_tag');
    let count = 0;
    let idx = 1;

    function tag_input(){
        $('.input_tag').keydown(function(){
            if(event.keyCode == 13) {
                let input_value = document.getElementsByClassName(`input_tag`)[0].value;
                document.getElementsByClassName('tag_num')[idx - 1].innerHTML = `<span>${input_value}</span>
                                                                            <button class="x_btn">x</button>`;
                                                                            
                idx++;
                count++;
                if(count < 10){
                    tag_box.innerHTML += `<button class="write_article_tag tag_num">
                                            <input type="text" class="input_tag">
                                        </button>`
                    tag_input();
                }
            }
        })
    }

    tag_info.addEventListener('click', function(){
        tag_info.style.display = "none";
        tag_box.innerHTML = `<button class="write_article_tag tag_num">
                                <input type="text" class="input_tag">
                            </button>`
        tag_input();
    })

    