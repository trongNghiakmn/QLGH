async function getDataNVDH() {
    try {
        const response = await fetch('http://localhost:3000/nhanvien/gettheochucvu?ma_chucvu=2');
        const data = await response.json();
        //console.log(data);
        // tham chieu den table
        const tableBody = document.querySelector('table.table-nvqldh tbody');
        data.forEach(nv => {
            const row = `
                <tr>
                  <td>${nv.manv}</td>
                  <td>${nv.tennv}</td>
                  <td>${nv.sdt}</td>
                  <td>${nv.tenchucvu}</td>
                  <td>${nv.taikhoan}</td>
                  <td>${nv.matkhau}</td>
                  <th><input id="chk_all" name="chk_all" type="checkbox" value="${nv.manv}" /></th>
                </tr>
              `;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.log(error);
    }
}
async function getDataNVGH() {
    try {
        const response = await fetch('http://localhost:3000/nhanvien/gettheochucvu?ma_chucvu=4');
        const data = await response.json();
        //console.log(data);
        const tableBody = document.querySelector('table.table-nvqlgh tbody');
        data.forEach(nv => {
            const row = `
                <tr>
                  <td>${nv.manv}</td>
                  <td>${nv.tennv}</td>
                  <td>${nv.sdt}</td>
                  <td>${nv.tenchucvu}</td>
                  <td>${nv.taikhoan}</td>
                  <td>${nv.matkhau}</td>
                  <th><input id="chk_all" name="chk_all" type="checkbox" value="${nv.manv}" /></th>
                </tr>
              `;
            //them noi dung vao table
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.log(error);
    }
}
async function getDataNVSP() {
    try {
        const response = await fetch('http://localhost:3000/nhanvien/gettheochucvu?ma_chucvu=5');
        const data = await response.json();
        //console.log(data);
        //tham chieu den table
        const tableBody = document.querySelector('table.table-nvgh tbody');
        data.forEach(nv => {
            const row = `
                <tr>
                  <td>${nv.manv}</td>
                  <td>${nv.tennv}</td>
                  <td>${nv.sdt}</td>
                  <td>${nv.tenchucvu}</td>
                  <td>${nv.taikhoan}</td>
                  <td>${nv.matkhau}</td>
                  <th><input id="chk_all" name="chk_all" type="checkbox" value="${nv.manv}" /></th>
                </tr>
              `;
            //them noi dung vao table
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.log(error);
    }
}

getDataNVDH();
getDataNVGH();
getDataNVSP();