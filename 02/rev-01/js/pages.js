
// add editing tools onto modal (from {Create Content / Add Page})
CKEDITOR.replace("editor1");

// delete bnt functionality
document.querySelector("#pages-list").addEventListener("click", e => {

  if(e.target.classList.contains("btn-danger")) {
    let pagesList = e.target.parentNode.parentNode.parentNode;
    pagesList.removeChild(e.target.parentNode.parentNode);
  }
});

// ----------------------------------------------------------------
// responsive search functionality

// latch to DOM and trigger search function when typing
let filterInput = document.getElementById("searching");
filterInput.addEventListener("keyup", filterPages);

// traversing thru list
function filterPages(){

  // turn input value to lowercase
  let filterValue = document.getElementById("searching").value.toLowerCase();

  // gather all element of page-list titles
  let pagesList = document.getElementById('pages-list')
                          .querySelectorAll("td.page-title");

  // iterate and hide those NOT match
  for(const el of pagesList) {
    if(el.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      el.parentNode.style.display = "";
    } else {
      el.parentNode.style.display = "none";
    }
  }
}
// ----------------------------------------------------------------

//---------------------------------------------------------------------------------
