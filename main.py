# !/usr/bin/env python

from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
from google.appengine.ext import db
import os
import cgi
from url2logo import *

class Logo(db.Model):
    url = db.StringProperty()
    word = db.StringProperty()
    css = db.TextProperty()

class MainPage(webapp.RequestHandler):
    """ Renders the main template."""
    def get(self):
        template_values = { 'title':'AJAX Add (via GET)', }
        path = os.path.join(os.path.dirname(__file__), "index.html")
        self.response.out.write(template.render(path, template_values))    
        
class Examples(webapp.RequestHandler):
    """ Renders the main template."""
    def get(self):
        query = Logo.all()
        

        template_values = { 'title':'AJAX Add (via GET)', 'query':query}
        path = os.path.join(os.path.dirname(__file__), "examples.html")
        self.response.out.write(template.render(path, template_values))

    def post(self):
        url = cgi.escape(self.request.get('url'))
        css = cgi.escape(self.request.get('css'))
        word = cgi.escape(self.request.get('word'))
        l = Logo.gql("WHERE url = :1", url)
        if (l.count() < 1):
            logo = Logo(url=url, css=css, word=word)
            logo.put()
        self.redirect('/examples')


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
