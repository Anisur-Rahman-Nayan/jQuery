// jQuery or
// $(document).ready(function(){
//     $('h1').css('color','red')
// });

$('h1').css('color','green')
$('h1').css('font-size','3rem')

$('h2').addClass("big-title ");
// $('h2').addClass("big-title margin-2");
// $('h2').removeClass("big-title");

// $('h2').hasClass("big-title")

$('h3').text("Anisur Rahman Nayan")

// console.log($('h1').css('color'))
// console.log($('h1').css('font'))
// console.log($('h1').css('font-size'))

$('button').html("<em>Hey!</em>")

// console.log($("img").attr("src"))
// console.log($("a").attr("href"))
console.log($("a").attr("href", "https://www.youtube.com"))

console.log($('h4').attr('class'))

$('h1').click(function(){
    $('h1').css('color','purple')
})


$('button').click(function(){
    $('h2').css('color','purple')
})


$('input').keypress(function(event){
    // console.log(event.key)
    $('h5').text(event.key)
})


// $(document).keypress(function(event){
//     console.log(event.key)
// })

$('h1').on('mouseover',function(){
    $('h1').css('color','red')
})

// $('h1').on('click',function(){
//     $('h1').css('color','red')
// })

$('h1').before("<h6> jQuery! <h6>")
$('h1').after("<h6> jQuery! <h6>")
$('h1').prepend("<h6> jQuery! <h6>")
$('h1').append("<h6> jQuery! <h6>")

// $('button').remove();

$('button').on('click',function(){
    // $('p').hide();
    // $('p').toggle();
    // $('p').fadeOut();
    // $('p').fadeIn();
    // $('p').fadeToggle();
    //  $('p').slideUp();
    // $('p').slideDown();
    //  $('p').slideToggle();
    // $('p').animate({opacity: 0.5});
    // $('p').animate({margin: 20});
    $('p').slideUp().slideDown().animate({opacity:0.5});
    
})

// $('p').show();

