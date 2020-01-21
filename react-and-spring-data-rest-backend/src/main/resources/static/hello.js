$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8765/api/employees"
  }).then(function(data, status, jqxhr) {
    $('.greeting-id').append(data._embedded.employees[0].firstName);
    $('.greeting-content').append(data._embedded.employees[0].lastName);
    console.log(jqxhr);
  });
});