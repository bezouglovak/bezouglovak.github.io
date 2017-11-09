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

  //PROJECT 1 MODAL
  // Get the modal
  var modal = document.getElementById('modal-prj-1');

  // Get the button that opens the modal
  var btn = document.getElementById("proj-1-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //PROJECT 2 MODAL
  // Get the modal
  var modal = document.getElementById('modal-prj-2');

  // Get the button that opens the modal
  var btn = document.getElementById("proj-2-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //PROJECT 3 MODAL
  // Get the modal
  var modal = document.getElementById('modal-prj-3');

  // Get the button that opens the modal
  var btn = document.getElementById("proj-3-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //PROJECT 4 MODAL
  // Get the modal
  var modal = document.getElementById('modal-prj-4');

  // Get the button that opens the modal
  var btn = document.getElementById("proj-4-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //PROJECT 5 MODAL
  // Get the modal
  var modal = document.getElementById('modal-prj-5');

  // Get the button that opens the modal
  var btn = document.getElementById("proj-5-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //PROJECT 5 MODAL
  // Get the modal
  var modal = document.getElementById('modal-prj-6');

  // Get the button that opens the modal
  var btn = document.getElementById("proj-6-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }


  /* SLICK CAROUSEL */

  // $(document).ready(function(){
  // $('.carousel').slick({
  //   arrows: true,
  //   adaptiveHeight: true,
  //   autoplay: false,
  //   pauseOnHover: false,
  //   pauseOnFocus: false
  // });

});
