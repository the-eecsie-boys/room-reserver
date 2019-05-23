//get the org name to pop up if clicked yes
$(document).ready( function(){
  $("#OrgMaybe").change(function(){
    if ($(this).val() == "yes"){
      $('#StuOrgDiv').show();
      $('#StuOrg').attr('required','');
    }
    else{
      $('#StuOrgDiv').hide();
      $('#StuOrg').removeAttr('required','');
    }
  });
});
