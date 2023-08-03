async function getDataTrangThai() {
    try {
        const response = await fetch('http://localhost:3000/trangthai/getall');
        const data = await response.json();
        //console.log(data);
        const selectElement = document.getElementById('idtrangthai');
        data.forEach(trangthai => {
            const optionElement = document.createElement('option');
            optionElement.value = trangthai.matrangthai;
            optionElement.text = trangthai.tentrangthai;
            selectElement.appendChild(optionElement);
        });

    } catch (error) {
        console.log(error);
    }
}
getDataTrangThai();