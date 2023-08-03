function exportToExcel() {
    var data = [];

    var table = document.getElementById("tabledh");
    var rows = table.getElementsByTagName("tr");
    var headerRowDH = rows[0];
    var headerDataDH = [];
    var headerCellDH = headerRowDH.getElementsByTagName("th");
    //them du lieu cua <th> vao headerDataDH
    for (var j = 0; j < headerCellDH.length; j++) {
        headerDataDH.push(headerCellDH[j].innerText);
    }
    //them vao data
    data.push(headerDataDH);
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var rowData = [];
        var cells = row.getElementsByTagName("td");
        // xac dinh so o
        var numCells = Math.min(cells.length, headerCellDH.length);
        //đảm bảo rằng mỗi hàng trong mảng data có độ dài bằng nhau
        for (var j = 0; j < numCells; j++) {
            rowData.push(cells[j].innerText);
        }
        for (var j = numCells; j < headerCellDH.length; j++) {
            rowData.push("");
        }
        data.push(rowData);
    }
    console.log("Data:", data);
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.aoa_to_sheet([]);
    //chuyen du lieu cua data thanh worksheet
    XLSX.utils.sheet_add_aoa(worksheet, data);
    //chuyen du lieu cua worksheet thanh workbook voi ten Sheet1
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    try {
        //tao file ecxel
        XLSX.writeFile(workbook, "data.xlsx");
    } catch (error) {
        console.log("Error:", error);
    }
}

function exportToExcelPGH() {
    var data = [];

    var tablett = document.getElementById("tablett");
    var rowstt = tablett.getElementsByTagName("tr");
    var headerRowtt = rowstt[0];
    var headerDatatt = [];
    var headerCellstt = headerRowtt.getElementsByTagName("th");
    //them du lieu cua <th> vao headerDataDH
    for (var j = 0; j < headerCellstt.length; j++) {
        headerDatatt.push(headerCellstt[j].innerText);
    }
    //them vao data
    data.push(headerDatatt);
    //-------------------------------------------------------
    var tablepgh = document.getElementById("tablepgh");
    var rowspgh = tablepgh.getElementsByTagName("tr");
    var headerRow = rowspgh[0];
    var headerData = [];
    var headerCells = headerRow.getElementsByTagName("th");
    //them du lieu cua <th> vao headerDataDH
    for (var j = 0; j < headerCells.length; j++) {
        headerData.push(headerCells[j].innerText);
    }
    //them vao data
    data.push(headerData);
    for (var i = 1; i < rowspgh.length; i++) {
        var row = rowspgh[i];
        var rowData = [];
        var cells = row.getElementsByTagName("td");
        // xac dinh so o
        var numCells = Math.min(cells.length, headerCells.length);
        //đảm bảo rằng mỗi hàng trong mảng data có độ dài bằng nhau
        for (var j = 0; j < numCells; j++) {
            rowData.push(cells[j].innerText);
        }
        for (var j = numCells; j < headerCells.length; j++) {
            rowData.push("");
        }
        data.push(rowData);
    }
    //----------------------------------------------
    var table = document.getElementById("tabledh");
    var rows = table.getElementsByTagName("tr");
    var headerRowDH = rows[0];
    var headerDataDH = [];
    var headerCellDH = headerRowDH.getElementsByTagName("th");
    //them du lieu cua <th> vao headerDataDH
    for (var j = 0; j < headerCellDH.length; j++) {
        headerDataDH.push(headerCellDH[j].innerText);
    }
    //them vao data
    data.push(headerDataDH);
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var rowData = [];
        var cells = row.getElementsByTagName("td");
        //xac dinh so o
        var numCells = Math.min(cells.length, headerCellDH.length);
        //đảm bảo rằng mỗi hàng trong mảng data có độ dài bằng nhau
        for (var j = 0; j < numCells; j++) {
            rowData.push(cells[j].innerText);
        }
        for (var j = numCells; j < headerCellDH.length; j++) {
            rowData.push("");
        }
        data.push(rowData);
    }
    console.log("Data:", data);
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.aoa_to_sheet([]);
    //chuyen du lieu cua data thanh worksheet
    XLSX.utils.sheet_add_aoa(worksheet, data);
    //chuyen du lieu cua worksheet thanh workbook voi ten Sheet1
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    try {
        //tao file ecxel
        XLSX.writeFile(workbook, "data.xlsx");
    } catch (error) {
        console.log("Error:", error);
    }
}