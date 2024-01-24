document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate inputs
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new table row
    const tableBody = document.getElementById('book-list');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${title}</td><td>${author}</td><td>${isbn}</td><td><span class="delete" onclick="deleteRow(this)">Delete</span></td>`;

    // Clear form inputs
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

function deleteRow(element) {
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
