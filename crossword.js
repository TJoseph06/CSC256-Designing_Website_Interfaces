 // cat - 3
        // dog - 3
        // tortoise - 8
        /*
            <table>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        */
            function buildPuzzle(cols, rows){
                // create a shortcut to the table in the HTML
                let puzzle = document.getElementById("puzzle");
        
                // nested loop to build out the table rows and columns
                for (let i = 0; i < rows; i++){
                    // build a row each time we loop through the outer loop
                    let tr = document.createElement("tr");
        
                    // build an inner loop to create each column / cell / td
                    for (let j = 0; j < cols; j++){
                        // build a column in the table every time this looop runs
                        let td = document.createElement("td");
                        // then add the column to the row in the outer loop
                        tr.appendChild(td);
                    }
        
                    // after the inner loop, but before the iouter loop, add the row to the table
                    puzzle.appendChild(tr);
                }
            }
    
            // call the function to build the puzzle table structure
            // 8 columns because tortoise has 8 letters
            // 3 rows because dog has 3 letters
            buildPuzzle(7, 8);
    
            function buildLetters(startingRow, startingCol, direction, word, table, showAnswer, 
            clueNumber){
                // we need to loop through the word to build out each letter text box
                for (let i = 0; i<word.length; i++){
                // set up varibles to keep track of what row and column we are working through
            let rowIndex = 0;
            let colIndex = 0;
    
            // configure the row or column counters
                     if (direction == "across"){
                    // if the word goes across, we keep the same row number for the whole build
                    rowIndex = startingRow;
                    // colIndex needs to increase by 1 every time the loop runs
                    colIndex = startingCol + i;
                    }
                    else{
                        // if the word goes across, we keep the same row number for the whole build
                    rowIndex = startingRow + i;
                    // colIndex needs to increase by 1 every time the loop runs
                    colIndex = startingCol;
                    }
    
                    // get the current table row
                    let tr = table.rows[rowIndex];
                    // get the current table data
                    let td = tr.cells[colIndex];
    
                    // configure the clue number 
                    if (i == 0){
                        // make sure to give the span a different name than the clue number
                        let spnClueNumber = document.createElement("span");
                        spnClueNumber.className = "clue-number";
                        spnClueNumber.textContent = clueNumber;
                        td.appendChild(spnClueNumber);
                    }
    
                    // we need to check and see if there is already a textbox in the current cell
                    if (!td.querySelector("input")){
                        // we will create the textbox input that will be added to the cell
                        let input = document.createElement("input");
                        
                        // set the type to textbox
                        input.setAttribute("type", "text");
                        // only allow 1 letter per textbox
                        input.setAttribute("maxLength", "1");
    
                        // if showAnswer is true, add the current letter to the textbox
                        if(showAnswer){
                            // add the capitalized letter to the input
                            input.value = word[i].toUpperCase();
                        }
    
                        // add the new input textbox to the cell
                        td.appendChild(input);
                    }
                }
            }
    
            // set up an array to hold our list of arrays
            let arrWords = ["Cat", "Dog", "Tortoise"];
            // set up a shortcut/nickname to the table
            let table = document.getElementById("puzzle");
    
    
            // call the buildLetters function for each word
            buildLetters(3, 0, "across", arrWords[0], table, false, 1); // cat
            buildLetters(1, 1, "across", arrWords[1], table, false, 2); // dog
            buildLetters(0, 2, "down", arrWords[2], table, false, 1); // tortoise