const tableContainer = document.getElementById('table-container')

data.forEach(el => {
    tableContainer.insertAdjacentHTML('beforeend', getTemplate(el))
});



function getTemplate(obj) {
    return `
    <table class="table table-bordered">
        <h3>${obj.weekDay}</h3>
        <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Пара</th>
                <th scope="col">Преподаватель</th>
                <th scope="col">Аудитория</th>
            </tr>
        </thead>
        <tbody>
        ${
           obj.classes.map(el => {
            return `
            <tr>
                <th scope="row">${el.id}</th>
                <td>${el.title}</td>
                <td>${el.teacher}</td>
                <td>${el.classRoom}</td>
            </tr>
            `
           }).join('')
        }
        </tbody>
    </table>
    `
}