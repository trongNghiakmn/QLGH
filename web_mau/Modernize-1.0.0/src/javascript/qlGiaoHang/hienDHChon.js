async function getDataShipper() {
    try {
        const response = await fetch('http://localhost:3000/nhanvien/gettheochucvu?ma_chucvu=5');
        const data = await response.json();
        //console.log(data);
        const selectElement = document.getElementById('nguoigiao');
        data.forEach(nv => {
            const optionElement = document.createElement('option');
            optionElement.value = nv.manv;
            optionElement.text = nv.tennv;
            selectElement.appendChild(optionElement);
        });

    } catch (error) {
        console.log(error);
    }
}
async function getDataDcChon() {

    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        // console.log(aray);
        // console.log(array);
        array.forEach(async (e) => {
            const response = await fetch(`http://localhost:3000/donhang/gettheoma?madonhang=${e}`);
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
        })


    } catch (error) {
        console.log(error);
    }
}

getDataDcChon()
getDataShipper()