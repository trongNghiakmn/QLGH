async function getDataDcChon() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        // console.log(aray);
        // console.log(array);
        const ten_khoden = localStorage.getItem("tenkhoden");
        // console.log(ten_khoden);
        array.forEach(async (e) => {
            const response = await fetch(`http://localhost:3000/phieuchuyenkho/getalltheoma?ma_khoden=${e}`);
            const data = await response.json();
            //console.log(data);
            const tableBody = document.querySelector('table.data-table tbody');
            data.forEach(dh => {
                const row = `
                <tr>
                    <td>${dh.maphieuchuyenkho}</td>
                    <td>${fomatDate(dh.ngaylapphieu)}</td>
                    <td>${dh.tenkho}</td>
                    <td>${ten_khoden}</td>
                    <td>${dh.madonhang}</td>
                    <td>${dh.ghichu}</td>
                    <td>${dh.diachi_nguoinhan}</td>
                  <th><input id="chk_all" name="chk_all" type="checkbox" value="${dh.maphieuchuyenkho}" /></th>
            </tr>
                  `;
                tableBody.innerHTML += row;
            });
        })


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

getDataDcChon();