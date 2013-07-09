
function init (arguments) {

  // $("#on-off").toggleSwitch();

  $("#gender").toggleSwitch({
    highlight: true, // default
    width: 30, // default
    change: function(e) {
      // default null
    },
    stop: function(e,val) {
      // default null
    }
  });
}



function main(){
  init();
  // $(function() {
  //   $( "#dialog" ).dialog();
  // });

  // $(".ui-toggle-switch").toggleSwitch({
  //   highlight: true, // default
  //   width: 25, // default
  //   change: function(e) {
  //     // default null
  //   },
  //   stop: function(e,val) {
  //     // default null
  //   }
  // });
}




$(document).ready(function() {
  main();
});