$(document).ready(function () {
  
  // Calculate when button is clicked
  $("#calcBtn").click(function () {
    calculateGST();
  });

  // Calculate when amount changes (keyup)
  $("#amount").keyup(function () {
    calculateGST();
  });

  // Calculate when GST dropdown changes
  $("#gst").change(function () {
    calculateGST();
  });

  function calculateGST() {
    let amount = parseFloat($("#amount").val()) || 0;
    let gstRate = parseFloat($("#gst").val());

    let gstAmount = (amount * gstRate) / 100;
    let totalAmount = amount + gstAmount;

    $("#actual").text(amount.toFixed(2));
    $("#gstAmt").text(gstAmount.toFixed(2));
    $("#total").text(totalAmount.toFixed(2));
  }
});
