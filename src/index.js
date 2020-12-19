const listURL = 'http://localhost:3000/lists'


const listForm = document.getElementById('lists-container');
//listForm.addEventListener("submit", List.submitList)

const listSection = document.getElementById('all-lists');

function showList() {
  //when invoked will update the text content of list ul
  listSection.textContent = ``
  listSection.innerHTML = ``
}
document.addEventListener("DOMContentLoaded", () => {
// 
  // fetchLists()
  // renderList()
  // createListForm()
})

function fetchLists() {
  fetch(listURL)
  .then(resp => resp.json())
  .then(lists => {
      for(let list of lists){
console.log(list)      }
      this.renderList()
  })
}

function renderList() {
  const listForm =
  `
  <form id="list-form" method="get" class="clearfix mt-4">
      <div class="mb-3">
          <p>Enter Your List Name</p>
          <button type="submit" class="block float-right w-2/12"><i class="fa fa-plus p-4 z--1 bg-black-400"></i></button>
          <input type="text" name="name" class="block float-left w-10/12 p-3" id="list-name" placeholder="Enter List Name"><br>
      </div>
  </form><br></br>
  `
  const itemForm =
  `
  <form id="item-form" method="get" class="clearfix mt-4">
      <div class="mb-3">
      <p>Enter Your Item</p>
      <button type="submit" class="block float-right w-2/12"><i class="fa fa-plus p-4 z--1 bg-black-300"></i></button>
      <input type="text" name="name" class="block float-left w-10/12 p-3" id="item-content" placeholder="Enter Item"><br><br>
      <br>
      </div>
  </form>`;

  const listMarkup = 
  `
  <div data-id=${list.id}>
  <h3>${list.data.attributes.name}</h3>
  <li id="lists">${list.data.attributes? list.data.attributes.items.map(myItem).join("") : null} </li>
      ${itemForm}
  <a href="#" class="my-4 text-left"><i onclick="deleteList(${list.id})"class="fa fa-trash-alt">Delete List</i></a>
  </div>
  <br><br>
  `;

  deleteList.addEventListener("click", this.deleteList)
  itemForm.addEventListener("submit", Item.createItem)
  listForm.addEventListener("submit", this.createList)

  const listsUL = document.getElementById("all-lists")
  listsUL.appendChild(listMarkup)

  const listContainer = document.getElementById("lists-container")
  listContainer.appendChild(listForm)
  
  listForm.reset()
}

// read - fetch lists from index
// making a GET request when the browser loads

  function myItem(item) {
    return `
    <li>
    <ul id="lists" class="list-none">
        <li class="my-2 px-4 bg-green-200 grid grid-cols-12 sm:grid-cols-6">
        <br>  
          <div class="block float-left w-10/12 p-3">Available</div><br>
          <div>${item.content}</div><br>
          <div>
            <a href="#" class="my-4 text-left"><i onclick="deleteItem(${item.id})"class="fa fa-trash-alt"></i></a>
            <a href="#" class="my-4 text-left"><i onclick="editItem(${item.id})"class="fa fa-pencil-alt"></i></a>
          </div>
        <br>    
        </li>
    </ul>
    </li>
    `
    createItemForm()
  }

  function render(list) {
      const listMarkup = 
      `
        <div data-id=${list.id}>
          <h3>${list.attributes.name}</h3>
          <ul id="lists">${list.attributes.items.map(myItem).join("")}</ul>
          <a href="#" class="my-4 text-left"><i onclick="deleteList(${list.id})"class="fa fa-trash-alt">Delete List</i></a>        
          </div>
        <br><br>
        `;

        document.querySelector("#lists-container").innerHTML += listMarkup
      }
// create a list
function createListForm() {
  let listForm = document.getElementById("list-form")

  listForm.innerHTML +=
  `
  <form id="list-form" method="get" class="clearfix mt-4">
    <div class="mb-3">
      <p>Enter Your List Name</p>
      <button type="submit" class="block float-right w-2/12"><i class="fa fa-plus p-4 z--1 bg-black-400"></i></button>
      <input type="text" name="name" class="block float-left w-10/12 p-3" id="list-name" placeholder="Enter List Name"><br>
    </div>
  </form><br>
  `

  listForm.addEventListener("submit", (e) => {
      listFormHandler(e); 
      e.preventDefault()
  
    })


}

function fetchLists(name) {
  const bodyData = {
    name: name
  }
  
  const configObj = {
    method: "POST",
    headers:{
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  }
  
  fetch(listURL, configObj)
  .then(resp => {
    return resp.json()})
    
  .then(list => {
    const listMarkup = 
    `
    <div data-id=${list.id}>
      <h3>${list.data.attributes.name}</h3>
      <ul id="lists">${list.data.attributes? list.data.attributes.items.map(myItem).join("") : null} </ul>
          ${itemMarkup}
      <a href="#" class="my-4 text-left"><i onclick="deleteList(${list.id})"class="fa fa-trash-alt">Delete List</i></a>
    </div>
  <br><br>
    `

    document.querySelector("#lists-container").innerHTML += listMarkup;
  })
}
// submit list
function listFormHandler(e) {
  e.preventDefault();
  const name = document.querySelector("#list-name").value
  listPostFetch(name)
}

const itemForm =
    `
      <form id="item-form" method="get" class="clearfix mt-4">
          <div class="mb-3">
            <p>Enter Your Item</p>
            <button type="submit" class="block float-right w-2/12"><i class="fa fa-plus p-4 z--1 bg-black-300"></i></button>
            <input type="text" name="name" class="block float-left w-10/12 p-3" id="item-content" placeholder="Enter Item"><br><br>
      <br>
          </div>
      </form>
    `;
function createItemForm() {
  document.querySelector("#items-container").innerHTML += itemForm

  itemForm.addEventListener("submit", (e) => {
    console.log(e)
    itemFormHandler(e);
    e.preventDefault()
    
  })

}

function itemFormHandler(e) {
  e.preventDefault();
  console.log(e)
  const content = document.querySelector("#item-content").value;
  const listInput = document.querySelector("#list-selection").value;
  const listID = parseInt(listInput)
  itemPostFetch(content, listID)
}

function itemPostFetch(item_content, list_id) {
  const bodyData = {
    content: item_content,
    list_id: list_id
  }

  const configObj = {
    method: "POST",
    headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  }

  fetch(itemURL, configObj)
  console.log(itemURL)
  .then(resp => {
    return resp.json()})

  .then(item => {
    const itemMarkup = 
    `
    <div data-id=${item.id}>
      <h3>${item.attributes.content}</h3>
      <a href="#" class="my-4 text-left"><i onclick="deleteList(${list.id})"class="fa fa-trash-alt">Delete List</i></a>
      <a href="#" class="my-4 text-left"><i onclick="editList(${list.id})"class="fa fa-pencil-alt">Edit List</i></a>
    </div>
  <br><br>
    `

    document.querySelector("#items-container").appendChild(itemMarkup);
  })
}

function deleteList(id) {
  let listId = parseInt(event.target.dataset.id)

  fetch(`${listURL}/${listId}`, {
      method: "DELETE"
  })

  this.location.reload()
}

function editList() {

}

function editList() {
  
}

function deleteItem(id) {
  //let itemId = parseInt(event.target.dataset.id)

  fetch(`${itemURL}/${id}`, {
      method: "DELETE"
  })

  this.location.reload()
}