async function themDonHang() {
    try {
        const ten_nguoigui = document.getElementById("ten_nguoigui").value;
        const sdt_nguoigui = document.getElementById("sdt_nguoigui").value;
        const ten_nguoinhan = document.getElementById("ten_nguoinhan").value;
        const sdt_nguoinhan = document.getElementById("sdt_nguoinhan").value;
        const diachi_nguoinhan = document.getElementById("diachi_nguoinhan").value;
        const ghichu = document.getElementById("ghichu").value;
        const giatri = document.getElementById("giatri").value;
        const khoiluong = document.getElementById("khoiluong").value;
        const ma_kho = document.getElementById("mak").value;
        const ma_trangthai = document.getElementById("idtrangthai").value;
        const ngaytaodon = document.getElementById("ngaytaodon").value;
        const thongBao = document.getElementById('thong_bao_dn');
        const thongBao2 = document.getElementById('thong_bao_dn2');
        const thongBaon = document.getElementById('thong_bao_sdtn');
        const thongBaog = document.getElementById('thong_bao_sdtg');
        console.log(ma_kho);
        if (ten_nguoigui.length == 0 || sdt_nguoigui.length == 0 || ten_nguoinhan.length == 0 || sdt_nguoinhan.length == 0 ||
            diachi_nguoinhan.length == 0 || ghichu.length == 0 || khoiluong.length == 0) {
            thongBao.hidden = false;
            thongBao2.hidden = false;
        } else if (isNaN(sdt_nguoigui) || isNaN(sdt_nguoinhan) || sdt_nguoigui.length < 10 || sdt_nguoigui.length > 11) {
            thongBaon.hidden = false;
            thongBaog.hidden = false;
        } else {
            const response = await fetch('http://localhost:3000/donhang/add', {
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
                    ma_kho,
                    giatri,
                    khoiluong,
                    ngaytaodon
                })
            });
            const data = await response.json();
            window.location.replace("../../html/qlDonHang/authentication-qldonhang.html");
        }

        //console.log(khoiluong);

    } catch (error) {
        console.log(error);
    }
}
