var space="";
var row=""

    for (var i = 1; i <= 5; i++) {
        
        for (var j = 1; j <= i; j++) 
            {
            space = space + '*';
            }
        
            for (var k = 1; k <= (5 - i); k++) {
                row += ' ';
              }
              
              for (var l = 1; l <= i; l++) {
                row += '*';
              }
               
        console.log(row + "____" + space);
        space="";
        row="";
    }