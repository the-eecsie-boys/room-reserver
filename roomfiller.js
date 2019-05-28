var rooms = [
  {
    name: "A110",
    capacity: "25",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A119",
    capacity: "25",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A116",
    capacity: "35",
    availability: "1:00pm-2:50pm"
  },
  {
    name: "A128",
    capacity: "45",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A120",
    capacity: "15",
    availability: "1:00pm-3:50pm"
  },
  {
    name: "A134",
    capacity: "40",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A139",
    capacity: "45",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A136",
    capacity: "10",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A138",
    capacity: "50",
    availability: "1:00pm-1:50pm"
  },
  {
    name: "A140",
    capacity: "15",
    availability: "1:00pm-1:50pm"
  }
];


function availablerooms(){
  var minCapacity = document.getElementById("minCapacitySelect").value;
  var maxCapacity = document.getElementById("maxCapacitySelect").value;
  var nameContains = document.getElementById("nameContainsInput").value;
  var allrooms = document.getElementById("availableRooms");
  allrooms.innerHTML = "";
  if (rooms != null) {
    for (var i=0; i<rooms.length; i++) {
      if(rooms[i].name.indexOf(nameContains) > -1 && rooms[i].capacity >= minCapacity && rooms[i].capacity <= maxCapacity){
        var cardWrapperHolder = `<div class="card text-white bg-primary room-info-wing-closeup">
        <div class="card-header room-info-wing-closeup-header" onclick="getRoomNumber(this)">${rooms[i].name}</div>
        <div class="card-body">
          <h5 class="card-title text-center">Capacity: ${rooms[i].capacity}</h5>
          <p class="card-text text-center">${rooms[i].availability}</p>
        </div>`;
        allrooms.innerHTML = allrooms.innerHTML + cardWrapperHolder;
      }
    }
  }
}
