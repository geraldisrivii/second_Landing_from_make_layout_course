// Define elements
let list = document.querySelector(".grid-box")
let button = document.querySelector('.button')
// Append element to list
for (let index = 0; index < 4; index++) {
    let element = list.firstChild.cloneNode(true)
    element.firstChild.src = `icons/Vector-${index}.svg`
    console.log(element.firstChild.src)
    list.append(element)
}
let items = list.children
let count_elems = items.length 
let row_heights = getComputedStyle(list).gridTemplateRows.split(" ")
let first_height = row_heights[0]
for (let height of row_heights) {
  height = first_height
}
console.log(first_height)
list.style.gridTemplateRows;
let count_row = getComputedStyle(list).gridTemplateRows.split(" ").length
let count_column = getComputedStyle(list).gridTemplateColumns.split(" ").length
let positions = (count_row * count_column)
let diference = positions - count_elems
for (let index = count_elems - diference; index < count_elems; index++) {
  items[index].style.gridColumn = "span 2"
}