
$('.js-add-to-wish-list').click(function(){
    let item_id = $(this).data('id');
    let data = {
        'action': 'add_to_wish_list',
        'csrfmiddlewaretoken': $('body').find('[name="csrfmiddlewaretoken"]').val(),
        'good_id': item_id,
        'return_url': location.pathname
    }
    $.ajax({
        type: 'POST',
        url: '/cart/',
        datatype: 'json',
        data: data,
        success: function(){
            alert("Успешно добавлено");
            location.reload();
        }
    })

    return false;
})

$('.js-add-to-compare-list').click(function(){
    let item_id = $(this).data('id');
    let data = {
        'action': 'add_to_compare_list',
        'csrfmiddlewaretoken': $('body').find('[name="csrfmiddlewaretoken"]').val(),
        'good_id': item_id,
        'return_url': location.pathname
    }
    $.ajax({
        type: 'POST',
        url: '/cart/',
        datatype: 'json',
        data: data,
        success: function(){
            alert("Успешно добавлено");
            location.reload();
        }
    })

    return false;
})

$('.js-add-to-cart').click(function(){
    let item_id = $(this).data('id');
    let data = {
        'action': 'add_to_cart',
        'csrfmiddlewaretoken': $('body').find('[name="csrfmiddlewaretoken"]').val(),
        'amount': 1,
        'good_id': item_id,
        'return_url': location.pathname
    }
    $.ajax({
        type: 'POST',
        url: '/cart/',
        datatype: 'json',
        data: data,
        success: function(){
            alert("Успешно добавлено");
            location.reload();
        }
    })

    return false;
})

$('.js-add-to-search').click(function(){
    let item_id = $(this).data('id');
    let data = {
        'csrfmiddlewaretoken': $('body').find('[name="csrfmiddlewaretoken"]').val(),
        'good_id': item_id,
        'return_url': location.pathname
    }
    $.ajax({
        type: 'GET',
        url: '/get-item/',
        datatype: 'json',
        data: data,
        success: function(oData){
            $('.js-search-title').text(oData["good_item"]["title"]);
            $('.js-search-logo').attr("src", oData["good_item"]["logo"]);
            $('.js-search-logo2').attr("src", oData["good_item"]["logo2"]);
            $('.js-search-logo3').attr("src", oData["good_item"]["logo3"]);
            $('.js-search-logo4').attr("src", oData["good_item"]["logo4"]);
            $('.js-search-price').text(oData["good_item"]["price"] + "$");
            $('.js-search-old-price').text(oData["good_item"]["old-price"] + "$");
            $('.js-search-mini-description').text(oData["good_item"]["mini-description"]);
            $('.js-search-mini-title').text("Мини-описание: ");
            $('.js-search-color').css("background-color",oData["good_item"]["color"]);
            $('.js-search-size').text(oData["good_item"]["size"]);
            $('.js-search-rating').text(oData["good_item"]["rating"]);
            $('.pro-details-rating').html("");
            $('.js-modal-container [name="good_id"]').val(item_id);
            for(let i = 0; i < 6; i++){
                if (oData["good_item"]["rating"] > i){
                    $('.pro-details-rating').append("<i></i>");
                    $('.pro-details-rating i').slice(i).addClass('sli').addClass('sli-star').addClass('yellow');
                }
            }
        }
    })
})

$('.js-count-1').click(function(){
    let count = 1;
    $('.js-input').val(count);
})
$('.js-count-2').click(function(){
    let count = 2;
    $('.js-input').val(count);
})
$('.js-count-3').click(function(){
    let count = 3;
    $('.js-input').val(count);
})
$('.js-count-4').click(function(){
    let count = 4;
    $('.js-input').val(count);
})
$('.js-count-5').click(function(){
    let count = 5;
    $('.js-input').val(count);
})

$('[name="order_by"]').change(function(){
    $(this).parents('form').submit();
})