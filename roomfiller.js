var rooms = [
  {
    capacity: "30",
    availability: "1:00 1:00"
  },
  {
    capacity: "30",
    availability: "1:00 1:00"
  }
};

]

function availablerooms(){
  var allrooms = document.getElementById("available-rooms");
  if (rooms != null) {
    for (var i=0; i<rooms.length; i++) {
      var cardWrapper = document.createElement('div');
      cardWrapper.classList.add("card text-white bg-primary room-info-wing-closeup");

      var cardHeader = document.createElement('div');
      cardHeader.classList.add("card-header room-info-wing-closeup-header");

      var cardBody = document.createElement('div');
      cardBody.classlist.add("card-body text-center")

      var cardContents = `
      <h5 class="card-title">Capacity: ${rooms[i].capacity}</h5>
      <p class="card-text">${rooms[i].availability}</p>
      `;

      cardBody.innerHTML = cardContents;
      allrooms.appendChild(cardWrapper);
    }
  }

}
