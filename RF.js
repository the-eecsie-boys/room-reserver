function setFloor(floorNum){
  var imageSrc = "images/tech" + floorNum + ".jpg";
  var mapDivHTML = `<img id="MapPic" usemap="#floorMap" width="100%" src="${imageSrc}">`;
  if(floorNum == 1){
    mapDivHTML += `<map name="floorMap">
                      <area shape="rect" coords="0,403,230,638" href="RF3rdPage.html" alt="Wing A">
                   </map>`;
  }
  mapDivHTML += `
        <button type="button" onclick="window.location='index.html';" class="btn btn-primary back-btn"><i class="material-icons" >navigate_before</i></button>
        <button type="button" onclick="window.location='RF3rdPage.html';" class="btn btn-primary next-btn"><i class="material-icons">navigate_next</i></button>
      `;
  document.getElementById("maps-div").innerHTML = mapDivHTML;
}

//trying to have the correct user room on confirmation page (page 5)
function getRoomNumber(room){
  window.sessionStorage.setItem("reserved_room", room.innerHTML);
  window.sessionStorage.setItem("reserved_room_stats", room.parentElement.children[1].innerHTML);
  document.location.href = "RF4thPage.html";
  document.getElementById("RoomID").innerHTML = "Your rooom, " + room + ", has been reserved";
}

//trying to have correct time and date on confirmation page (page 5)
function changeToUserInput(){
  window.sessionStorage.setItem("reserved_date", document.getElementById('date').value);
  window.location.href = "RF2ndPage.html";
  var time = document.getElementById('TimeID');
  var date = document.getElementById('DateID');
  var useTime = document.getElementById('time');
  var useDate = document.getElementsById('date');
  time.innerHTML = "from " + useTime + " to" + useTime;
  date.innerHTML = "for " + useDate;
}

//trying to set reservation page to accurately selected things
function changeReservations(){
  document.location.href = "index.html";
  var time = document.getElementById('TimeID');
  var date = document.getElementById('DateID');
  var room = document.getElementById('RoomID');
  var rev = document.getElementById('theRev');

  rev.innerHTML = "Your room, " + room + ", is reserved from " + time + " to " + time + " on " + date;
}
