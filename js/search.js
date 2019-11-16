$('#search').on('input', function(){
    if($('#search').val() != ""){
        $('.gallery a').hide();
        const $search = $('#search').val().toLowerCase();
        $('.gallery a').each(function(){
            const $desc = $(this).attr("data-title").toLowerCase();
            if($desc.includes($search)){
                $(this).toggle();
            }
        });
    } else {
        $('a').show();
    }
});