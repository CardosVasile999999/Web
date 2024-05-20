document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");
    const headers = table.querySelectorAll("thead th");

    headers.forEach((header, index) => {
        if (!isNaN(parseFloat(header.textContent))) {
            header.classList.add("sortable");
            header.setAttribute("data-column", index);
            header.addEventListener("click", () => {
                sortTable(index);
            });
        }
    });

    const sortDirection = Array.from(headers).map(() => "none"); // Vector pentru starea sortării pentru fiecare coloană

    function sortTable(columnIndex) {
        const rows = Array.from(table.querySelectorAll("tbody tr"));

        rows.sort((rowA, rowB) => {
            let valueA = rowA.cells[columnIndex].textContent.trim();
            let valueB = rowB.cells[columnIndex].textContent.trim();

            // Convertim valorile în numere pentru sortare numerică
            valueA = parseFloat(valueA) || 0;
            valueB = parseFloat(valueB) || 0;

            // Sortare în funcție de direcția sortării curente
            if (sortDirection[columnIndex] === "asc") {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        });

        table.querySelector("tbody").innerHTML = "";
        rows.forEach((row) => {
            table.querySelector("tbody").appendChild(row);
        });

        // Inversăm direcția sortării și actualizăm indicatorul de direcție
        sortDirection[columnIndex] = sortDirection[columnIndex] === "asc" ? "desc" : "asc";
        headers.forEach((header, index) => {
            document.getElementById(`sortDirection${index}`).textContent = index === columnIndex ? sortDirection[columnIndex] === "asc" ? "▼" : "▲" : "▼";
        });
    }
});
