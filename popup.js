



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
  var alertUI = function (msg){
    $("<div>"+msg+"</div>").dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }
  w.alert = function (msg){
    console.log(msg);
    if (!jQuery.ui) {
      $("head").append("<link rel='stylesheet' type='text/css' href='"+args[1]+"' />");
      $.getScript(args[0], function(){
        alertUI(msg);
      });
    }else{
      alertUI(msg);
    }

  };
}










if (!document.xmlVersion) {
  var script = document.createElement('script');
  

  var scripts=[chrome.extension.getURL("jquery-ui.js"), chrome.extension.getURL("jquery-ui.css")];
  var scrArgs = scripts.toString().split(",").join("\",\"");
  script.appendChild(document.createTextNode('('+ main +')([\"'+scrArgs+'\"]);'));
  document.documentElement.appendChild(script);


  // var insertJavaScriptHtml = function (){
  //   // insertJavaScript(chrome.extension.getURL("inj.js"));
  //   // insertJavaScript(chrome.extension.getURL("jquery.js"));
  //   // insertJavaScript(chrome.extension.getURL("jquery-ui.js"));
  //   // insertJavaScript("//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js");
  // }

  // if(!document.head){ setTimeout(insertJavaScriptHtml, 1); }
  // else {insertJavaScriptHtml();}
    

}