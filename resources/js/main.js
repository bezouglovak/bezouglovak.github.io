$(document).ready(function() {
  $('.btn-nav').click(function() {
    $('.topbar').toggleClass('active'),
    $('.btn-nav').toggleClass('btn-active');
  })

  //PROGRESS BAR

  var percentageComplete = 0.9;
  var strokeDashOffsetValue = 100 - (percentageComplete * 77);
  var progressBar = $("#ps-circle .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

  var percentageComplete = 0.8;
  var strokeDashOffsetValue = 100 - (percentageComplete * 80);
  var progressBar = $("#il-circle .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

  var percentageComplete = 0.7;
  var strokeDashOffsetValue = 100 - (percentageComplete * 75);
  var progressBar = $("#ae-circle .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

  var percentageComplete = 0.65;
  var strokeDashOffsetValue = 100 - (percentageComplete * 75);
  var progressBar = $("#id-circle .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

  var percentageComplete = 0.85;
  var strokeDashOffsetValue = 100 - (percentageComplete * 79);
  var progressBar = $("#hc-circle .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

  var percentageComplete = 0.7;
  var strokeDashOffsetValue = 100 - (percentageComplete * 75);
  var progressBar = $("#ja-circle .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);


});
