

buildURL = function(){
  return "" + parseTS($('#logo').css('color')) + fontMap[$('#logo').css('fontFamily').split(',')[0]] + parseTS($('#logo').css('textShadow'));
}

parseTS = function(ts){
  var url = ""
  a = ts.split("(")
  for(var i=1; i<a.length;i++){
    cp = a[i].split(")");
    c = cp[0].split(",");
    p = cp[1].split("px");
    for(var j=0; j<c.length;j++){
      url = url + parseInt(c[j]).toString(16);
    }
    for(var j=0; j<p.length-1;j++){
      url = url + (parseInt(p[j])+15).toString(36);
    } 
  }
  return url;
}
