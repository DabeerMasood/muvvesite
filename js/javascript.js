function exportF() {
  //Format your table with form data
  document.getElementById("input").innerHTML = document.getElementById("text").value;

  var table= document.getElementById("table");
  var html = table.outerHTML;

  var url='data:application/vnd.ms-excel,' + escape(html) ; // Set your html table into url 
  var link = document.getElementById("downloadLink"); 
  link.setAttribute("href", url);
  link.setAttribute("download", "export.xls"); // Choose the file name
  link.click(); // Download your excel file   
  return false;
}