$(function() {
    $('#eat').click(function(e) {
                    e.preventDefault();
                    var food=$('#food').val();
                    window.location.href=food;
                    })

});
