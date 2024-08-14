$(document).ready(function() {
    $('.filter-item').click(function() {
        const value = $(this).attr('data-filter'); // Corrected attribute selector
        if (value === 'all') {
            $('.post-box').show('1000'); // Show all post-box elements
        } else {
            $('.post-box').hide('1000'); // Hide all post-box elements first
            $('.' + value).show('1000'); // Show only the post-box elements that match the filter
        }
    });

    // Trigger click on the active filter (optional, to show all posts by default)
        $(".filter-item").click(function () {
            $(this).addClass("active-filter").siblings().removeClass("active-filter");
        });
    });

    // header background change on scroll

    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle("shadow", window.scrollY > 0)
    })

