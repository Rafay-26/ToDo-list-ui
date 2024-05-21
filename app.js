var getUl = document.querySelector("#Ul")
var getInp = document.querySelector("#inp")

function addTodo() {
    var getInp = document.querySelector("#inp")
    var createli = document.createElement("li")
    var liText = document.createTextNode(getInp.value)
    createli.appendChild(liText)
    getUl.appendChild(createli)
    getInp.value = ''

    var ediBtn = document.createElement("button")
    var ediText = document.createTextNode("EDIT")
    ediBtn.appendChild(ediText)
    createli.appendChild(ediBtn)
    ediBtn.setAttribute('onclick', 'ediList(this)')


    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    createli.appendChild(delBtn)
    delBtn.setAttribute('onclick', 'delList(this)')

}
function delList(e) {
    e.parentNode.remove()
}
function ediList(e) {

    var getVal = prompt("Enter New List" ,  e.parentNode.firstChild.textContent)
    e.parentNode.firstChild.textContent = getVal
}


function delall() {
    getUl.innerHTML = ''
}


