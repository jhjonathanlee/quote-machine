function getNewQuote() {
    $.ajax({
        cache: false,
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
        dataType: "json",
        success: function(json) {
            $(".quote").html(json[0].content + "<p>" + json[0].title + "</p>");
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });
}

$(document).ready(function() {
    getNewQuote();
    $("#btn-quote").on("click", function() {
        getNewQuote();
    });

});