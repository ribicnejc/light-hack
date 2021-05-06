/* DEFINITIONS */
let imgs

var fs = import('fs');
imgs = fs.readFileSync('./imgs.log').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}

console.log(imgs)

const BREAKPOINT = 4
let idx = 0
let rowIdx = 0
rootContainer = document.getElementById("container")

const dummyImgs = [
  "-BnUKtXvBVQ.jpg",
  "-TMwLjUcT7w.jpg",
  "0DxLnBmuAyo.jpg",
  "2o4V1Snm_iM.jpg",
  "4LurEHsc1uk.jpg",
  "4oomuYoJpHs.jpg",
  "8EFgHlLvFzk.jpg",
  "8vzh-Hyp8_0.jpg",
  "AaGLXf83oq4.jpg",
  "I3IQBuM9bXs.jpg",
  "JxtaOhElaBQ.jpg",
  "KCcn24_zBaw.jpg",
  "KJ7nnJ_y5Rg.jpg",
  "LoIS8WcUn-Y.jpg",
  "SJeL4eK7OJg.jpg",
  "_YD2bIycDlw.jpg",
  "bM-QfWfFerc.jpg",
  "c6TTz0n0i7g.jpg",
  "kbTd_BVrZdA.jpg",
  "labcNC1XseQ.jpg",
  "oEeZunzrA4k.jpg",
  "qRBcdv-2COE.jpg",
  "qckXUZefhoU.jpg",
  "rlJG8NIjfZs.jpg",
  "vZWK2u7ZJuA.jpg",
  "vrIjyLiZCSU.jpg",
  "vxMX-uG5-us.jpg",
  "xB9dCpf5wI0.jpg",
  "xV8GR_fi_3g.jpg",
  "xp7O_cR6lhw.jpg",
];


/* Non pure functions */

const createRow = ( row ) => {
  if (idx === 0){
    let element = document.createElement("div")
    element.className = "row"
    rootContainer.appendChild(element)
    return element
  }
  return row

}


const createColumn = ( daddy  ) => {
  let element = document.createElement("div")
  element.className = "col"
  daddy.appendChild(element)
  return element
}

const createAnchor = ( daddy  ) => {

  let element = document.createElement("a")
  element.setAttribute("href", `./imgs/${imgs[rowIdx*4+idx]}`)
  daddy.appendChild(element)
  return element
}

const createImgFromIdx = ( daddy  ) => {
  let element = document.createElement("img")
  element.setAttribute("src", `./imgs/${imgs[rowIdx*4+idx]}`)
  element.setAttribute("id", rowIdx*4+idx)
  //element.addEventListener("click", onClicked)
  daddy.appendChild(element)
}


 /* CORE */
console.log(rootContainer)
let row = null
imgs.forEach((img) => {
  // console.log(`idx = ${idx}, rowIdx = ${rowIdx}`)
  let elt;
  row = createRow(row)
  elt = createColumn(row)
  elt = createAnchor(elt)
  elt = createImgFromIdx(elt)

  idx = (++idx) % 4
  if (idx  === 0){
    rowIdx++
  }
  
})

