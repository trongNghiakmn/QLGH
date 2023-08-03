async function getDataChucVu() {
    try {
        const response = await fetch('http://localhost:3000/chucvu/getall');
        const data = await response.json();
        //console.log(data);
        // tham chieu den select ma chuc vu
        const selectElement = document.getElementById('machucvu');
        data.forEach(chucvu => {
            const optionElement = document.createElement('option');
            optionElement.value = chucvu.machucvu;
            optionElement.text = chucvu.tenchucvu;
            selectElement.appendChild(optionElement);
        });

    } catch (error) {
        console.log(error);
    }
}
getDataChucVu();