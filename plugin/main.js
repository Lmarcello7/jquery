(function($){
    $.fn.changeColors = function(){
        $(this).on('keyup', function(){
            $(this).css('background', this.value)
        });
        return this;
    }
})(jQuery)

$('input').changeColors();