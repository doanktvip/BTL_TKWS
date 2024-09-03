window.onload=function(){
    let body=document.querySelector('body');
    let rel=body.getAttribute('rel');
    if(rel==='login'){
        let btnSubmit=document.getElementById("submit");
        btnSubmit.addEventListener('click',function(event) {
            event.preventDefault();//Ngăn chặn gửi form mặc định
            //Lấy giá trị tên đăng nhập và mật khẩu
            let inputUsername=document.getElementById('username');
            let inputPassword=document.getElementById('password');
            let result=document.querySelector(".Result");
            //
            const user=JSON.parse(localStorage.getItem(inputUsername.value));
            //Tìm tài khoản không tồn tại
            //Kiểm tra thông tin đăng nhập
            if(inputUsername.value===""||inputPassword.value==="") {
                result.innerHTML='<span>Vui lòng không để trống!</span>';
            } else{
                //Kiểm tra danh sách tài khoản
                if(user===null){
                    result.innerHTML='<span>Tài khoản không tồn tại!</span>';
                    inputUsername.value = '';
                    inputPassword.value = '';
                    inputUsername.focus();
                }else if (inputUsername.value === user.username && inputPassword.value === user.password) {
                    // Lưu thông tin đăng nhập vào localStorage
                    localStorage.setItem('username',inputUsername.value);
                    localStorage.setItem('password',inputPassword.value);
                    // Chuyển hướng người dùng đến trang chủ (đè lên trang trước đó)
                    window.location.replace('home.html');
                }
                else{
                    result.innerHTML='<span>Mật khẩu không chính xác!</span>';
                    // Xóa các vùng nhập để người dùng nhập lại
                    inputPassword.value = '';
                    // Đưa con trỏ về ô nhập tên mật khẩu
                    inputPassword.focus();
                }
            }
        });
    }else if(rel==='signup'){
        const btnsignup=document.getElementById("signup-submit");
        const inputUsername=document.getElementById("username");
        const inputPassword=document.getElementById("password");
        const inputConfirmPassword=document.getElementById("confirmpassword");
        let result=document.querySelector(".Result");
        btnsignup.addEventListener("click",function(event) {
            event.preventDefault();
            if(inputUsername.value===""||inputPassword.value===""||inputConfirmPassword.value==="") {
                result.innerHTML='<span>Vui lòng không để trống!</span>';
            } 
            else {
                //khi xác nhận mật khẩu chính xác
                if(inputConfirmPassword.value===inputPassword.value) {
                //     mảng thông tin người dùng
                const user= {
                    username:inputUsername.value,
                    password:inputPassword.value,
                };
                // chuyển đối tượng người dùng thành chuỗi JSON
                const json=JSON.stringify(user);
                // lưu chuỗi JSON với từ khóa là tên người dùng
                localStorage.setItem(inputUsername.value,json);
                window.location.replace('login.html');
                }
                else {
                    //Thông báo nhập lại bị sai mật khẩu 
                    result.innerHTML='<span>Vui lòng nhập đúng mật khẩu</span>';
                    //Xóa vùng nhập lại để người dùng nhập lại mật khẩu
                    inputConfirmPassword.value="";
                    //Đưa con trỏ về vùng confirm password
                    inputConfirmPassword.focus();
                }
            }
        });
    }
    //link liên kết hai trang
    let signin=document.querySelector('.changepage>span:first-child');
    signin.addEventListener('click',function(){
        let rel=this.getAttribute('rel');
        window.location.replace(`${rel}.html`);
    });
    let eye=document.querySelectorAll(".font-eye i");
    for(let e of eye){
        e.addEventListener('click',function(){
            //Thay đổi thành phần kiểu input(Nếu type là password thì đổi thành text và ngược lại)
            const type=e.parentElement.parentElement.children[1].getAttribute('type')==='password' ? 'text' :'password';
            e.parentElement.parentElement.children[1].setAttribute('type', type);
            //Thay đổi biểu tượng con mắt khi click vào
            if(e.className==="fa-regular fa-eye") {
                e.className="fa-regular fa-eye-slash";
            } 
            else {
                e.className="fa-regular fa-eye";
            }
        });
    }
}