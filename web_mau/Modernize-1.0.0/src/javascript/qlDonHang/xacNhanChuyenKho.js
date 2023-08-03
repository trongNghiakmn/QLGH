async function xacNhanNhanHang() {
    try {
        // Lấy tất cả các checkbox trong bảng
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        // Lặp qua từng checkbox và kiểm tra xem nó đã được chọn hay chưa
        var selectedRows = [];
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                // Nếu checkbox đã được chọn, lấy mã đơn từ cột tương ứng và thêm vào mảng selectedRows
                var row = checkboxes[i].parentNode.parentNode;
                var maDon = row.querySelector('td:nth-child(5)').textContent;
                selectedRows.push(maDon);
            }
        }
        console.log(selectedRows);

        const ma_kho = document.getElementById("mak").value;
        const ma_trangthai = 1;
        console.log("ma kho " + ma_kho);
        console.log("ma trang thai " + ma_trangthai);
        selectedRows.forEach(async (madonhang) => {
            console.log("ma don hang " + madonhang);
            const response = await fetch('http://localhost:3000/donhang/updatechuyenkhodonhang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ma_trangthai,
                    ma_kho,
                    madonhang
                })
            });
            const data = await response.json();
        })
        window.location.replace("../../html/qlDonHang/authentication-chuyenkho.html");
    } catch (error) {
        console.log(error);
    }


}