const BLOOM_SHEET_ID = "1zQuUVl_-B9W8hpa_eDjO9uvMTmbZFL-nL6KLCGxv3wE";
const BLOOM_TAB = "알림 신청";
const BLOOM_TOPICS = ["굿즈 출시", "캠페인 소식", "체험 이야기", "브랜드 이야기"];

function setupBloomSheet() {
 const book = SpreadsheetApp.openById(BLOOM_SHEET_ID);
 book.rename("동백이 굿즈 알림받기");
 const tab = book.getSheetByName(BLOOM_TAB) || book.insertSheet(BLOOM_TAB);
 if (tab.getLastRow() === 0) {
  tab.getRange("A1:C1").setValues([["접수 시각", "이메일", "관심 항목"]])
   .setBackground("#18250D").setFontColor("#ffffff").setFontWeight("bold");
  tab.setFrozenRows(1);
  tab.setColumnWidth(1, 180);
  tab.setColumnWidth(2, 240);
  tab.setColumnWidth(3, 300);
 }
 tab.getRange("D1:E1").setValues([["이름", "전화번호"]]).setBackground("#18250D").setFontColor("#ffffff").setFontWeight("bold");
 tab.getRange("D:E").setNumberFormat("@");
 tab.setColumnWidth(4, 160);
 tab.setColumnWidth(5, 180);
}

function doPost(event) {
 const respond = ok => ContentService.createTextOutput(JSON.stringify({ ok }))
  .setMimeType(ContentService.MimeType.JSON);
 const secret = PropertiesService.getScriptProperties().getProperty("BLOOM_SHEETS_SECRET");
 if (!secret || !event.postData || event.postData.length > 2048) return respond(false);
 let input;
 try { input = JSON.parse(event.postData.contents); } catch { return respond(false); }
 if (!input || input.secret !== secret || typeof input.email !== "string"
  || input.email.length > 254 || !/^[a-z0-9][^\s@]*@[^\s@]+\.[^\s@]+$/i.test(input.email)
  || typeof input.name !== "string" || !input.name.trim() || input.name.length > 80
  || typeof input.phone !== "string" || !/^[+0-9][0-9 ().-]{6,31}$/.test(input.phone)
  || !Array.isArray(input.topics) || !input.topics.length || input.topics.length > BLOOM_TOPICS.length
  || !input.topics.every(topic => BLOOM_TOPICS.includes(topic))) return respond(false);
 const lock = LockService.getScriptLock();
 if (!lock.tryLock(5000)) return respond(false);
 try {
  const tab = SpreadsheetApp.openById(BLOOM_SHEET_ID).getSheetByName(BLOOM_TAB);
  if (!tab) return respond(false);
  const last = tab.getLastRow();
  const existing = last > 1 && tab.getRange(2, 2, last - 1, 1).createTextFinder(input.email).matchEntireCell(true).findNext();
  const row = existing ? existing.getRow() : last + 1;
  const text = value => /^[=+@-]/.test(value) ? "'" + value : value;
  if (!existing) tab.getRange(row, 1, 1, 2).setValues([[new Date(), input.email]]);
  tab.getRange(row, 3, 1, 3).setValues([[input.topics.join(", "), text(input.name.trim()), text(input.phone)]]);
  SpreadsheetApp.flush();
  return respond(true);
 } finally {
  lock.releaseLock();
 }
}
