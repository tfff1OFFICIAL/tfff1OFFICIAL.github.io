function databaseSelected(idOfSender) {
                console.log("New Database to Select: " + idOfSender);
                
                var PapersPast = document.getElementById("PapersPast");
                var AucklandLibraries = document.getElementById("AucklandLibraries");
                var NZOnScreen = document.getElementById("NZOnScreen");
                var IndexNZ = document.getElementById("IndexNZ");
                var EBSCO = document.getElementById("EBSCO");
                var DigitalNZ = document.getElementById("DIGITALNZ");
                var NZETC = document.getElementById("NZETC");
                
                if (document.getElementById(idOfSender).getAttribute("class") === "list-group-item") {
                    if (PapersPast.getAttribute("class") === "list-group-item disabled") {
                        console.log("PapersPast is disabled");
                    } else {
                        PapersPast.setAttribute("class", "list-group-item");
                    }
                    
                    if (AucklandLibraries.getAttribute("class") === "list-group-item disabled") {
                        console.log("Auckland Libraries is disabled");
                    } else {
                        AucklandLibraries.setAttribute("class", "list-group-item");
                    }
                    
                    if (NZOnScreen.getAttribute("class") === "list-group-item disabled") {
                        console.log("NZOnScreen is disabled");
                    } else {
                        NZOnScreen.setAttribute("class", "list-group-item");
                    }
                
                    if (IndexNZ.getAttribute("class") === "list-group-item disabled") {
                        console.log("IndexNZ is disabled");
                    } else {
                        IndexNZ.setAttribute("class", "list-group-item");
                    }
                    
                    if (EBSCO.getAttribute("class") === "list-group-item disabled") {
                        console.log("EBSCO is disabled");
                    } else {
                        EBSCO.setAttribute("class", "list-group-item");
                    }
                
                    if (DigitalNZ.getAttribute("class") === "list-group-item disabled") {
                        console.log("DigitalNZ is disabled");
                    } else {
                        DigitalNZ.setAttribute("class", "list-group-item");
                    }
                
                    if (NZETC.getAttribute("class") === "list-group-item disabled") {
                        console.log("NZETC is disabled");
                    }
                    
                    else {
                        NZETC.setAttribute("class", "list-group-item");
                    }
                    var toSelect = document.getElementById(idOfSender)
                    toSelect.setAttribute("class", "list-group-item active");
                    
                    idOfSenderSpaces = idOfSender.replace(/([A-Z])/g, ' $1').trim();
                    
                    document.getElementById('databaseName').innerHTML = idOfSenderSpaces;
                    
                    console.log("Selection Successful!");
                }
                else {
                    console.log("Didn't select, Element is either already selected or disabled.")
                }
    
    if (idOfSender == "PapersPast") {
        document.getElementById('searchTypeWarningMessage').innerHTML = "Search type is not available for Papers Past at the moment!";
        document.getElementById('dateWarningBox').style.display = "none";
        document.getElementById('searchType').style.display = "none";
        document.getElementById('dateRange').style.display = "block";
    }
    else if (idOfSender == "NZOnScreen") {
        document.getElementById('searchTypeWarningMessage').innerHTML = "Date Selection and Search type is not available for NZ On Screen at the moment!";
        document.getElementById('dateWarningMessage').innerHTML = "You can not select a date range for NZ On Screen.";
        document.getElementById('searchType').setAttribute('class', 'radio disabled');
        document.getElementById('dateRange').style.display = "none";
        
    }
    
            }