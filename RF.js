function setFloor(floorNum){
  var imageSrc = "Images/tech" + floorNum + ".jpg";
  var mapDivHTML = `
        <img id="MapPic" width="100%" src="${imageSrc}">
        <button type="button" class="btn btn-primary back-btn"><i class="material-icons">navigate_before</i></button>
        <button type="button" class="btn btn-primary next-btn"><i class="material-icons">navigate_next</i></button>
      `;
  document.getElementById("maps-div").innerHTML = mapDivHTML;
}