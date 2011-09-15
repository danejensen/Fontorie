# !/usr/bin/env python

from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
import os
from url2logo import *

class MainPage(webapp.RequestHandler):
    """ Renders the main template."""
    def get(self):
        template_values = { 'title':'AJAX Add (via GET)', }
        path = os.path.join(os.path.dirname(__file__), "index.html")
        self.response.out.write(template.render(path, template_values))    
        
class Examples(webapp.RequestHandler):
    """ Renders the main template."""
    def get(self):
        template_values = { 'title':'AJAX Add (via GET)', }
        path = os.path.join(os.path.dirname(__file__), "examples.html")
        self.response.out.write(template.render(path, template_values))           

class Workspace(webapp.RequestHandler):
    """ Renders the main template."""
    def get(self, url):
        css = url2logo(url)
        template_values = { 'title':'AJAX Add (via GET)','css':css}
        path = os.path.join(os.path.dirname(__file__), "workspace.html")
        self.response.out.write(template.render(path, template_values))

def main():
    app = webapp.WSGIApplication([
        ('/', MainPage),
	('/examples',Examples),
	('/(.*)$', Workspace),
        ], debug=True)
    run_wsgi_app(app)

if __name__ == '__main__':
    main()
