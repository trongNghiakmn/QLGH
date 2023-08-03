async function getDataKho() {
    try {
        const response = await fetch('http://localhost:3000/kho/getall');
        const data = await response.json();
        //console.log(data);
        const selectElement = document.getElementById('mak');
        data.forEach(kho => {
            const optionElement = document.createElement('option');
            optionElement.value = kho.makho;
            optionElement.text = kho.tenkho;
            selectElement.appendChild(optionElement);
        });
    } catch (error) {
        console.log(error);
    }
}
async function getDataKhoGui() {
    try {
        const response = await fetch('http://localhost:3000/kho/getall');
        const data = await response.json();
        //console.log(data);
        const selectElement = document.getElementById('mak_gui');
        data.forEach(kho => {
            const optionElement = document.createElement('option');
            optionElement.value = kho.makho;
            optionElement.text = kho.tenkho;
            selectElement.appendChild(optionElement);
        });
    } catch (error) {
        console.log(error);
    }
}
async function getDataKhoDen() {
    try {
        const response = await fetch('http://localhost:3000/kho/getall');
        const data = await response.json();
        //console.log(data);
        const selectElement = document.getElementById('mak_den');
        data.forEach(kho => {
            const optionElement = document.createElement('option');
            optionElement.value = kho.makho;
            optionElement.text = kho.tenkho;
            selectElement.appendChild(optionElement);
        });
    } catch (error) {
        console.log(error);
    }
}
getDataKhoDen();
getDataKho();
getDataKhoGui();