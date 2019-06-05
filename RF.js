function setFloor(floorNum){
  var imageSrc = "images/tech" + floorNum + ".jpg";
  var mapDivHTML = `<img id="MapPic" usemap="#floorMap" width="100%" src="${imageSrc}">`;
  if(floorNum == 1){
    mapDivHTML += `<map name="floorMap">
                      <area shape="rect" coords="0,403,230,638" href="RF3rdPage.html" alt="Wing A">
                   </map>`;
  }
  /*mapDivHTML += `
        <button type="button" onclick="window.location='index.html';" class="btn btn-primary back-btn"><i class="material-icons" >navigate_before</i></button>
        <button type="button" onclick="window.location='RF3rdPage.html';" class="btn btn-primary next-btn"><i class="material-icons">navigate_next</i></button>
      `;*/
  document.getElementById("maps-div").innerHTML = mapDivHTML;
}

//trying to have the correct user room on confirmation page (page 5)
function getRoomNumber(room){
  window.sessionStorage.setItem("reserved_room", room.innerHTML);
  window.sessionStorage.setItem("reserved_room_stats", room.parentElement.children[1].innerHTML);
  document.location.href = "RF4thPage.html";
  }

//trying to have correct time and date on confirmation page (page 5)
function changeToUserInput(){
  window.sessionStorage.setItem("reserved_date", document.getElementById('date').value);
  window.sessionStorage.setItem("reserved_time", document.getElementById('time').value);
  window.location.href = "RF2ndPage.html";
}

//trying to set reservation page to accurately selected things
function changeReservations(){
  document.location.href = "index.html";
}