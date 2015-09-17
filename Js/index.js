$(document).ready(function(){
 $('.mainLink').mouseenter(function(){
  $(this).find('.nestedList').slideDown('slow');
 });
 $('.mainLink').mouseleave(function(){
  $(this).find('.nestedList').slideUp('slow');
 })
 $('#userinput form input[name="destination"]').focus(function(){
    $('#myModal').modal({
      show:true
    });
 });
$("#backToTop").click(function(){
   window.scrollTo(0, 0);
})

$('#submit').click(function(){
    var cities = [],
        input = $('#cities-form').serializeArray();
    for (i=0; i< input.length; i++) {
        cities.push(input[i].value);
    }
    
    if (cities.length === 0) {
        $('.error').text('please select a city...stupid');
    } else {
        $('.error').text('');
      var data = JSON.stringify(cities);
      console.log(data);
    }
});
});
