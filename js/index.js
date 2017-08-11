function getNewQuote() {
    $.ajax({
        cache: false,
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?",
        dataType: "json",
        success: function(json) {
            $("#quote").text(json.quoteText);
            $("#author").text(json.quoteAuthor);
            $("#btn-tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(json.quoteText));
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