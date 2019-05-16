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
        <button type="button" class="btn btn-primary next-btn"><i class="material-icons">navigate_next</i></button>
      `;
  document.getElementById("maps-div").innerHTML = mapDivHTML;
}