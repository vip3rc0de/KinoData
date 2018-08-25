// custom menu function
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Save Data','saveData')
      .addItem('Refresh','getData')
      .addToUi();
}
 
// function to save data
function saveData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var Draw = sheet.getRange('Sheet2!B5').getValue();
  var Date = sheet.getRange('Sheet2!B6').getValue();
  var Result1 = sheet.getRange('Sheet2!B7').getValue();
  var Result2 = sheet.getRange('Sheet2!B8').getValue();
  var Result3 = sheet.getRange('Sheet2!B9').getValue();
  var Result4 = sheet.getRange('Sheet2!B10').getValue();
  var Result5 = sheet.getRange('Sheet2!B11').getValue();
  var Result6 = sheet.getRange('Sheet2!B12').getValue();
  var Result7 = sheet.getRange('Sheet2!B13').getValue();
  var Result8 = sheet.getRange('Sheet2!B14').getValue();
  var Result9 = sheet.getRange('Sheet2!B15').getValue();
  var Result10 = sheet.getRange('Sheet2!B16').getValue();
  var Result11 = sheet.getRange('Sheet2!B17').getValue();
  var Result12 = sheet.getRange('Sheet2!B18').getValue();
  var Result13 = sheet.getRange('Sheet2!B19').getValue();
  var Result14 = sheet.getRange('Sheet2!B20').getValue();
  var Result15 = sheet.getRange('Sheet2!B21').getValue();  
    var Result16 = sheet.getRange('Sheet2!B22').getValue();
  var Result17 = sheet.getRange('Sheet2!B23').getValue();
  var Result18 = sheet.getRange('Sheet2!B24').getValue();
  var Result19 = sheet.getRange('Sheet2!B25').getValue();
  var Result20 = sheet.getRange('Sheet2!B26').getValue(); 
  sheet.appendRow([Draw,Date,Result1,Result2,Result3,Result4,Result5,Result6,Result7,Result8,Result9,Result10,Result11,Result12,Result13,Result14,Result15,Result16,Result17,Result18,Result19,Result20]);
}
