// business logic

function Place(name, country, date, notes) {
  this.name = name;
  this.country = country;
  this.attractions = [];
  this.date = date;
  this.notes = notes;
}

function Attraction(attraction){
  this.draw = attraction;
}

Place.prototype.namePlace = function() {
  return this.name + ", " + this.country;
}


//user interface logic

$(document).ready(function() {
  $("#add-attraction").click(function(){
    $("#attraction-section").append('<label for="new-attraction">Attraction</label>' +
    '<input type="text" class="form-control" class="new-attraction">');
  });

  $("form#new-trip").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNotes = $("input#new-notes").val();
    var newPlace = new Place(inputtedName, inputtedCountry, inputtedDate, inputtedNotes);

    $("#attraction-section").each(function() {
      var inputtedAttraction = $(this).find("input.new-attraction").val();
      var newAttraction = new Attraction(inputtedAttraction);
      newPlace.attractions.push(newAttraction);
    });


    $("#show-place").append("<div class='well place'>" +
                            "<h2>" +
                            newPlace.namePlace() +
                            "</h2>" +
                            "<p class='date'></p>" +
                            "<p class='notes'></p>" +
                            "<ul class='attractions'>" +
                            "</ul>" +
                            "</div>");

    $(".place").last().click(function() {
      $(".date").text("Date: " + newPlace.date);
      $(".notes").text("Notes: " + newPlace.notes);

      newPlace.attractions.forEach(function(attraction){
        $("ul.attractions").append("<li>" + attraction.draw + "</li>");
      });
    });


    $("input#new-name").val("");
    $("input#new-country").val("");
    $("input#new-attraction").val("");
    $("input#new-date").val("");
    $("input#new-notes").val("");

  });
});
