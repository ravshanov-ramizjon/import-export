function User(item) {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");

    idCell.textContent = item.id;
    nameCell.textContent = item.name;
    emailCell.textContent = item.email;
    ageCell.textContent = item.age;

    row.append(idCell, ageCell, nameCell, emailCell)

    return row
}


export { User }