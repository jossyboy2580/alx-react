import $ from "jquery";

$('document').ready(() => {
  const p1 = $("<p>").text("Holberton Dashboard");
  const p2 = $("<p>").text("Dashboard data for the students");
  const btn = $("<button>").text("Click here to get staarted");
  const p3 = $("<p>").addAttribute("id", "count");
  const p4 = $("<p>").text("Copyright - Holberton School");

  $("body").append(p1, p2, btn, p3, p4);

  const count = 0;

  function updateCounter() {
    $(btn).onClick((e) => {
      e.preventDefault();
      count++;
      $(p3).text(`${count} clicks on the button`);
    });
  }
});
