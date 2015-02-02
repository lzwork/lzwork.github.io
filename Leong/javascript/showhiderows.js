  function showRows(tableID) {
	var minNumberOfRows = 3;
	if (tableID == "workTable") {
	minNumberOfRows = 6;
	}
    var showDisplay = 'block';
    var hideDisplay = 'none';
    var showButtonID = tableID + 'ShowButton';
    var hideButtonID = tableID + 'HideButton';
    //alert(showButtonID);
    var table = document.getElementById(tableID);
	var showButton = document.getElementById(showButtonID);
	var hideButton = document.getElementById(hideButtonID);
    var rows = table.getElementsByTagName('tr');
    for (var row=0; row<rows.length;row++) {
    if (row < minNumberOfRows) {
        rows[row].style.display = showDisplay;
    } else {
        rows[row].style.display = showDisplay;
    }
    }
    showButton.style.display = hideDisplay;
    hideButton.style.display = showDisplay;
  }
  
 function hideRows(tableID) {
	var minNumberOfRows = 3;
	if (tableID == "workTable") {
	minNumberOfRows = 6;
	}
	var showDisplay = 'block';
    var hideDisplay = 'none';
    var showButtonID = tableID + 'ShowButton';
    var hideButtonID = tableID + 'HideButton';
    var table = document.getElementById(tableID);
	var showButton = document.getElementById(showButtonID);
	var hideButton = document.getElementById(hideButtonID);
    var rows = table.getElementsByTagName('tr');
    for (var row=0; row<rows.length;row++) {
    if (row <= minNumberOfRows) {
        rows[row].style.display = showDisplay;
    } else {
        rows[row].style.display = hideDisplay;
    }
    }
    showButton.style.display = showDisplay;
    hideButton.style.display = hideDisplay;
  }
