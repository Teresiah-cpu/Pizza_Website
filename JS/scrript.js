
$(document).ready(function() {

  $("table").hide();
  $(".hidden-buttons").hide();
  $(".order-details").hide();
  $(".button.yes").hide();
  $(".button.no").hide();
  $(".order-details h4").hide();

  $('.button.order').click(function() {
    var sizeOfPizza = $(".pizzasize option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

//     $("table").show();
//     $(".hidden-buttons").show();
//     $(".button.order").hide();

//     $("#size").html($(".pizzasize option:selected").text() + " - " + sizeOfPizza);
//     $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
//     $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
//     $("#total").html(total);

//     function Pizza(size, toppings, crust, total, orderNo) {
//       this.size = size;
//       this.toppings = toppings;
//       this.crust = crust;
//       this.total = total;
//       this.orderNo = orderNo;
//     }


//     $('.button.add-pizza').click(function() {
//       var sizeOfPizza = $(".pizzasize option:selected").val();
//       var toppingsOfPizza = $(".toppings option:selected").val();
//       var crustOfPizza = $(".crust option:selected").val();
//       var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
//       order = order + 1;
//       grandTotal = grandTotal + total;


//       var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

//       var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".pizzasize option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

//       $("#pizza-info").append(newRow);
//     });

//     $(".button.check-out").click(function() {
//       $(".button.add-pizza").hide();
//       $(".button.check-out").hide();
//       $(".order-details").show();
//       $(".button.yes").show();
//       $(".button.no").show();
//       $(".order-details .location").hide();
//       grandTotal = grandTotal + total;

//       $(".order-details h3 span").html(grandTotal);
//     });

//     $(".button.yes").click(function() {
//       $(".order-details h5").hide();
//       $(".button.yes").hide();
//       $(".button.no").hide();
//       $(".order-details .location").show();
//       $(".order-details h3 span").alert(grandTotal + 200);
      
//     });

//     $(".btn.no").click(function() {
//       $(".order-details h5").hide();
//       $(".button.yes").hide();
//       $(".button.no").hide();
//       $(".order-details .location").show();
//     });

//     $(".button.submit").click(function() {
//       var location = $(".order-details .location input").val();
//       $(".order-details h4").show();
//       $(".order-details .location").hide();
//       $(".order-details h4 span").html(location);
//     });

//   });

// });


