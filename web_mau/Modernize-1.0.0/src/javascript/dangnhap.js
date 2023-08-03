async function dangNhap() {
    try {
        const userName = document.getElementById("exampleInputUsername");
        const passWord = document.getElementById('exampleInputPassword1');
        const thongBao = document.getElementById('thong_bao_dn');
        const response = await fetch(`http://localhost:3000/taikhoan/login?taikhoan=${userName.value}&matkhau=${passWord.value}`);
        const data = await response.json();
        console.log(data);
        // console.log(userName.value);
        // console.log(passWord.value);
        //console.log(dn);

        if (Array.isArray(data) && data.length > 0) {
            const dn = data[0];
            console.log(dn);
            if (typeof (Storage) !== "undefined") {
                // Store
                localStorage.setItem("name", dn.tennv);
                localStorage.setItem("manv", dn.manv);
                // Retrieve

            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
            //console.log("Đăng nhập thành công!");
            if (dn.ma_chucvu == 2) {
                window.location.href = "../html/qlDonHang/authentication-qldonhang.html";
            }
            if (dn.ma_chucvu == 1) {
                window.location.href = "../html/admin/authentication-admin.html";
            }
            if (dn.ma_chucvu == 4) {
                window.location.href = "../html/qlGiaoHang/authentication-qlgiaohang.html";
            }
        } else {
            //console.log("Đăng nhập không thành công!");
            thongBao.hidden = false;
        }

    } catch (error) {
        console.log(error);
    }
}


