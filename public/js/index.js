let selector = document.getElementById('selector');
let unix = document.getElementById('unix');
let utc = document.getElementById('utc');
let btnSearch = document.getElementById('btn-search');

let opt = 0;

selector.addEventListener('change', (e) => { // Agrego el evento de cambio al selector
    if (btnSearch.classList.contains('d-none'))
        btnSearch.classList.remove('d-none');

    if (e.target.value === "1" && unix.classList.contains('d-none')){
        unix.classList.remove('d-none');
        if (!utc.classList.contains('d-none'))
            utc.classList.add('d-none');
    } else if (e.target.value === "2" && utc.classList.contains('d-none')){
        utc.classList.remove('d-none');
        if (!unix.classList.contains('d-none'))
            unix.classList.add('d-none');
    }
    else {
        if (!unix.classList.contains('d-none'))
            unix.classList.add('d-none');
        if (!utc.classList.contains('d-none'))
            utc.classList.add('d-none');
        if (!btnSearch.classList.contains('d-none'))
            btnSearch.classList.add('d-none');
    }
    opt = parseInt(e.target.value)
}); 

btnSearch.addEventListener('click', (e) => {
        value = document.getElementById(`e${opt}`).value;
        location.href = `/api/${value}`;
    })