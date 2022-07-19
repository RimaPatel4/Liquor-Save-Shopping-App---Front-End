document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function getliquors(product_id) {
    //get product id and append to url
    // add a parameter to store the captured product id and append it to line 7
    const url = new URL("http://127.0.0.1:5000/api/v1/resources/liquors?");
    url.searchParams.append('product_id', product_id);
    const newUrl = url.toString();
    console.log(newUrl)
    
    //add html element to hold total price
    fetch(newUrl)
    .then(response => response.json())  
    .then(json => {
        console.log(json); 
        var apiResponse = JSON.stringify(json);
        var itemPrice = json[0].price;
        addRow(json[0].name,json[0].price);
        });
}

function addRow(name , price) {
          
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    console.log(String(price));
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= name;
    row.insertCell(2).innerHTML= String(price);
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}

function calculate(){
    var table=document.getElementById('myTableData');
    var count = table.getElementsByTagName('tr').length;
    if (count > 0)
      {
        var total = 0;
        for(var i = 1; i < count; i++)
          {
            console.log(total);
            console.log(table.rows[i]);
            total += parseInt(table.rows[i].cells[2].innerHTML)
          }
      }
    
    document.getElementById('totalPrice').innerHTML=total;
    
    }

function onScanSuccess(decodedText, decodedResult) {
        // Handle on success condition with the decoded text or result.
        console.log(`Scan result: ${decodedText}`, decodedResult);
    }
    
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);


function onScanSuccess(qrCodeMessage) {
    // handle on success condition with the decoded message
    html5QrcodeScanner.clear();
    // ^ this will stop the scanner (video feed) and clear the scan area.
}

html5QrcodeScanner.render(onScanSuccess);

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    var resultContainer = document.getElementById('reader-results');
    var lastResult, countResults = 0;
    
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 });
    
    function onScanSuccess(decodedText, decodedResult) {
        if (decodedText !== lastResult) {
            ++countResults;
            lastResult = decodedText;
            console.log(`Scan result = ${decodedText}`, decodedResult);
            getliquors(decodedResult)
            resultContainer.innerHTML += `<div>[${countResults}] - ${decodedText}</div>`;
            
            // Optional: To close the QR code scannign after the result is found
            html5QrcodeScanner.clear();
        }
    }
    
    // Optional callback for error, can be ignored.
    function onScanError(qrCodeError) {
        // This callback would be called in case of qr code scan error or setup error.
        // You can avoid this callback completely, as it can be very verbose in nature.
    }
    
    html5QrcodeScanner.render(onScanSuccess, onScanError);
});