async function tao1PhieuGiaoHang() {
    try {
        const ngaylapphieu = document.getElementById("ngaylap").value;
        const nguoilapphieu = localStorage.getItem("manv");
        const nguoigiao = document.getElementById("nguoigiao").value;
        // console.log(nguoigiao);
        // console.log(nguoilapphieu);
        // console.log(ngaylapphieu);
        const response = await fetch('http://localhost:3000/phieugiaohang/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ngaylapphieu,
                nguoilapphieu,
                nguoigiao
            })
        });
        const data = await response.json();
        console.log(data);
        console.log(data.insertId);
        return data.insertId;
    } catch (error) {
        console.log(error);
    }
}
async function themPhieuGiaoHang() {
    try {
        const ma_phieugiaohang = await tao1PhieuGiaoHang();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        const ma_trangthai = 2;
        //console.log(ma_taikhoan);
        array.forEach(async (madonhang) => {
            const response = await fetch('http://localhost:3000/donhang/updategiaodonhang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ma_trangthai,
                    ma_phieugiaohang,
                    madonhang
                })
            });
            const data = await response.json();
        })
        window.location.replace("../../html/qlGiaoHang/authentication-qlgiaohang.html");
    } catch (error) {
        console.log(error);
    }
}