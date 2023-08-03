async function huyDonHang() {
    try {
        // Lấy tất cả các checkbox trong bảng
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
        //console.log(selectedRows);
        const ma_trangthai = 6;
        //console.log(ma_taikhoan);
        selectedRows.forEach(async (madonhang) => {
            const response = await fetch('http://localhost:3000/donhang/updatestatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ma_trangthai,
                    madonhang
                })
            });
            const data = await response.json();
        })
        window.location.replace("../../html/qlDonHang/authentication-qldonhang.html");
    } catch (error) {
        console.log(error);
    }


}