$(document).ready(function () {
  $("#datepicker").datepicker({
    firstDay: 1,
    showButtonPanel: true,
    currentText: "Today",
    closeText: "Close",
    constrainInput: true,
    defaultDate: 3,
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd/mm/yy",
  });

});

$(document).ready(function () {
  $(".popup-btn").click(function () {
    $(".popup")
      .css("display", "flex")
      .css("animation", "popup-bg 1s")
      .css("animation-interaction-count", "1");
    $(".popup-wrap")
      .css("animation", "popup 1s")
      .css("animation-iteration-count", "1");
  });

  $(".close").click(function () {
    $(".popup-wrap")
      .css("animation", "popup 1s")
      .css("animation-iteration-count", "1");
    $(".popup").delay(500).fadeOut();
  });
});

$(document).ready(function(){
  function Book(mechanic, service, location){
    this.mechanic = mechanic;
    this.service = service;
    this.location = location;
  }

  Book.prototype.getBookingPrice = function(){
    return this.getMechanicPrice() + this.getLocationPrice();
  };

  Book.prototype.getMechanicPrice = function(){
    if (this.service === "Fixing Bike") {
        return 500;
      }else if(this.service === "Repair Tires") {
        return 300;
      }else if(this.service === "Washing Bike"){
        return 150;
      }else if(this.service === "Tire Pressure"){
        return 50;
      }else if(this.service === "Remove Grease") {
        return 200;
      }else{
        return 2000;
      }
    };
  Book.prototype.getLocationPrice = function(){
    if (this.location === "inhouse"){
      return 0;
    }else{
      return 200;
    }
  };
  
  $(".submit-btn").click(function(e){
    e.preventDefault();
    var mechanicPrice = $("#service_id").val();
    var locationPrice = $("#service_id3").val();
    var servicePrice = $("#service_id2").val();
    var myName = $(".your_name").val();
    //var currentDate = $("#newDate").val()
    var myLocation = $("#my-loc").val();
  
   var book  = new Book(mechanicPrice, servicePrice, locationPrice);

    document.querySelector(".display").innerHTML = "Hello "  + myName + ", we have recieved your " + servicePrice + ". Your mechanic, " + mechanicPrice + " has been notified. Your total amount is Kshs." + book.getBookingPrice();
  });

  
});
//<!-- "Hi Andale, we have received your booking services. your mechanic has been notified. your total amount is 5000"  -->
