function doGet() {
  const sheet = SpreadsheetApp.openById('[YourSpreadsheetIDGoesHere]').getSheets()[0];
  const data = sheet.getDataRange().getValues().slice(1).map(row => ({
    timestamp: row[0],
    emailAddress: row[1],
    discordName: row[2],
    driverOrRider: row[3],
    addressOrIntersection: row[4],
    leaveTime: row[5],
    otherNotes: row[6],
    deletedStatus: row[7], // Column H for deletion status
    uniqueIdentifier: `${row[0]}_${row[2]}` // Combine timestamp and Discord name for uniqueness
  }));

  const template = HtmlService.createHtmlOutputFromFile('Index');
  return template.append(`<script>const SPREADSHEET_DATA = ${JSON.stringify(data)};</script>`);
}
