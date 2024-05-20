// Funcția pentru sortare ascendentă
function sortTableAsc(columnIndex) {
    sortTable(columnIndex, true);
}

// Funcția pentru sortare descendentă
function sortTableDesc(columnIndex) {
    sortTable(columnIndex, false);
}

// Funcția principală de sortare
function sortTable(columnIndex, ascending) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            var xValue = isNaN(parseInt(x.innerHTML)) ? x.innerHTML.toLowerCase() : parseInt(x.innerHTML);
            var yValue = isNaN(parseInt(y.innerHTML)) ? y.innerHTML.toLowerCase() : parseInt(y.innerHTML);
            if ((ascending && xValue > yValue) || (!ascending && xValue < yValue)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
