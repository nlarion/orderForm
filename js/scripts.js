$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var personName = $("input#personName").val();
    var address = $("input#address").val();
    var zip = $("input#zip").val();
    var state = $("input#state").val();

    $('div.modal-body').append(personName + " ");
    $('div.modal-body').append(address + " ");
    $('div.modal-body').append(zip + " ");
    $('div.modal-body').append(state + " ");

    event.preventDefault();
  })

});
