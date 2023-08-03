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
getDataShipper()
async function hienPGH() {
    try {
        const ten_nguoigiao = document.getElementById("nguoigiao").options[document.getElementById("nguoigiao").selectedIndex].textContent;
        const ma_kho = document.getElementById("nguoigiao").value;
        const response = await fetch(`http://localhost:3000/phieugiaohang/gettheosipper?nguoigiao=${ma_kho}`);
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector('table.data-table tbody');
        tableBody.innerHTML = '';
        data.forEach(dh => {

            const row = `
                <tr>
                  <td>${dh.maphieugiaohang}</td>
                  <td>${fomatDate(dh.ngaylapphieu)}</td>
                  <td>${ten_nguoigiao}</td>
                  <td>${dh.tennv}</td>
                  <th><input id="chk_all" name="chk_all" type="checkbox" value="${dh.maphieugiaohang}" /></th>
                </tr>
              `;
            tableBody.innerHTML += row;


        });

    } catch (error) {
        console.log(error);
    }
}