function makeUL(array) {
    // Create the list element:
    var table = document.createElement('tbody');

    for(var i = 0; i < array.length; i++) {
        // Create tr
        var tr = document.createElement('tr');
        // Create tb
        var td = document.createElement('td');
        
        // Set its contents:
        name = array[i].toString();
        name = name.replace(/"/g,"");
        td.appendChild(document.createTextNode(name));
        td.style.fontFamily = "'"+name+"'";

        // Add it to the list:
        tr.appendChild(td);
        table.appendChild(tr);
    }

    // Finally, return the constructed list:
    return table;
}

// Add the contents of options[0] to #foo:
//document.getElementById('foo').appendChild(makeUL(options[1]));
  
//fonts
const fontList = require('font-list')


fontList.getFonts()
  .then(fonts => {
    document.getElementById('foo').appendChild(makeUL(fonts));
    console.log(fonts);
  })
  .catch(err => {
    console.log(err)
  })
  