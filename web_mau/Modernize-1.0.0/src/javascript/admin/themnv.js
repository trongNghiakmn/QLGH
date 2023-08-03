
async function themTaiKhoan() {
    try {
        const taikhoan = document.getElementById("taikhoan").value;
        const matkhau = document.getElementById("matkhau").value;


        if (taikhoan.length == 0 || matkhau.length == 0) {
            //rong
            // thongBao.hidden = false;
            return 0;
        } else {
            const response = await fetch('http://localhost:3000/taikhoan/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    taikhoan,
                    matkhau
                })
            });
            const data = await response.json();
            //console.log(data);
            //console.log(data.insertId);
            return data.insertId;
        }


    } catch (error) {
        console.log(error);
    }
}
async function themNhanVien() {
    try {
        const ma_taikhoan = await themTaiKhoan();
        const tennv = document.getElementById("tennv").value;
        const sdt = document.getElementById("sdt").value;
        const ma_chucvu = document.getElementById("machucvu").value;
        const thongBao = document.getElementById('thong_bao_dn');
        const thongBaoSDT = document.getElementById('thong_bao_sdt');
        //console.log(ma_taikhoan);
        if (isNaN(sdt)) {
            // Không phải là số
            thongBaoSDT.hidden = false;
        } else if (ma_taikhoan == 0 || tennv == 0 || sdt == 0) {
            //rong
            thongBao.hidden = false;
        } else {
            const response = await fetch('http://localhost:3000/nhanvien/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tennv,
                    sdt,
                    ma_taikhoan,
                    ma_chucvu
                })
            });
            const data = await response.json();

            window.location.replace("../../html/admin/authentication-admin.html");
        }


    } catch (error) {
        console.log(error);
    }
}
async function xoaNhanVien() {
    try {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        // Lặp qua từng checkbox và kiểm tra xem nó đã được chọn hay chưa
        var selectedRows = [];
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                // Nếu checkbox đã được chọn, lấy mã đơn từ cột tương ứng và thêm vào mảng selectedRows
                var row = checkboxes[i].parentNode.parentNode;
                var maDon = row.querySelector('td:nth-child(1)').textContent;
                selectedRows.push(maDon);
            }
        }
        console.log(selectedRows);
        const ma_chucvu = 6;
        selectedRows.forEach(async (manv) => {
            const response = await fetch('http://localhost:3000/nhanvien/updatechucvu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ma_chucvu,
                    manv
                })
            });
            const data = await response.json();
        });
        window.location.replace("../../html/admin/authentication-admin.html");
    } catch (error) {
        console.log(error);
    }
}