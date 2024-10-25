$('h1').html('Самая крутая пицца ждет <span>только в нашем ресторане</span>');

$('#pizzas').css('color', 'black');

$('.btn:not(#no-touch)').css({
    background: 'transparent',
    border: '1px solid rgb(255, 175, 24)',
    color: 'rgb(255, 175, 24)'
})

$('#name-input').attr('placeholder', 'Имя')

$('.rights span').text(new Date().getFullYear())


let products = $('.product');

for (let i = 1; i < products.length; i = i + 2) {
    let el = products.eq(i).children().eq(1)
    el.text(el.text() + '**')
}

$('#choose-pizza').on('click', function () {
    $('.product')[0].scrollIntoView({behavior: "smooth"});
})


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


$('.btn-add-to-cart').on('click', function (event) {
    $('#product-input').val($(event.target).parents('.product').find('.product-title').text());
    $('.order')[0].scrollIntoView({behavior: "smooth"});
})


$('#create-order').on('click', function (e) {
    e.preventDefault();
    let inputs = $('form input');
    let hasError = false;
    inputs.each((i) => {
        let input = $(inputs[i])
        if (input.val() === '') {
            alert(`Заполните поле ${input.attr('placeholder')}`);
            hasError = true
            return false;
        }
    })
    if (!hasError) {
        alert('Спасибо за Ваш заказ!')
        $('form')[0].submit();
    }
})