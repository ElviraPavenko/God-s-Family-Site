const select = document.querySelector('select');
const allLang = ['ua', 'ru', 'de', 'en'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    window.location.hash = lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = arrLang['title'][hash];
    document.querySelector('.header-title').innerHTML = arrLang['title'][hash];
    document.querySelector('.header-subtitle').innerHTML = arrLang['subtitle'][hash];
    document.querySelector('.info-title').innerHTML = arrLang['aboutUs'][hash];
    document.querySelector('.info-subtitle').innerHTML = arrLang['aboutUsSubtitle'][hash];
    document.querySelector('.info-description').innerHTML = arrLang['aboutUsDescripition'][hash];
    document.querySelector('.greeting').innerHTML = arrLang['greeting'][hash];
}

changeLanguage();