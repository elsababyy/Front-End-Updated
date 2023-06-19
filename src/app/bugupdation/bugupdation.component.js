let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})


// Get all delete buttons on the page
var deleteButtons = document.querySelectorAll(".deleteButton");

// Attach event listener to each delete button
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var item = button.parentElement;
    var confirmationBox = item.querySelector(".confirmationBox");

    // Show the confirmation box
    confirmationBox.style.display = "block";

    // Attach event listener to confirm delete button
    var confirmDelete = confirmationBox.querySelector(".confirmDelete");
    confirmDelete.addEventListener("click", function() {
      // Perform the delete action here
      item.remove();
      console.log("Item deleted");
      confirmationBox.style.display = "none"; // Hide the confirmation box
    });

    // Attach event listener to cancel delete button
    var cancelDelete = confirmationBox.querySelector(".cancelDelete");
    cancelDelete.addEventListener("click", function() {
      confirmationBox.style.display = "none"; // Hide the confirmation box
    });
  });
});




