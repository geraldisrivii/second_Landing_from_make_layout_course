// Define elements
let list = document.querySelector(".grid-box")
let header = document.querySelector('.button')
// Append element to list
for (let index = 0; index < 4; index++) {
    let element = list.firstChild.cloneNode(true)
    element.firstChild.src = `icons/Vector-${index}.svg`
    console.log(element.firstChild.src)
    list.append(element)
}
let quantity_of_columns = getComputedStyle(list).gridTemplateColumns.split(" ").length
if(list.children.length > 4 & quantity_of_columns % 2 == 0 & quantity_of_columns > 3) {
  for (const item of list.children) {
    item.style.gridColumn = "span 2"
  }
}
console.log(quantity_of_columns)
if(list.children.length % 2 == 0 & quantity_of_columns % 2 > 0){
    list.lastChild.style.gridColumn = "span 2"
    list.lastChild.previousSibling.style.gridColumn = "span 2"
}