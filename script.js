function ping() {
  window.alert("Thank you for your feedback");
}

class grid {
  constructor(
    numberOfColumns,
    numberOfRows,
    imageSource,
    cardTitle,
    cardDescription,
    cardDiscount,
    cardOriginal,
    cardDiscounted,
  ) {
    this.numberOfColumns = numberOfColumns;
    this.numberOfRows = numberOfRows;
    this.imageSource = imageSource;
    this.cardTitle = cardTitle;
    this.cardDescription = cardDescription;
    this.cardDiscount = cardDiscount;
    this.cardOriginal = cardOriginal;
    this.cardDiscounted = cardDiscounted;
  }
}

const gridObj = [numberOfColumns,numberOfRows,imageSource,cardTitle,cardDescription.cardDiscount,cardOriginal,cardDiscounted]

console.log(gridObj)

function createCards(tableID) {
  var table = document.getElementById(tableID);
  var rowQuan = table.rows.length;
  var rows = table.insertRow(rowQuan);
  // columns
  var cellA = row.newCell(0);
  var cellB = row.insertCell(1);
  var cellC = row.insertCell(2);
}
