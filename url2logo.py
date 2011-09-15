from string import Template

fontMap = ['Monoton', 'Rochester', 'Nothing You Could Do', 'Black Ops One',
  'Cedarville Cursive',
  'Permanent Marker',
  'IM Fell DW Pica SC',
  'Luckiest Guy',
  'Reenie Beanie',
  'Rock Salt']

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

