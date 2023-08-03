async function updatePCK() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')


        //console.log(array);
        //console.log(aray);

        const maphieuchuyenkho = aray
        const ma_khoden = document.getElementById("mak_den").value;
        const ma_khogui = document.getElementById("mak_gui").value;
        // console.log(ma_khoden);
        // console.log(ma_khogui);
        // console.log(maphieuchuyenkho);
        const response = await fetch('http://localhost:3000/phieuchuyenkho/updatekho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ma_khogui,
                ma_khoden,
                maphieuchuyenkho
            })
        });
        const data = await response.json();
    } catch (error) {
        console.log(error);
    }
}
async function updateTrangThaiDon() {
    try {
        var madonhang = localStorage.getItem("madonhang_capnhat");
        //console.log(madonhang);
        const ma_trangthai = 3;

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
        const data2 = await response.json();



    } catch (error) {
        console.log(error);
    }
}
function capNhat() {
    updatePCK();
    updateTrangThaiDon();
    window.location.replace("../../html/qlDonHang/authentication-donhangtrave.html");
}