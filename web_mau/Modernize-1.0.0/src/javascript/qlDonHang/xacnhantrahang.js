async function updateNoiDung() {
    try {
        const noidung = document.getElementById("noidung").value;
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        array.forEach(async (maphieuchuyenkho) => {
            const response = await fetch('http://localhost:3000/phieuchuyenkho/updatenoidung', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    noidung,
                    maphieuchuyenkho
                })
            });
            // const data = await response.json();
        })


    } catch (error) {
        console.log(error);
    }
}
async function updateTrangThaiDon() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',');
        var madonhang = 0;
        const ma_trangthai = 7;
        for (let i = 0; i < array.length; i++) {
            const e = array[i];
            try {
                const response = await fetch(`http://localhost:3000/phieuchuyenkho/getalltheoma?ma_khoden=${e}`);
                const data = await response.json();
                for (let j = 0; j < data.length; j++) {
                    const dh = data[j];
                    const madonhang = dh.madonhang;
                    console.log(madonhang);
                    console.log(ma_trangthai);
                    const response2 = await fetch('http://localhost:3000/donhang/updatestatus', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            ma_trangthai,
                            madonhang
                        })
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }


    } catch (error) {
        console.log(error);
    }
}
async function traHang() {
    try {
        await updateNoiDung();
        await updateTrangThaiDon();
        window.location.replace("../../html/qlDonHang/authentication-chuyenkho.html");
    } catch (error) {
        console.log(error);
    }
}