// TEST ARRAY
// kinda sick
var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('tbody');

    for(var i = 0; i < array.length; i++) {
        // Create tr
        var tr = document.createElement('tr');
        // Create tb
        var td = document.createElement('td');
        
        // Set its contents:
        td.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        tr.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
//document.getElementById('foo').appendChild(makeUL(options[1]));
  
//fonts
const fontList = require('font-list')


fontList.getFonts()
  .then(fonts => {
    document.getElementById('foo').appendChild(makeUL(fonts));
    console.log(fonts)
  })
  .catch(err => {
    console.log(err)
  })
  
