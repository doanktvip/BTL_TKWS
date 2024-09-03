window.onload=function(){
    let next=document.querySelectorAll('a');
    for(let a of next){
        a.onclick=function(){
            event.preventDefault();
        }
    }
    //bắt sự kiện tài khoản
    let butLog=document.querySelector('.button-login');
    let login=document.querySelector('.login');
    let up=document.querySelector('.button-login i');
    butLog.onclick=function(){
    //toggle thêm xóa class
    //add thêm class
    //remove xóa class
        login.classList.toggle('block');
        if(up.className=='fa-solid fa-caret-down'){
            up.className='fa-solid fa-caret-up';
        }else{
            up.className='fa-solid fa-caret-down';
        } 
    }
    //bắt sự kiện nút search
    let butSea=document.querySelector('.button-search');
    let search=document.querySelector('.search');
    butSea.onclick=function(){
        search.classList.toggle('block');
    }
    //bắt sự kiện nút menu
    let butMenu=document.querySelector('.content-but');
    let nav=document.querySelector('.content-nav');
    let menuNav=document.querySelector('.content-nav .menu');
    let head=document.querySelector('.content-header');
    let contentNav=document.querySelector('.content-navs');
    let close=document.querySelector('.close');
    let t = setInterval(window.onload=function(){
        head.scrollHeight;
        // console.log(head.scrollHeight);
        clearInterval(t);
    },100);
    close.onclick=function(){
        nav.classList.remove('block');
        nav.classList.remove('popup');
    }
    butMenu.onclick=function(){
        nav.classList.add('block');
        nav.classList.add('popup');
        menuNav.classList.remove('flex');
    }
    //bắt sự kiện trượt màn hình
    //cố định nav và xuất hiện go to top
    let goto=document.querySelector('.gototop');
    goto.onclick=function(){
        let tmp=setInterval(function(){
            document.documentElement.scrollTop=-20;
            if(document.documentElement.scrollTop<=0){
                clearInterval(tmp);
            }
        },10);
    }
    window.onscroll=function(){
        if(this.scrollY>=head.scrollHeight){
            goto.classList.add('block');
            contentNav.classList.add('menu-nav');
        }else{
            goto.classList.remove('block');
            contentNav.classList.remove('menu-nav');
        }
    }
    //chuyển sang trang web chủ từng tab
    let link=document.querySelectorAll('.content-nav .menu>li>a');
    for(let l of link){
        l.onclick=function(){
            event.preventDefault();
            let rel=this.getAttribute('rel');
            window.location.replace(`${rel}.html`);
        }
    }
    // Lấy thông tin đăng nhập từ localStorage
    const username = localStorage.getItem('username');
    if(username){
        document.getElementById('message').innerHTML=`${username} `;
        document.querySelector('.login .menu>li:last-child').innerHTML=`<p id="logout" rel='home'><i class="fa-solid fa-user-minus"></i><span> Đăng xuất</span></p>`
    }
    let log=document.querySelectorAll('.login .menu>li>p');
    for(let l of log){
        l.addEventListener('click',function(){
            let rel=this.getAttribute('rel');
            window.location.replace(`${rel}.html`);
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        });
    }
    let butForum=document.querySelectorAll('.caret_down .button');
    let forum=document.querySelectorAll('.list_topics');
    let caret=document.querySelectorAll('.caret_down .button i')
    for(let b=0;b<butForum.length;b++){
        for(let b=0;b<forum.length;b++){
            butForum[b].onclick=function(){
                forum[b].classList.toggle('block');
                if(caret[b].className=='fa-solid fa-caret-down'){
                    caret[b].className='fa-solid fa-caret-up';
                }else{
                    caret[b].className='fa-solid fa-caret-down';
                } 
            }
        }
    }
    let d=document.querySelector('body');
    let r=d.getAttribute('rel');
    if(r==='forum'){
        let butAdd=document.querySelector('.but-add');
        let writeTopic=document.querySelector('.write-topic');
        butAdd.addEventListener('click',function(){
            writeTopic.classList.toggle('block');
        });
        let cancel=document.querySelector('.cancel');
        cancel.addEventListener('click',function(){
            writeTopic.classList.remove('block');
        });
        let btn=document.getElementById('btn');
        btn.addEventListener('click',function(){
            let title=document.querySelectorAll('.title_subject');
            let find=document.getElementById('find');
            let write=document.getElementById('write');
            let mess=document.getElementById('message');
            let d = new Date();
            let h=`<div class="flex list_topic">
                            <div class="topic">
                                <p><a href="#">${write.value}</a></p>
                            </div>
                            <div class="comment">
                                <ul>
                                    <li>Xem: 0</li>
                                    <li>Bình luận: 0</li>
                                </ul>
                            </div>
                            <div class="time_cmt">
                                <p>Bình luận gần đây nhất <a href="#">${mess.innerText}</a> vào lúc ${d.getHours()}h${d.getMinutes()} ${d.getDate()}/${d.getMonth()+1}</p>
                            </div>        
                        </div>`
            for(let t of title){
                let show=t.parentElement.parentElement.children[1];
                let caretUp=t.parentElement.children[2].children[0].children[0];
                show.classList.remove('block');
                caretUp.className='fa-solid fa-caret-down';
                if(t.innerText.includes(find.value)===true){
                    let list=t.parentElement.parentElement.children[1].children[0];
                    list.insertAdjacentHTML('beforebegin',h);
                    show.classList.add('block');
                    caretUp.className='fa-solid fa-caret-up';
                }
            }
        });
        let sc=document.querySelector('.search input[type=search]');
        sc.onchange=function(){
            let txt=this.value;
            let text=document.querySelectorAll('h2');
            for(let t of text){
                t.parentElement.parentElement.style.display='none';
            }
            for(let t of text){
                if(t.innerText.includes(txt)===true){
                    t.parentElement.parentElement.style.display='block';
                }
            }
        }
    }else if(r==='course'){
        let video=document.querySelector('.video-intro');
        let vi=document.querySelectorAll('.video');
        let close1=document.querySelector('.close1');
        close1.addEventListener('click',function(){
            video.classList.remove('block');
        });
        for(let v of vi){
            v.addEventListener('click',function(){
                video.classList.add('block');
            });
        }
        let sc=document.querySelector('.search input[type=search]');
        sc.onchange=function(){
            let txt=this.value;
            let text=document.querySelectorAll('h2');
            for(let t of text){
                t.parentElement.parentElement.parentElement.style.display='none';
                t.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display='block';
            }
            for(let t of text){
                if(t.innerText.includes(txt)===true){
                    t.parentElement.parentElement.parentElement.style.display='block';
                }else{
                    t.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display='none';
                }
            }
        }
    }else if(r==='news'){
        let sc=document.querySelector('.search input[type=search]');
        sc.onchange=function(){
            let txt=this.value;
            let text=document.querySelectorAll('h2');
            for(let t of text){
                t.parentElement.parentElement.parentElement.parentElement.style.display='none';
            }
            for(let t of text){
                if(t.innerText.includes(txt)===true){
                    t.parentElement.parentElement.parentElement.parentElement.style.display='block';
                }
            }
        }
    }
}