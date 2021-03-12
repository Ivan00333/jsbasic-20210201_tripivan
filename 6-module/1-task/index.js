/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("table");
    this.elem.innerHTML = `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
  </thead>`;

    this.rows = rows;
    let row = this.rows
      .map(function (item) {
        return `
    <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td><button>X</button></td>
    </tr>`;
      })
      .join("");

    this.elem.innerHTML += `
   <tbody>
    ${row}
   </tbody>`;

   this.elem.addEventListener('click', (event) => {
    if (event.target.tagName != 'BUTTON') 
      return;
    
    let tr = event.target.closest('tr');
    tr.remove();
  });
}
}