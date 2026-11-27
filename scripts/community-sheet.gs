/**
 * Muster community applications -> Google Sheet.
 * Paste into the sheet's Extensions > Apps Script, then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone). The website posts each application here.
 */
const KEY = "PASTE_YOUR_KEY_HERE"; // must match the ?key= in the COMMUNITY_SHEET_WEBHOOK Vercel setting

function doPost(e) {
  if (!e || !e.parameter || e.parameter.key !== KEY) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  }
  const d = JSON.parse(e.postData.contents || "{}");
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Applications");
    // Leading apostrophe stops Sheets from treating user text as a formula.
    const safe = (v) => {
      const s = String(v || "").slice(0, 300);
      return /^[=+\-@]/.test(s) ? "'" + s : s;
    };
    sheet.appendRow([new Date(), safe(d.name), safe(d.email), safe(d.title), safe(d.linkedin), safe(d.location), safe(d.whatsapp), "Pending"]);
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
