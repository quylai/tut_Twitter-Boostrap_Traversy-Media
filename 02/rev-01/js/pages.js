
// add editing tools onto modal (from {Create Content / Add Page})
CKEDITOR.replace("editor1");

// delete bnt functionality
document.querySelector("#pages-list").addEventListener("click", e => {
  let pagesList = e.target.parentNode.parentNode.parentNode;
  pagesList.removeChild(e.target.parentNode.parentNode);
});


//---------------------------------------------------------------------------------
