document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open')
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})

document.getElementById('pizzas-link').onclick = function () {
    document.getElementById('pizzas').scrollIntoView({behavior: "smooth"});
}

document.getElementById('order-link').onclick = function () {
    document.getElementById('order').scrollIntoView({behavior: "smooth"});
}

document.getElementById('drinks-link').onclick = function () {
    document.getElementById('pizzas').scrollIntoView({behavior: "smooth"});
}

document.getElementById('contacts-link').onclick = function () {
    document.getElementById('order').scrollIntoView({behavior: "smooth"});
}


document.getElementsByTagName('h1')[0].innerHTML = 'Самая крутая пицца ждет <span>только в нашем ресторане</span>';

document.getElementById('pizzas').style.color = 'black';

// let buttonElements = document.getElementsByClassName('btn')
let buttonElements = document.querySelectorAll('.btn')
buttonElements.forEach(item => {
    if (item.id === 'no-touch') {
        return;
    }
    item.style.backgroundColor = 'transparent';
    item.style.border = '1px solid rgb(255, 175, 24)';
    item.style.color = 'rgb(255, 175, 24)';
})

// for (let i = 0; i < buttonElements.length; i++) {
//     if (buttonElements[i].id === 'no-touch') {
//         continue;
//     }
//     buttonElements[i].style.backgroundColor = 'transparent';
//     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
//     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// }

document.getElementById('name-input').placeholder = 'Имя';

document.querySelector('.rights span').innerText = new Date().getFullYear();

let products = document.getElementsByClassName('product');

for (let i = 1; i < products.length; i = i + 2) {
    products[i].children[1].innerText += '*'
}
