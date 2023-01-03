$(document).ready(() => {
    // browse dropdown
    $('.nav-chevron-right').on('mouseenter', () => {
        $('.nav-browse-dropdown').slideDown(300);
    }).on('click', () => {
        $('.nav-browse-dropdown').slideUp(300);
    });
    $('.nav-browse-dropdown .nav-chevron-right').on('mouseleave', () => {
        $('.nav-browse-dropdown').slideUp(300);
    });
    $(document).on('click', () => {
        $('.nav-browse-dropdown').slideUp(300);
    });

    // question-mark 
    $('.bi-question-circle-fill').on('mouseenter', () => {
        $('.hs-q-mark').fadeIn(250);
    }).on('mouseleave', () => {
        $('.hs-q-mark').fadeOut(250);
    });

    // shopping number counter
    let count = 0;
    let addCarts = document.querySelectorAll('.add-cart');
    let cartCount = document.getElementById('cart-count');
    // let addCart = document.getElementById('add-cart');

    addCarts.forEach((addCart) => {
        addCart.addEventListener('click', (e) => {
            const style = e.currentTarget.classList;

            if (style.contains('add-cart')) {
                count++;
                cartCount.innerHTML = count;

                // item added info
                $('.layer').fadeIn();
                $('.added-item').fadeIn();
            }
        })
    })

    $('.added-item-box h4').on('click', () => {
        $('.layer').fadeOut(300);
        $('.added-item').fadeOut(300);
    })

    // about page
    // ===============
    // banner hover
    $('.about-banner').on('mouseenter', (event) => {
        $(event.currentTarget).addClass('about-layer').fadeIn(300);
        $('.priority-h2').fadeIn(300);
        $('.priority-h2').css({color: 'black'});
    }).on('mouseleave', () => {
        $(event.currentTarget).removeClass('about-layer');
        $('.about-layer').fadeOut(400);
        // $('.priority-h2').fadeOut(200);
        $('.priority-h2').css({color: 'white'});
    })


});
