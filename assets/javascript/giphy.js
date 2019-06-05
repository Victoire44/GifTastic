var topics = ["Game of Thrones", "Black Mirror", "The Crown", "House of card", "13 Reasons Why", "Stranger Things", "You", "Casa de Papel"];


for (var i = 0; i < topics.length; i++) {
    var gifButton = $("<button>");
    gifButton.addClass("btn btn-danger")
    gifButton.text(topics[i])

    $("#buttons").append(gifButton);
}

$("button").on("click", function () {
    var series = $(this).text()

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        series + "&api_key=ya3czf6RnXKyCr1uNzKdX9hYTUlRtO5J&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var seriesDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var seriesImage = $("<img>");
            seriesImage.attr("src", results[i].images.fixed_height.url);
            seriesDiv.append(p);
            seriesDiv.append(seriesImage);
            $("#gifs-appear-here").prepend(seriesDiv);
        }
    })
});

