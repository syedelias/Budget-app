let budget = document.querySelector("#amount");
let budgetDisplay = document.querySelector("#budget");
let expenseDisplay = document.querySelector("#expense");
let BalDisplay = document.getElementById("balance");
let budgetBtn = document.querySelector(".btn1");
let expenseName = document.querySelector("#expName");
let expenseAmount = document.querySelector("#expAmount");
let expenseBtn = document.querySelector(".btn2");
let expTable = document.querySelector(".view-tab");
let editBtn = document.querySelector(".edit");
let deleteBtn = document.querySelector(".delete");

budgetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  budgetDisplay.textContent = budget.value;
  BalDisplay.textContent = budget.value;
});

expenseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  expenseDisplay.textContent = expenseAmount.value;
  let tableData = document.createElement("tr");
  tableData.innerHTML = addExpense(expenseName.value, expenseAmount.value);
  expTable.appendChild(tableData);
  let balance = Number(budgetDisplay.textContent - expenseDisplay.textContent);
  BalDisplay.textContent = balance;
});
let value = balance;
function addExpense(expName, expValue) {
  return `
      <td class="exp-title">${expName}</td>
      <td class="exp-value">${expValue}</td>
      <td class="buttons">
        <i
          class="fa-sharp fa-solid fa-pen-to-square edit btn btn-primary"
        ></i>
        <i class="fa-solid fa-trash delete btn btn-danger"></i>
      </td>
    `;
}
