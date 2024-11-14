let colorTitles = document.getElementsByTagName("h3")
let colorGroups = document.getElementsByTagName("tbody")
let colors = {}
Array.from(colorTitles).forEach((title, i) => {
    const colorId = title.innerHTML.replace(/\s+/g, '-').toLowerCase()
    colors[`${colorId}`] = {}
    const rows = colorGroups[i].querySelectorAll('tbody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td')
        if (cells.length <= 1) return
        let colorTd = cells[cells.length - 2]
        let idTd = cells[cells.length - 1]
        const idc = idTd.children[0].innerText
        const token = idc.toString().match(/\d+/)[0]
        const colorCode = colorTd.querySelectorAll('code')[1].innerText
        colors[`${colorId}`][token] = colorCode
    })
});
console.log(colors)