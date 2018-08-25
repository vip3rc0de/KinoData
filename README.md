# getKinoData
This code can be used in google Spreadsheets to track Kino Data Results.
## Where to add this Code
Tools-Script Editor-File-New-Project
<br />Name: getData
## Sheet2
Cell B2 Paste the Link: http://applications.opap.gr/DrawsRestServices/kino/last.xml
<br />Cell B3 Paste: //drawNo | //drawTime | //result
<br />Cell A2: URL
<br />Cell A3: XPath
<br />Cell A5: Draw
<br />Cell A6: Date
<br />Cell A7-A26: Result 1 - Result 20
### Triggers
getData - Time-driven - Minutes Timer - Every Minute
<br />saveData - Time-driven - Minutes Timer - Every 5 Minutes

## Settings for this Spreadsheet
### General
Locale: United States
<br />Time Zone: (GMT+02:00) Helsinki
### Calculation
Recalculation: On change and every minute
<br />Iterative Calculation: Off
