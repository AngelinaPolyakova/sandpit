function update() {
    $('.iframe').contents().find('html').html('<html><head><style type="text/css">' + $('#cssChange').val() + '</style></head>' + $('#htmlChange').val() + '</body></html>'); 
    document.getElementById("iframe").contentWindow.eval($("#javascriptChange").val());
}



$('.button').click(function() {
    $(this).toggleClass('active');

    var changing = $(this).attr('id') + 'Change';
    $('#' + changing).toggleClass('hidden');

    var countActiveArea = 4 - $('.hidden').length;
    $('.textarea').width(($('.main').width()) / countActiveArea);

})
update();

$('.textarea').on('change keyup paste', function() {
    update();
})


