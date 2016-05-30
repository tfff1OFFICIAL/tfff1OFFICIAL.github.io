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

                    document.getElementById(idOfSender).setAttribute("class", "list-group-item active");
                    console.log("Selection Successful!");
                }
                else {
                    console.log("Didn't select, Element is either already selected or disabled.")
                }
            }