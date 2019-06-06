var topics = ["Game of Thrones", "Black Mirror", "The Crown", "House of card", "13 Reasons Why", "Stranger Things",
    "Ozark", "La Casa de Papel", "Narcos", "Mindhunter", "Suburra"];


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
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var seriesDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            p.addClass("text-white");
            p.css("margin", "10px")
            var stillImage = results[i].images.fixed_height_still.url;
            var animateImage = results[i].images.fixed_height.url;
            var seriesImage = $("<img>");
            seriesImage.attr("src", stillImage);
            seriesImage.attr("data-state", "still")
            seriesImage.attr("data-animate", animateImage)
            seriesImage.attr("data-still", stillImage)
            seriesImage.css("margin", "10px")

            seriesDiv.append(p);
            seriesDiv.append(seriesImage);

            $("#gifs-appear-here").prepend(seriesDiv);

            seriesImage.on("click", function () {
                var state = $(this).attr("data-state")
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else if (state === "animate") {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });

        }
    })
});

function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn btn-danger")
        newButton.addClass("series-btn");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttons").append(newButton);
    }
}

$("#add-series").on("click", function (event) {
    event.preventDefault();
    var newSeries = $("#series-input").val().trim();
    topics.push(newSeries);

    renderButtons();
});







