var topics = ["Game of Thrones", "Black Mirror", "The Crown", "House of card", "13 Reasons Why", "Stranger Things", "You", "Casa de Papel"];


for (var i = 0; i < topics.length; i++) {
    var gifButton = $("<button>");
    gifButton.addClass("btn btn-light")
    gifButton.text(topics[i])

    $("#buttons").append(gifButton);    
}


