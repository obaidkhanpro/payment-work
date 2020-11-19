"use strict";

$(document).ready(function () {
  $(".section-pay")[0].style.display = "none";
  $('input[name="intervaltype"]').click(function () {
    $(this).tab('show');
    $(this).removeClass('active');
  });
  $('.filter-icon').click(function () {
    $('.profile-nav').toggle();
  });
  $('.search-icon').click(function () {
    $('.form-search').toggle();
  });
});

function payment_display() {
  $("#buy-now-button").html("Continue");
  $("#buy-now-button").click(show_popup);
  document.getElementsByClassName("course-content")[0].style.display = "none";
  $(".course-payments")[0].style.display = "flex";
  console.log("HI");
  $("#buy-now-button").html("Continue");
  $(".section-pay")[0].style.display = "block";
  document.getElementsByClassName('course-content')[0].style.display = 'none';
}

$(document).ready(function () {
  $(".course-payments")[0].style.display = "none";
  $('input[name="intervaltype"]').click(function () {
    $(this).tab("show");
    $(this).removeClass("active");
  });
});

function show_popup() {
  document.getElementsByClassName("payment-confirmation-popup")[0].style.display = "block";
}

function close_popup() {
  document.getElementsByClassName("payment-confirmation-popup")[0].style.display = "none";
}