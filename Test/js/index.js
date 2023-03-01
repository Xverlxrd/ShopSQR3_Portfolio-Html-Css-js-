// Скролл при нажатии на ссылки в хедере
document.querySelector('.header__button').addEventListener('click', e => { //Выбираем ссылки с классом header__button и добавляем действие при клике
    let about = document.querySelector('.catalog'); // Создаем переменную и присваеваем ей значение блока к которому скролится страница
    about.scrollIntoView({  // Сама функция которая отвечает за скролл
        block: "center",    // Это означает что скролл происходит к центру блока 
        behavior: 'smooth', // Это означает что скролл будет плавным, без него бы просто телепортировало к нужному месту
    }) // ВСЕ ЧТО НИЖЕ РАБОТАЕТ ТАК ЖЕ ТОЛЬКО РАЗНЫЕ КЛАССЫ НА КОТОРЫЕ НАЖИМАЕМ И РАЗНЫЕ БЛОКИ К КОТОРОМУ ИДЕТ СКРОЛЛ
});
document.querySelector('.banner__button').addEventListener('click', e => {
    let about = document.querySelector('.catalog');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});
document.getElementById("about").addEventListener('click', e => { //GetElementById. Здесь выбираем не по классу ссылки, а по её id
    let about = document.querySelector('.about');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});
document.getElementById("service").addEventListener('click', e => {
    let about = document.querySelector('.servise');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});
document.getElementById("catalog").addEventListener('click', e => {
    let about = document.querySelector('.catalog');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});
document.getElementById("about_footer").addEventListener('click', e => {
    let about = document.querySelector('.about');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});
document.getElementById("service_footer").addEventListener('click', e => {
    let about = document.querySelector('.servise');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});
document.getElementById("catalog_footer").addEventListener('click', e => {
    let about = document.querySelector('.catalog');
    about.scrollIntoView({
        block: "center",
        behavior: 'smooth',
    })
});

// Код для каталога по поиску
function search() { 
    let input = document.querySelector(".catalog__nav_input"); //Находим элемент с поиском 
    let filter = input.value.toUpperCase();//Переводим значение которое пишим в поиск В ВЕРХНИЙ РЕГИСТР
    let ul = document.querySelector(".catalog__content_list"); // Находим элемент список с классом catalog__content_list
    let li = ul.querySelectorAll(".catalog__content_item"); //Находим внутри списка карточки товаров
 
    // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
    for (let i = 0; i < li.length; i++) { //Перебераем все элемент li 
        let h2 = li[i].getElementsByTagName("h2")[0]; // Создаем переменную h2 и присваеваем ей значение тега h2 (Названия карточки)
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) { //Если у карточки есть название и оно подходит по фильтру 
            li[i].style.display = ""; 
        } else {
            li[i].style.display = "none"; // Тогда мы удаляем карточки название которых не совпадает, остальные оставляем
        }
    }
    
}
document.addEventListener('input', search);//Вызваем функию (Функция срабатывает если что-то вводим в поиск)


// Код для навигации каталога
let items = document.querySelectorAll('.catalog__nav_item'); //Получаем все элементы с классом .catalog__nav_item
Array.from(items).forEach(function(items){//Помещаем в массив все эти элементы. forEach значит что мы проходим по массиву и для каждого элемента с этим классом срабатывает всё что ниже
    items.addEventListener('click', function(e) { //Для элемента с классом .catalog__nav_item зпри нажатии на него происходит все что ниже
        let itemid = items.id; // Создаем переменную и присваеваем ей id элемента на который нажали
        let catalogId = document.querySelectorAll('.catalog__content_item'); // Создаем переменную и помещаем туда все карточки товаров
        for(i = 0; i<catalogId.length; i++){ //Запускаем цикл чтобы при запуске сайта все карточки с товарами были видны
            catalogId[i].style.display = 'block';
        }
        for (i = 0; i<catalogId.length; i++){ //Запускаем цикл в котором проходим по массиву содержащему карточки с товарами
            
            if(catalogId[i].id == itemid){ //Если id ссылки (Напремер chair) равен карточкам товаров с таким же id (chair)
                for(i = 0; i<catalogId.length; i++){//Тогда запускаем цикл и снова проходимся по карточкам
                    if(catalogId[i].id !== itemid){ //Находим карточки id которых не равен (Опять же например chair)
                        catalogId[i].style.display = 'none'; // И скрываем эти карточки
                    } 
                }
                break; //Заканчиваем данный скрипт, в итоге у нас остаются только карточки с id (chair) и такой же картинкой соответственно
            }
        }
    })
});