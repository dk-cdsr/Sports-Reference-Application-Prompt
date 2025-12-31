//Array to store data
let data = {};

//Helper function to create table cells
function makeCell(text, tag = "td", type = "data") {
	//Use <th> for headers, <td> for other cells
	const cell = document.createElement(tag);
	cell.textContent = text;

	//Styling that applies to all cells
	cell.style.border = "1px solid";
	cell.style.padding = "3px 5px";
	cell.style.textAlign = "right";
	cell.style.fontFamily = '"Times New Roman", Times, serif';
	cell.style.fontSize  = "12px";
	cell.style.fontWeight = "normal";

	//Styling for headers
	if (type === "header") {
		cell.style.fontWeight = "bold";
		cell.style.background = "lightgrey";
		cell.style.color = "red";
		cell.style.border = "1px solid black";
	
	//Styling for footer/bottom row	
	} else if (type === "footer") {
		cell.style.background = "lightgrey"
		cell.style.fontWeight = "bold"
	}

	return cell;
}

//Gets element that contains the table
const root = document.getElementById("root");

//Get array keys/teams
const teams = Object.keys(data);

//Create table to display data
const table = document.createElement("table");
table.style.borderCollapse = "collapse";

//Create header row and thead
const thead = document.createElement("thead");
const header = document.createElement("tr");
header.appendChild(makeCell("Tm", "th", "header"));



//Fill header with team names, add it to the table
for (const team of teams) {
	header.appendChild(makeCell(team, "th", "header"));
}

thead.appendChild(header);
table.appendChild(thead);

//Fill body of table, create tbody element
const tbody = document.createElement("tbody");

for (const team of teams) {
	const row = document.createElement("tr");

	//left most column of row
	row.appendChild(makeCell(team, "th"));

	//Fill remainder of row with data
	//If teams match, write '--'
	for (const colTeam of teams) {
		if (colTeam === team) {
			row.appendChild(makeCell("--"));
			continue;
		}
		
		const matchup = data?.[team]?.[colTeam];
		row.appendChild(makeCell(String(matchup.W)));
	}
	tbody.appendChild(row);
}

table.appendChild(tbody);

//Fill footer with teams, same as header row
//Create tfoot element
const tfoot = document.createElement("tfoot");
const footer = document.createElement("tr");
footer.appendChild(makeCell("Tm", "th", "footer"));

for (const team of teams) {
	footer.appendChild(makeCell(team, "td", "footer"));
}

tfoot.appendChild(footer);
table.appendChild(tfoot);

//Render table on html page
root.appendChild(table);
