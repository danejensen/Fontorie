var fontMap ={
"'Forum'" : "02","Forum" : "02",
"'Bigshot One'" : "03","Bigshot One" : "03",
"'Holtwood One SC'" : "04","Holtwood One SC" : "04",
"'IM Fell DW Pica SC'" : "05","IM Fell DW Pica SC" : "05",
"'PT Serif Caption'" : "06","PT Serif Caption" : "06",
"'Old Standard TT'" : "07","Old Standard TT" : "07",
"'Stardos Stencil'" : "08","Stardos Stencil" : "08",
"'Six Caps'" : "09","Six Caps" : "09",
"'Josefin Slab'" : "0a","Josefin Slab" : "0a",
"'Special Elite'" : "0b","Special Elite" : "0b",
"'IM Fell English SC'" : "0c","IM Fell English SC" : "0c",
"'Buda'" : "0d","Buda" : "0d",
"'Ubuntu'" : "0e","Ubuntu" : "0e",
"'Syncopate'" : "0f","Syncopate" : "0f",
"'Wire One'" : "10","Wire One" : "10",
"'Modern Antiqua'" : "11","Modern Antiqua" : "11",
"'Nothing You Could Do'" : "14","Nothing You Could Do" : "14",
"'Loved by the King'" : "15","Loved by the King" : "15",
"'Love Ya Like A Sister'" : "16","Love Ya Like A Sister" : "16",
"'Shadows Into Light'" : "17","Shadows Into Light" : "17",
"'Waiting for the Sunrise'" : "18","Waiting for the Sunrise" : "18",
"'La Belle Aurore'" : "19","La Belle Aurore" : "19",
"'Kristi'" : "1a","Kristi" : "1a",
"'Annie Use Your Telescope'" : "1b","Annie Use Your Telescope" : "1b",
"'The Girl Next Door'" : "1c","The Girl Next Door" : "1c",
"'Permanent Marker'" : "1d","Permanent Marker" : "1d",
"'Give You Glory'" : "1e","Give You Glory" : "1e",
"'Sue Ellen Francisco'" : "1f","Sue Ellen Francisco" : "1f",
"'Just Me Again Down Here'" : "20","Just Me Again Down Here" : "20",
"'Coming Soon'" : "21","Coming Soon" : "21",
"'Unkempt'" : "22","Unkempt" : "22",
"'Kranky'" : "23","Kranky" : "23",
"'Cabin Sketch'" : "24","Cabin Sketch" : "24",
"'Calligraffitti'" : "25","Calligraffitti" : "25",
"'Dawning of a New Day'" : "26","Dawning of a New Day" : "26",
"'Schoolbell'" : "27","Schoolbell" : "27",
"'Rock Salt'" : "28","Rock Salt" : "28",
"'Swanky and Moo Moo'" : "29","Swanky and Moo Moo" : "29",
"'Reenie Beanie'" : "2a","Reenie Beanie" : "2a",
"'Gloria Hallelujah'" : "2b","Gloria Hallelujah" : "2b",
"'Covered By Your Grace'" : "2c","Covered By Your Grace" : "2c",
"'Miltonian'" : "2d","Miltonian" : "2d",
"'Zeyada'" : "2e","Zeyada" : "2e",
"'Lobster Two'" : "31","Lobster Two" : "31",
"'Yellowtail'" : "32","Yellowtail" : "32",
"'Aclonica'" : "33","Aclonica" : "33",
"'Philosopher'" : "34","Philosopher" : "34",
"'Over the Rainbow'" : "35","Over the Rainbow" : "35",
"'Astloch'" : "36","Astloch" : "36",
"'Meddon'" : "37","Meddon" : "37",
"'Merienda One'" : "38","Merienda One" : "38",
"'Rochester'" : "39","Rochester" : "39",
"'Delius Swash Caps'" : "3a","Delius Swash Caps" : "3a",
"'Montez'" : "3b","Montez" : "3b",
"'Cedarville Cursive'" : "3c","Cedarville Cursive" : "3c",
"'Amaranth'" : "3d","Amaranth" : "3d",
"'Redressed'" : "3e","Redressed" : "3e",
"'Vibur'" : "3f","Vibur" : "3f",
"'Fontdiner Swanky'" : "40","Fontdiner Swanky" : "40",
"'Tangerine'" : "41","Tangerine" : "41",
"'Calligraffitti'" : "42","Calligraffitti" : "42",
"'Dawning of a New Day'" : "43","Dawning of a New Day" : "43",
"'Homemade Apple'" : "44","Homemade Apple" : "44",
"'Crafty Girls'" : "45","Crafty Girls" : "45",
"'Pacifico'" : "46","Pacifico" : "46",
"'League Script'" : "47","League Script" : "47",
"'Leckerli One'" : "48","Leckerli One" : "48",
"'Nova Oval'" : "4b","Nova Oval" : "4b",
"'Orbitron'" : "4c","Orbitron" : "4c",
"'Sniglet'" : "4d","Sniglet" : "4d",
"'VT323'" : "4e","VT323" : "4e",
"'Slackey'" : "4f","Slackey" : "4f",
"'Smokum'" : "50","Smokum" : "50",
"'Allan'" : "51","Allan" : "51",
"'Mountains of Christmas'" : "52","Mountains of Christmas" : "52",
"'Black Ops One'" : "53","Black Ops One" : "53",
"'Walter Turncoat'" : "54","Walter Turncoat" : "54",
"'Ruslan Display'" : "55","Ruslan Display" : "55",
"'UnifrakturMaguntia'" : "56","UnifrakturMaguntia" : "56",
"'Chewy'" : "57","Chewy" : "57",
"'Irish Grover'" : "58","Irish Grover" : "58",
"'Sunshiney'" : "59","Sunshiney" : "59",
"'Bangers'" : "5a","Bangers" : "5a",
"'Luckiest Guy'" : "5b","Luckiest Guy" : "5b",
"'Monofett'" : "5c","Monofett" : "5c",
"'Monoton'" : "5d","Monoton" : "5d",
"'Short Stack'" : "5e","Short Stack" : "5e",
"'Megrim'" : "5f","Megrim" : "5f"}
 
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

var parseTStoTag = function(ts){
  var tag = ""
  var color = ""
  var tagA = [];
  a = ts.split("(")
  for(var i=1; i<a.length;i++){
    cp = a[i].split(")");
    c = cp[0].split(",");
    p = cp[1].split("px");
    for(var j=0; j<c.length;j++){
      color = color + parseInt(c[j]).toString(16);
    }
    color="#"+color;
    for(var j=0; j<3;j++){
      tag = tag + parseInt(p[j]) + "px ";
    }
    tag = tag + color;
    tagA.push(tag);
    color = tag = "";
  }
  return tagA;
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

var buildCSS = function(){
  return "color: " + cssColorToHex($('#logo').css('color'))+ "; "+"font-family: " + $('#logo').css('fontFamily') + "; " + "text-shadow: " + $('#logo').css('textShadow')+";";
}

var buildHTMLCSS = function(){
  var ff = $('#logo').css('fontFamily').split(',')[0].replace(/'/g,"").replace(/ /g, "+");
  var link = "<link href='http://fonts.googleapis.com/css?family=" + ff + "' rel='stylesheet' type='text/css'>";
  return link + "\n<style>\n\t" + " #logo{ " + buildCSS() + "} \n" + "</style>"; 
}
