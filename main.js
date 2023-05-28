var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".vertical-bar",
});

var listItems = document.querySelectorAll(".vertical-bar ul li");
listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var itemId = item.querySelector("a").getAttribute("href").substring(1);
    var contents = document.querySelectorAll(".main-content > div");
    contents.forEach(function (content) {
      if (content.getAttribute("id") === itemId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
    listItems.forEach(function (item) {
      item.querySelector("a").classList.remove("active");
    });
    item.querySelector("a").classList.add("active");
  });
});

const toggleButton = document.querySelector(".toggle-vertical-bar");
const verticalBar = document.querySelector(".vertical-bar");

toggleButton.addEventListener("click", () => {
  verticalBar.classList.toggle("show");
  toggleButton.classList.toggle("expanded");
  if (toggleButton.classList.contains("expanded")) {
    toggleButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
  } else {
    toggleButton.innerHTML = '<i class="bi bi-chevron-right"></i>';
  }
});

window.addEventListener("scroll", function () {
  var scroll = window.pageYOffset;
  toggleButton.style.top = scroll + 56 + "px";
  if (toggleButton.classList.contains("expanded")) {
    toggleButton.style.transition = "none";
  } else {
    toggleButton.style.transition = "all 0.3s ease";
  }
});

const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", () => {
  if (navbarToggler.getAttribute("aria-expanded") === "true") {
    toggleButton.style.display = "none";
  } else {
    setTimeout(() => {
      toggleButton.style.display = "block";
    }, 300);
  }
});

function toggleTable(tableId) {
  const table = document.getElementById(tableId);
  for (let i = 4; i < table.rows.length; i++) {
    if (i <= 10) {
      if (table.rows[i].style.display === "none") {
        table.rows[i].style.display = "";
      } else {
        table.rows[i].style.display = "none";
      }
    } else {
      table.rows[i].style.display = "none";
    }
  }
}

function toggleButtonText(button) {
  if (button.innerHTML === "View All") {
    button.innerHTML = "View Less";
  } else {
    button.innerHTML = "View All";
  }
}

const recentTable = document.getElementById("recentTable");
for (let i = 4; i < recentTable.rows.length; i++) {
  recentTable.rows[i].style.display = "none";
}

const collectionTable = document.getElementById("collectionTable");
for (let i = 4; i < collectionTable.rows.length; i++) {
  collectionTable.rows[i].style.display = "none";
}

const dateSelector = document.getElementById("dateSelector");
const reportTable = document.getElementById('reportTable');

dateSelector.addEventListener("change", function () {
  const selectedDate = dateSelector.value;
  for (let i = 1; i < reportTable.rows.length; i++) {
    const row = reportTable.rows[i];
    const rowDate = row.cells[0].innerText;
    if (rowDate === selectedDate) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
    if (selectedDate === "") {
      row.style.display = "";
    }
  }
});

function calculateCost() {
  if (document.getElementById("weight").value === "") {
    document.getElementById("cost").value = 0;
    return;
  }
  var weight = parseFloat(document.getElementById("weight").value);
  var unit = document.getElementById("unit").value;
  var totalWeight = unit === "lb" ? weight * 0.453592 : weight;
  var cost = 0;
  var laundryType = document.getElementById("laundry-type").value;
  switch (laundryType) {
    case "washing":
      cost = totalWeight * 500;
      break;
    case "drying":
      cost = totalWeight * 300;
      break;
    case "ironing":
      cost = totalWeight * 200;
      break;
    case "dry-cleaning":
      cost = totalWeight * 1000;
      break;
  }
  document.getElementById("cost").value = cost.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}