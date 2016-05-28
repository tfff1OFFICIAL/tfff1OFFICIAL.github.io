// No Disabled Menu Items are permitted.
// To use add 'onclick="menuSelected(<idofelement>);"'
// Requires JQuery
function menuSelected(idOfSender) {
    console.log("New Item to Select: " + idOfSender);
    //Set all to "list-group-item" - Affects entire page:        
    $("button.list-group-item").removeClass("active");
    console.log("All '.list-group-item' items deselected.");
    //Set one to selected:
    document.getElementById(idOfSender).setAttribute("class", "list-group-item active");
    console.log("Selection Successful!");
}