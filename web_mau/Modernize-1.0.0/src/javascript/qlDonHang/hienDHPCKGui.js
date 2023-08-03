async function getDataPhieuChuyenKho() {
    try {
        const ma_khogui = document.getElementById("mak").value;
        const ten_khogui = document.getElementById("mak").options[document.getElementById("mak").selectedIndex].textContent;
        const response = await fetch(`http://localhost:3000/phieuchuyenkho/getallgui?ma_khogui=${ma_khogui}`);
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector('table.data-table tbody');
        tableBody.innerHTML = '';
        data.forEach(dh => {
            console.log(dh.ma_trangthai);
            if (dh.ma_kho != dh.ma_khoden && dh.ma_trangthai == 3) {
                const row = `
                <tr>
                    <td>${dh.maphieuchuyenkho}</td>
                    <td>${fomatDate(dh.ngaylapphieu)}</td>
                    <td>${ten_khogui}</td>
                    <td>${dh.tenkho}</td>
                    <td>${dh.madonhang}</td>
                    <td>${dh.ghichu}</td>
                    <td>${dh.diachi_nguoinhan}</td>
                  
                </tr>
              `;
                tableBody.innerHTML += row;
            }
        });

    } catch (error) {
        console.log(error);
    }
}
function fomatDate(date) {
    //dateString = date.substring(0, 10);
    //return dateString; // "2023-06-14"
    var oldDate = new Date(date.substring(0, 10)); // Tạo đối tượng Date từ chuỗi ngày cũ
    var newDate = new Date(oldDate.getTime() + (24 * 60 * 60 * 1000)); // Tăng ngày lên 1
    var year = newDate.getFullYear();
    var month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    var day = ("0" + newDate.getDate()).slice(-2);
    var newDateString = year + "-" + month + "-" + day;
    return newDateString; // Trả về chuỗi ngày mới
}