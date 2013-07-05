



// if(!document.head){ setTimeout(insertScript, 1); }
// else { insertScript(); }

// function insertScript(){
//   injectScript("inj.js");
// }

function main(scripts){
  var w = window;
  w.alert = function (msg){
    console.log(msg);
  };
}


function insertScript(jsFile){
    var head = document.getElementsByTagName('head')[0] || document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = jsFile;
    console.log(jsFile);
    if(head) head.insertBefore(script, head.firstChild);
  };


if (!document.xmlVersion) {
  var script = document.createElement('script');
  var scripts=[chrome.extension.getURL("inj.js")];



  // var scrArgs = scripts.toString().split(",").join("\",\"");
  script.appendChild(document.createTextNode('('+ main +')();'));


  for (var i = 0; i < scripts.length; i++) {
    insertScript(scripts[i]);
  };

  document.documentElement.appendChild(script);
}