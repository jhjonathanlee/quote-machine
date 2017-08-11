function getNewQuote() {
    $.ajax({
        cache: false,
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
        dataType: "json",
        success: function(json) {
            var content = json[0].content;
            $("#quote").html(content + "<p>- " + json[0].title + "</p>");
            $("#btn-tweet").remove();
            $("#span-tweet").append('<a href="https://twitter.com/intent/tweet?text='
                + content.slice(3, content.length - 7).replace(/\s+/g, "&nbsp;") 
                + '" class="btn btn-default btn-primary" id="btn-tweet"><i class="fa fa-twitter" aria-hidden="true"></i></a>');
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