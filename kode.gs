function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

var url = '#'
var sh = 'sheet1'
var folderId = '#'

function processForm(formdata){
  var superscript = SuperScript.initSuper(url,sh)
  var formObject = {}
  formdata.forEach(element => formObject[element.name] = element.value)
  var file = superscript.uploadFile(folderId,formObject.myfile.data,formObject.myfile.name)
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheets()[0]
   ws.appendRow([
     new Date(),
    formObject.nama,
    "'"+formObject.kelas,
    formObject.subjek,
     file.getUrl()
  ]);
}
