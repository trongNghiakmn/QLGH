
function clickButtonPageTaoPGH() {
    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
        array.push($(this).val());
    })
    //gan array vao url
    window.location.href = "../qlGiaoHang/authentication-taophieugiaohang.html?array=" + array;

}
function clickButtonPageChiTietPGH() {
    const ten_nguoigiao = document.getElementById("nguoigiao").options[document.getElementById("nguoigiao").selectedIndex].textContent;
    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
        array.push($(this).val());
    });
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("tennguoigiao", ten_nguoigiao);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    //gan array vao url
    window.location.href = "../qlGiaoHang/authentication-chitietphieugiaohang.html?array=" + array;

}
function clickButtonPageUpdateNV() {
    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
        array.push($(this).val());
    })

    window.location.href = "../admin/authentication-updatenhanvien.html?array=" + array;

}
function clickButtonPageTraHang() {
    const ten_khoden = document.getElementById("mak").options[document.getElementById("mak").selectedIndex].textContent;
    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
        var value = $(this).closest("tr").find("td:first").text();
        array.push(value);
    });
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("tenkhoden", ten_khoden);

        // Retrieve

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    //gan array vao url
    window.location.href = "../qlDonHang/authentication-trahang.html?array=" + array;

}
function clickButtonPageCapNhatPCK() {

    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
        var value = $(this).closest("tr").find("td:first").text();
        array.push(value);
    });

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var maDon;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var row = checkboxes[i].parentNode.parentNode;
            maDon = row.querySelector('td:nth-child(5)').textContent;
        }
    }
    //console.log(selectedRows);
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("madonhang_capnhat", maDon);

        // Retrieve

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    //gan array vao url
    window.location.href = "../qlDonHang/authentication-capnhatphieuchuyenkho.html?array=" + array;

}