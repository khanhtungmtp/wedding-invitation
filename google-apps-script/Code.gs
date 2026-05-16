/**
 * Google Apps Script backend for RSVP + wishes display.
 *
 * Setup:
 * 1) Create a Google Sheet with a tab named exactly: RSVP
 * 2) Row 1 headers (recommended):
 *    Timestamp | FullName | Phone | Attending | GuestCount | Message
 * 3) Replace YOUR_SPREADSHEET_ID below (from the Sheet URL)
 * 4) Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5) Copy the Web App URL into Vite env:
 *    VITE_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/AKfyc.../exec"
 */

var SHEET_NAME = 'RSVP'

function getSheet_() {
  var spreadsheetId = 'YOUR_SPREADSHEET_ID'
  var ss = SpreadsheetApp.openById(spreadsheetId)
  return ss.getSheetByName(SHEET_NAME)
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut_({ ok: false, error: 'Missing POST body' })
    }

    var payload = JSON.parse(e.postData.contents)
    var sheet = getSheet_()

    sheet.appendRow([
      new Date(),
      payload.fullName || '',
      payload.phone || '',
      payload.attending || '',
      payload.guestCount || '',
      payload.message || '',
    ])

    return jsonOut_({ ok: true })
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) })
  }
}

function doGet(e) {
  try {
    var action = e && e.parameter && e.parameter.action

    if (action !== 'wishes') {
      return jsonOut_({ ok: true, ping: true })
    }

    var sheet = getSheet_()
    var rows = sheet.getDataRange().getValues()
    var wishes = []

    // Expect header row at index 0:
    // Timestamp | FullName | Phone | Attending | GuestCount | Message
    for (var i = rows.length - 1; i >= 1; i--) {
      var timestamp = rows[i][0]
      var fullName = rows[i][1]
      var message = rows[i][5]

      if (message) {
        var createdAt =
          timestamp instanceof Date ? timestamp.toISOString() : String(timestamp || '')

        wishes.push({
          id: 'sheet-row-' + (i + 1),
          name: String(fullName || 'Khách mời'),
          message: String(message || ''),
          createdAt: createdAt,
        })

        if (wishes.length >= 60) break
      }
    }

    return jsonOut_({ ok: true, wishes: wishes })
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) })
  }
}
