document.addEventListener("DOMContentLoaded", function () {
  const menu = [
    {
      id: 1,
      employees: "Tiger Nixon",
      position: "AI ML",
    },
    {
      id: 2,
      employees: "Sonya Frost",
      position: "AI ML",
    },
    {
      id: 3,
      employees: "Jena Gaines",
      position: "Backend",
    },
    {
      id: 4,
      employees: "Quinn Flynn",
      position: "Backend",
    },
    {
      id: 5,
      employees: "Charde Marshall",
      position: "UI UX",
    },
    {
      id: 6,
      employees: "Haley Kennedy",
      position: "UI UX",
    },
    {
      id: 7,
      employees: "Tatyana Fitzpatrick",
      position: "Regional Director",
    },
  ];

  const employeeList = document.getElementById("employee-list");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function displayEmployees(menuItems) {
    let displayMenu = menuItems
      .map(function (item) {
        return `<tr>
                        <th scope="row">${item.employees}</th>
                        <td>${item.position}</td>
                    </tr>`;
      })
      .join("");

    employeeList.innerHTML = displayMenu;
  }

  function filterEmployees(position) {
    if (position === "all") {
      displayEmployees(menu);
    } else {
      const filteredEmployees = menu.filter(function (item) {
        return item.position === position;
      });
      displayEmployees(filteredEmployees);
    }
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const position = this.dataset.id;
      filterEmployees(position);
    });
  });

  // Initial display of all employees
  displayEmployees(menu);
});
