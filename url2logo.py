from string import Template

fontMap = ['', '', 'Forum', 'Bigshot One', 'Holtwood One SC', 'IM Fell DW Pica SC', 'PT Serif Caption', 'Old Standard TT', 'Stardos Stencil', 'Six Caps', 'Josefin Slab', 'Special Elite', 'IM Fell English SC', 'Buda', 'Ubuntu', 'Syncopate', 'Wire One', 'Modern Antiqua', '', '', 'Nothing You Could Do', 'Loved by the King', 'Love Ya Like A Sister', 'Shadows Into Light', 'Waiting for the Sunrise', 'La Belle Aurore', 'Kristi', 'Annie Use Your Telescope', 'The Girl Next Door', 'Permanent Marker', 'Give You Glory', 'Sue Ellen Francisco', 'Just Me Again Down Here', 'Coming Soon', 'Unkempt', 'Kranky', 'Cabin Sketch', 'Calligraffitti', 'Dawning of a New Day', 'Schoolbell', 'Rock Salt', 'Swanky and Moo Moo', 'Reenie Beanie', 'Gloria Hallelujah', 'Covered By Your Grace', 'Miltonian', 'Zeyada', '', '', 'Lobster Two', 'Yellowtail', 'Aclonica', 'Philosopher', 'Over the Rainbow', 'Astloch', 'Meddon', 'Merienda One', 'Rochester', 'Delius Swash Caps', 'Montez', 'Cedarville Cursive', 'Amaranth', 'Redressed', 'Vibur', 'Fontdiner Swanky', 'Tangerine', 'Calligraffitti', 'Dawning of a New Day', 'Homemade Apple', 'Crafty Girls', 'Pacifico', 'League Script', 'Leckerli One', '', '', 'Nova Oval', 'Orbitron', 'Sniglet', 'VT323', 'Slackey', 'Smokum', 'Allan', 'Mountains of Christmas', 'Black Ops One', 'Walter Turncoat', 'Ruslan Display', 'UnifrakturMaguntia', 'Chewy', 'Irish Grover', 'Sunshiney', 'Bangers', 'Luckiest Guy', 'Monofett', 'Monoton', 'Short Stack', 'Megrim']

def chunks(s, n):
  for i in xrange(0, len(s), n):
    yield s[i:i+n]

def a2ts(r):
  ts = ""
  for s in r:
    ts = ts + "%dpx %dpx %dpx #%s," % (int(s[6:7],36)-15,int(s[7:8],36)-15,int(s[8:],36)-15,s[0:6])
  return ts[0:-1] + ";"

def url2logo(url):
  
  r = list(chunks(url[8:],9))
  s = Template("#logo{font-family: '$font',cursive;font-size: 200px;color: #$color;text-shadow: $textshadow}")
  return s.substitute(color=url[0:6], font=fontMap[int(url[6:8],16)], textshadow=a2ts(r))

