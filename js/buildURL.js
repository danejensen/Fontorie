var fontMap =
 {"'Monoton'" : "00",
  "'Rochester'" : "01",
  "'Nothing You Could Do'" : "02",
  "'Black Ops One'" : "03",
  "'Cedarville Cursive'" : "04",
  "'Permanent Marker'" : "05",
  "'IM Fell DW Pica SC'" : "06",
  "'Luckiest Guy'" : "07",
  "'Reenie Beanie'" : "08",
  "'Rock Salt'" : "09",
  "Monoton" : "00",
  "Rochester" : "01",
  "Nothing You Could Do" : "02",
  "Black Ops One" : "03",
  "Cedarville Cursive" : "04",
  "Permanent Marker" : "05",
  "IM Fell DW Pica SC" : "06",
  "Luckiest Guy" : "07",
  "Reenie Beanie" : "08",
  "Rock Salt" : "09"}
 
var parseTS = function(ts){
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

var cssColorToHex = function(colorStr){
    var hex = '';
    $.each(colorStr.substring(4).split(','), function(i, str){
        var h = ($.trim(str.replace(')',''))*1).toString(16);
        hex += (h.length == 1) ? "0" + h : h;
    });
    return hex;
};

var buildURL = function(){
  return "" + cssColorToHex($('#logo').css('color')) + fontMap[$('#logo').css('fontFamily').split(',')[0]] + parseTS($('#logo').css('textShadow'));
}
