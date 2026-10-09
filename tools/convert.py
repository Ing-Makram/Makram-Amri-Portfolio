"""Converts the design-tool page (Main.dc.html) into src/template.json, src/logic.js and public/styles.css."""
import re, json, sys
from html.parser import HTMLParser
src = sys.argv[1]
s = open(src, encoding='utf-8').read()
hs = s.index('<helmet>'); he = s.index('</helmet>')
helmet = s[hs+8:he]
css = re.search(r'<style>(.*?)</style>', helmet, re.S).group(1).strip()
fonts = re.search(r'<link href="([^"]+)"', helmet).group(1).replace('&amp;', '&')
tpl = s[he+9:s.index('</x-dc>')]
script = re.search(r'<script type="text/x-dc" data-dc-script[^>]*>(.*?)</script>', s, re.S).group(1)
open('public/styles.css', 'w', encoding='utf-8').write(css + '\n')
open('src/fonts.txt', 'w').write(fonts)
VOID = {'img','input','br','hr','meta','link','path','circle'} - {'path','circle'}
FIX = {'viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio'}
class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = {'t':'el','tag':'$root','attrs':{},'kids':[]}; self.st=[self.root]
    def handle_starttag(self, tag, attrs):
        a = {}
        for k, v in attrs:
            if k.startswith('hint-'): continue
            a[FIX.get(k, k)] = '' if v is None else v
        n = {'t':'el','tag':tag,'attrs':a,'kids':[]}
        self.st[-1]['kids'].append(n)
        if tag not in VOID: self.st.append(n)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID: self.st.pop()
    def handle_endtag(self, tag):
        if tag in VOID: return
        for i in range(len(self.st)-1, 0, -1):
            if self.st[i]['tag'] == tag:
                del self.st[i:]; return
        print('stray end tag', tag, file=sys.stderr)
    def handle_data(self, d):
        k = self.st[-1]['kids']
        if k and k[-1]['t']=='text': k[-1]['v'] += d
        else: k.append({'t':'text','v':d})
p = P(); p.feed(tpl); p.close()
if len(p.st) != 1: print('UNCLOSED', [n['tag'] for n in p.st[1:]], file=sys.stderr)
def prune(n):
    if n['t']=='el':
        n['kids'] = [prune(k) for k in n['kids']]
        if not n['kids']: del n['kids']
        if not n['attrs']: del n['attrs']
    return n
# drop whitespace-only text nodes that sit between elements (keeps inline text spacing within spans)
def clean(n):
    if n['t']!='el': return
    ks = n.get('kids') or []
    out=[]
    for k in ks:
        if k['t']=='text' and not k['v'].strip() and '\n' in k['v']: continue
        out.append(k)
    if out: n['kids']=out
    elif 'kids' in n: del n['kids']
    for k in out: clean(k)
prune(p.root); clean(p.root)
BL={'/_blob/4f2c6f37413562edb7a9374afe12e87b':'/makram.jpg','/_blob/2ecd886cd80ad87a7b114b0df8feb09f':'/nexus-overview.jpg','/_blob/f4f2c8f5d55eff9cd2f0659f392efb2b':'/nexus-invoices.jpg'}
js=json.dumps(p.root['kids'], ensure_ascii=False, separators=(',',':'))
for a,b in BL.items(): js=js.replace(a,b)
assert '_blob' not in js
open('src/template.json','w',encoding='utf-8').write(js)
script = script.replace('/_blob/4f2c6f37413562edb7a9374afe12e87b','/makram.jpg')
logic = "import { DCLogic } from './dc.js';\n" + script + "\nexport default Component;\n"
open('src/logic.js','w',encoding='utf-8').write(logic)
print('nodes ok; css', len(css), 'logic', len(logic))
