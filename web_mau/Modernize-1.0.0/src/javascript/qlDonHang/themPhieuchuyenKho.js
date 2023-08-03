async function taoPhieuChuyenKho() {
    try {
        const ngaylapphieu = document.getElementById("ngaytaodon").value;
        const nguoilapphieu = localStorage.getItem("manv")
        const nguoigiao = document.getElementById("nguoigiao").value;
        const ma_khoden = document.getElementById("mak_den").value;
        const ma_khogui = document.getElementById("mak_gui").value;
        console.log(khoiluong);
        const response = await fetch('http://localhost:3000/phieuchuyenkho/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ngaylapphieu,
                nguoilapphieu,
                nguoigiao,
                ma_khoden,
                ma_khogui
            })
        });
        const data = await response.json();
        return data.insertId;
    } catch (error) {
        console.log(error);
    }
}
async function themDonHangChuyenKho() {
    try {
        const ten_nguoigui = document.getElementById("ten_nguoigui").value;
        const sdt_nguoigui = document.getElementById("sdt_nguoigui").value;
        const ten_nguoinhan = document.getElementById("ten_nguoinhan").value;
        const sdt_nguoinhan = document.getElementById("sdt_nguoinhan").value;
        const diachi_nguoinhan = document.getElementById("diachi_nguoinhan").value;
        const ghichu = document.getElementById("ghichu").value;
        const giatri = document.getElementById("giatrichuyenkho").value;
        const khoiluong = document.getElementById("khoiluong").value;
        const ma_kho = document.getElementById("mak").value;
        const ma_trangthai = 3;
        const ngaytaodon = document.getElementById("ngaytaodon").value;
        const ma_phieuchuyenkho = await taoPhieuChuyenKho();
        //console.log(ma_phieuchuyenkho);
        const response = await fetch('http://localhost:3000/donhang/addchuyenkho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ten_nguoigui,
                sdt_nguoigui,
                ten_nguoinhan,
                sdt_nguoinhan,
                diachi_nguoinhan,
                ghichu,
                ma_trangthai,
                ma_phieuchuyenkho,
                ma_kho,
                giatri,
                khoiluong,
                ngaytaodon
            })
        });
        const data = await response.json();
        window.location.replace("../../html/qlDonHang/authentication-qldonhang.html");
    } catch (error) {
        console.log(error);
    }
}