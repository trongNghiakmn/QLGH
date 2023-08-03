
async function getData() {
    try {
        const ma_kho = document.getElementById("mak").value;
        const response = await fetch(`http://localhost:3000/donhang/getalltheokho?ma_kho=${ma_kho}`);
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector('table.data-table tbody');
        tableBody.innerHTML = '';
        data.forEach(dh => {
            const row = `
                <tr>
                  <td>${dh.madonhang}</td>
                  <td>${dh.ten_nguoigui}</td>
                  <td>${dh.sdt_nguoigui}</td>
                  <td>${dh.ten_nguoinhan}</td>
                  <td>${dh.sdt_nguoinhan}</td>
                  <td>${dh.diachi_nguoinhan}</td>
                  <td>${dh.ghichu}</td>
                  <td>${fomatDate(dh.ngaytaodon)}</td>
                  <td>${dh.giatri}</td>
                  <td>${dh.khoiluong} KG</td>
                  <td>${dh.tentrangthai}</td>
                  
                </tr>
              `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.log(error);
    }
}

async function getDataThang() {
    try {
        const thang = document.getElementById("thang").value;
        const ma_kho = document.getElementById("mak").value;
        console.log(thang);
        console.log(ma_kho);
        const response = await fetch(`http://localhost:3000/donhang/getalltheothang?thang=${thang}&ma_kho=${ma_kho}`);
        const data = await response.json();
        //console.log(data);
        const tableBody = document.querySelector('table.data-table tbody');
        tableBody.innerHTML = '';
        data.forEach(dh => {
            const row = `
                <tr>
                  <td>${dh.madonhang}</td>
                  <td>${dh.ten_nguoigui}</td>
                  <td>${dh.sdt_nguoigui}</td>
                  <td>${dh.ten_nguoinhan}</td>
                  <td>${dh.sdt_nguoinhan}</td>
                  <td>${dh.diachi_nguoinhan}</td>
                  <td>${dh.ghichu}</td>
                  <td>${fomatDate(dh.ngaytaodon)}</td>
                  <td>${dh.giatri}</td>
                  <td>${dh.khoiluong} KG</td>
                  <td>${dh.tentrangthai}</td>
                  
                </tr>
              `;
            tableBody.innerHTML += row;
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

