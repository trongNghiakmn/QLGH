async function getDataDcChon() {

    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')

        var madonhang = localStorage.getItem("madonhang_capnhat");
        //console.log(array);
        console.log(aray);
        console.log(madonhang);

        const response = await fetch(`http://localhost:3000/donhang/gettheoma?madonhang=${madonhang}`);
        const data = await response.json();
        //console.log(data);
        const tableBody = document.querySelector('table.data-table tbody');
        data.forEach(dh => {
            const row = `
                    <tr>
                      <td>${dh.madonhang}</td>
                      <td>${dh.ten_nguoigui}</td>
                      <td>${dh.sdt_nguoigui}</td>
                      <td>${dh.ten_nguoinhan}</td>
                      <td>${dh.sdt_nguoinhan}</td>
                      <td>${dh.diachi_nguoinhan}</td>
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
getDataDcChon()