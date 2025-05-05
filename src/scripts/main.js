'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cells = row.cells;
  const positionCell = cells[1].cloneNode(true);

  row.insertBefore(positionCell, cells[4]);
}
