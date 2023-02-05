let list = document.querySelector(".grid-box")
let header = document.querySelector('.button')
let property = "change"
console.log(header.hasAttribute(property) ? header.getAttribute(property) : "Propery isn't existing")
for (let index = 0; index < 2; index++) {
    let element = list.firstChild.cloneNode(true)
    element.firstChild.src = `icons/Vector-${index}.svg`
    console.log(element.firstChild.src)
    list.append(element)
}
let width = window.innerWidth
for (const item of list.children){
  item.classList.add('grid-box-element_span_2')
}
let quantity_of_columns = getComputedStyle(list).gridTemplateColumns.split(" ").length
console.log(quantity_of_columns)
if(list.children.length % 2 == 0 & quantity_of_columns % 2 > 0){
    list.lastChild.style.gridColumn = "span 2"
    list.lastChild.previousSibling.style.gridColumn = "span 2"
}