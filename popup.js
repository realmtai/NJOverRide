



// if(!document.head){ setTimeout(insertJavaScript, 1); }
// else { insertJavaScript(); }

// function insertJavaScript(){
//   injectScript("inj.js");
// }
function insertJavaScript(jsFile){
    var head = document.getElementsByTagName('head')[0] || document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = jsFile;
    console.log(jsFile);
    if(head) head.insertBefore(script, head.firstChild);
  };

  function insertCSSScript(jsFile){
    var head = document.getElementsByTagName('head')[0] || document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = jsFile;
    console.log(jsFile);
    if(head) head.insertBefore(script, head.firstChild);
  };



function main(args){
  var w = window;
  w.alert = function (msg){
    console.log(msg);
  };
}










if (!document.xmlVersion) {
  var script = document.createElement('script');
  

  var scripts=["passed in javascript html page"];
  var scrArgs = scripts.toString().split(",").join("\",\"");
  script.appendChild(document.createTextNode('('+ main +')([\"'+scrArgs+'\"]);'));
  document.documentElement.appendChild(script);


  var insertJavaScriptHtml = function (){
    insertJavaScript(chrome.extension.getURL("inj.js"));
    insertJavaScript(chrome.extension.getURL("jquery.js"));
  }

  if(!document.head){ setTimeout(insertJavaScriptHtml, 1); }
  else {insertJavaScriptHtml();}
    

}