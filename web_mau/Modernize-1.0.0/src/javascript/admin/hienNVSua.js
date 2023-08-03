async function getData() {
    try {
        //lay chuoi tu url
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        const manhanvien = aray;
        var tennv;
        var sdt;
        var taikhoan;
        var matkhau;
        var ma_chucvu;
        var mataikhoan;
        //console.log(aray);
        const response = await fetch(`http://localhost:3000/nhanvien/gettheoma?manhanvien=${manhanvien}`);
        const data = await response.json();
        //console.log(data);
        data.forEach(nv => {
            tennv = nv.tennv;
            sdt = nv.sdt;
            taikhoan = nv.taikhoan;
            matkhau = nv.matkhau;
            ma_chucvu = nv.ma_chucvu;
            mataikhoan = nv.ma_taikhoan;
        });
        document.getElementById("tennv").value = tennv;
        document.getElementById("sdt").value = sdt;
        document.getElementById("taikhoan").value = taikhoan;
        document.getElementById("matkhau").value = matkhau;
        document.getElementById("machucvu").value = ma_chucvu;
        //luu tru gia tri ma tai khoan
        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("mataikhoan_update", mataikhoan);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    } catch (error) {
        console.log(error);
    }
}
async function updateNV() {
    try {
        //lay chuoi tu url
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        const thongBao = document.getElementById('thong_bao_dn');
        const thongBaoSDT = document.getElementById('thong_bao_sdt');
        const manv = aray;
        var tennv = document.getElementById("tennv").value;
        var sdt = document.getElementById("sdt").value;
        var ma_chucvu = document.getElementById("machucvu").value;
        // console.log("manv:" + manv);
        // console.log("ten nv:" + tennv);
        // console.log("sdt:" + sdt);
        // console.log("ma cv:" + ma_chucvu);
        //console.log(aray);
        if (isNaN(sdt)) {
            // Không phải là số
            thongBaoSDT.hidden = false;
        } else if (tennv.length == 0 || sdt.length == 0) {
            //rong
            thongBao.hidden = false;
        } else {
            const response = await fetch('http://localhost:3000/nhanvien/updatenv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ma_chucvu,
                    tennv,
                    sdt,
                    manv
                })
            });
            const data = await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}
async function updateTK() {
    try {
        const thongBao = document.getElementById('thong_bao_dn');
        const thongBaoSDT = document.getElementById('thong_bao_sdt');
        const taikhoan = document.getElementById("taikhoan").value;
        const matkhau = document.getElementById("matkhau").value;
        const mataikhoan = localStorage.getItem("mataikhoan_update");
        // console.log(taikhoan);
        // console.log(matkhau);
        // console.log(mataikhoan);

        if (taikhoan.length == 0 || matkhau.length == 0) {
            //rong
            thongBao.hidden = false;
        } else {
            const response = await fetch('http://localhost:3000/taikhoan/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    taikhoan,
                    matkhau,
                    mataikhoan
                })
            });
            const data = await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}
function update() {
    updateNV();
    updateTK();
    window.location.replace("../../html/admin/authentication-admin.html");
}

getData();