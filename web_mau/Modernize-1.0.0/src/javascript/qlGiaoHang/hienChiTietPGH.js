async function getDataPGHChon() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        const tennguoigiao = localStorage.getItem("tennguoigiao");
        // console.log(aray);
        console.log(tennguoigiao);
        const response = await fetch(`http://localhost:3000/phieugiaohang/getpghtheoma?maphieugiaohang=${aray}`);
        const data = await response.json();
        //console.log(data);
        const tableBodyPGH = document.querySelector('table.data-tablepgh tbody');
        data.forEach(dh => {
            const row = `
                    <tr>
                      <td>${dh.maphieugiaohang}</td>
                      <td>${fomatDate(dh.ngaylapphieu)}</td>
                      <td>${dh.tennv}</td>
                      <td>${tennguoigiao}</td>
                    </tr>
                  `;
            tableBodyPGH.innerHTML += row;
        });
    } catch (error) {
        console.log(error);
    }
}
async function getDataDHChon() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        // console.log(aray);
        // console.log(array);
        const response = await fetch(`http://localhost:3000/phieugiaohang/gettheophieugh?maphieugiaohang=${aray}`);
        const data = await response.json();
        //console.log(data);
        const tableBody = document.querySelector('table.data-tabledh tbody');
        data.forEach(dh => {
            const row = `
                    <tr>
                      <td>${dh.ghichu}</td>
                      <td>${dh.ten_nguoinhan}</td>
                      <td>${dh.sdt_nguoinhan}</td>
                      <td>${dh.diachi_nguoinhan}</td>
                      
                    </tr>
                  `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.log(error);
    }
}

getDataPGHChon();
getDataDHChon();
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