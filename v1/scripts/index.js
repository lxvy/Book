$(document).ready(function(){
  var nav_lists;
  var oFronts = "";
  if(BookGuide['pageT1'] === 'web'){
    for(var sum1 in BookGuide['pageC1']){
      var page2 = BookGuide['pageC1'];
      var oPage3 = page2[sum1];
      var oSRC = oPage3['src'];
      oFronts += "<img src='"+oSRC+"' style='width:200px;'>"
    }
    $("#webcontent").append(oFronts);
  }
});
