$(document).ready(function(){
    $("ul#ajax-list li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#ajax-list li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#ajax-list li.active").removeClass("active");
            $("ul#ajax-list li:nth-child("+nthChild+")").addClass("active");
        }
    });
});
