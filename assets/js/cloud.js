
 

//Initialize Firebase
var config = {
  apiKey: "AIzaSyAwSszrGJ-J62xrI0PRBRjypSoHFmtmQho",
  authDomain: "test-7f362.firebaseapp.com",
  databaseURL: "https://test-7f362.firebaseio.com",
  projectId: "test-7f362",
  storageBucket: "test-7f362.appspot.com",
  messagingSenderId: "1011145892760"
};
firebase.initializeApp(config);

  var database = firebase.database();

  // creating event to add users event to firebase
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  // Store everything into a variable.
  var eventName = childSnapshot.val().name;
  var eventDate = childSnapshot.val().date;
  var eventDuration = childSnapshot.val().duration;
  var eventLocationStreet = childSnapshot.val().locationStreet;
  var eventLocationCity = childSnapshot.val().locationCity;
  var eventLocationState = childSnapshot.val().locationState;
  var eventLocationZip = childSnapshot.val().locationZip;
  var eventDescription = childSnapshot.val().description;

  // descriptionArray.push(eventDescription);
  //Put the data into the table on the app
  $("#meeting-table").append("<tr data-description='" + eventDescription +"'><td>" + eventName + "</td><td>" + eventDate + "</td><td>" +
  eventDuration + "</td><td>" + eventLocationStreet + "</td><td>" + "<button class='expander' city=" + eventLocationCity + " state=" + eventLocationState + ">...</button></td>");

  var rowNum = $("tr:last-of-type").index();
  $("tr:last-of-type").attr('id', "row"+rowNum);
});

  // button to create a new meeting
  $("#add-event").on("click", function(event) {
  event.preventDefault();

  // get user input to put into object
  var eventName = $("#event-name").val().trim();
  var eventDate = $("#date").val().trim();
  var eventDuration = $("#duration").val().trim();
  var eventLocationStreet = $("#street-address").val().trim();
  var eventLocationCity = $("#city").val().trim();
  var eventLocationState = $("#state").val().trim();
  var eventLocationZip = $("#zip").val().trim();
  var eventDescription = $("#description").val().trim();

  // Validate that the forms are filled out
  if ($("#event-name").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#date").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#duration").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#street-address").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#city").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#state").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#zip").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }
  if ($("#description").val().trim() === ""){
    $("#add-form").append("<strong>All fields are required.</strong>");
    return false;
  }


  // object to hold our event info
  var newEvent = {
    name: eventName,
    date: eventDate,
    duration: eventDuration,
    locationStreet: eventLocationStreet,
    locationCity: eventLocationCity,
    locationState: eventLocationState,
    locationZip: eventLocationZip,
    description: eventDescription
  };

  // Uploads event to database
  database.ref().push(newEvent);

  // Clears all of the text-boxes
  $("#event-name").val("");
  $("#date").val("");
  $("#duration").val("");
  $("#street-address").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zip").val("");
  $("#description").val("");

  $("#add-form").slideUp(600);

  console.log(descriptionArray);
});
