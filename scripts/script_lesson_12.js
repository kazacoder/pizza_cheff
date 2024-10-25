document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open')
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open')
    }
})

document.getElementById('pizzas-link').onclick = function () {
    document.getElementsByClassName('product')[0].scrollIntoView({behavior: "smooth"});
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

let addToCardButtons = document.querySelectorAll('.btn-add-to-cart')

addToCardButtons.forEach(item => {
    item.onclick = function (e) {
        let chosen_product = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementById('product-input').value = chosen_product;
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
    }
})


document.getElementById('create-order').onclick = function (e) {
    e.preventDefault();
    let inputs = document.querySelectorAll('form input');
    for (const input of inputs) {
        if (input.value === '') {
            alert(`Заполните поле ${input.placeholder}`);
            return;
        }
    }
    document.getElementsByTagName('form')[0].submit();
}