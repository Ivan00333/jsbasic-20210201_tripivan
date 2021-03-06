function highlight(table) {
  let tbodyRows = table.querySelector("tbody");

  statusCell();
  genderCell();
  AgeCell();

  function statusCell() {
    for (let row of tbodyRows.rows) {
      if (!row.cells[3].getAttribute("data-available")) {
        row.cells[3].setAttribute("class", "hidden");
      }

      if (row.cells[3].getAttribute("data-available") === "true") {
        row.cells[3].classList.add("available");
      }

      if (row.cells[3].getAttribute("data-available") === "false") {
        row.cells[3].classList.add("unavailable");
      }
    }
  }

  function genderCell() {
    for (let row of tbodyRows.rows) {
      if (row.cells[2].innerHTML === "m") {
        row.cells[2].classList.add("male");
      }
      if (row.cells[2].innerHTML === "f") {
        row.cells[2].classList.add("female");
      }
    }
  }

  function AgeCell() {
    for (let row of tbodyRows.rows) {
      if (+row.cells[1].innerHTML < 18) {
        row.cells[1].style.textDecoration = "line-through";
      }
    }
  }
}
