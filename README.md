# Sports-Reference-Application-Prompt
In this code solution, I created a basic HTML page called solution.html. In this page, I simply created a div element which would be the parent element to the table I will create, and a script element linking the HTML page to a JavaScript file.
In this file, called table.js, I declared an object called data, used to represent the provided JSON data. At the top of the file, I also declared a helper function called makeCell which would help me quickly fill in table cells.
This function can take three arguments, the text that will be printed in the cell, the type of element tag the cell will be, and the type of cell that it is. The cell type will default to data, but it can be passed as a header or footer cell.
The function creates either a td or th element based on the data type passed, and sets the cell to be filled by the passed text argument. The function will also apply styling that applies to all cells or that is specific to only header/footer row cells.

Outside of the function, I get the div element from the HTML by its id to later append the table to. I create an array of the keys from the data, giving me an array of each of the teams provided.
I am now ready to create my table, the tr element for the header row, and the thead element. The table will be structured using thead, tbody, and tfoot elements to separate the table.
I now loop through my array of teams and append each one into its individual cell in the header row.
To fill in the body of the table, I loop through the array of teams once again. For each of these teams, I create a new tr element, and add the team name to the leftmost cell in the row. These cells are styled as data but are output with th tags.
I then created a nested loop to loop through the teams once again, allowing for each team to have its column in each row. I check if the team in the row is the same as the team in the column, and leave a value of "--" in the cell if there is a match.
Otherwise, I will retrieve the number of wins the row team had against the column team, and insert this data to the table cell. Once the row is filled, it is added to the table, and the original for loop moves on to the next row and team. 

Lastly, I create a final tr for the footer row. I loop through the teams array in the same way as the header row, and append it to the table. Similarly to the other leftmost cells in each row, the leftmost footer cell is styled as a footer but is output as a th tag.
With the table finally completed, I append it to the root div element on the HTML page to display the solution.
