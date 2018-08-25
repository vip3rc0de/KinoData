function getData() {
  var queryString = Math.random();

  var cellFunction1 = '=IMPORTXML("' + SpreadsheetApp.getActiveSheet().getRange('Sheet2!B2').getValue() + '?' + queryString + '","'+ SpreadsheetApp.getActiveSheet().getRange('Sheet2!B3').getValue() + '")';
  SpreadsheetApp.getActiveSheet().getRange('Sheet2!B5').setValue(cellFunction1);
}
