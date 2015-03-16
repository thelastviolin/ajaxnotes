import webapp2
import os

from google.appengine.ext.webapp import template

def render_template(handler, templatename, templatevalues):
	path = os.path.join(os.path.dirname(__file__), 'templates/' + templatename)
	html = template.render(path, templatevalues)
	handler.response.out.write(html)

class MainHandler(webapp2.RequestHandler):
    def get(self):
    	template_params = {

    	}
        render_template(self, 'newnote.html', template_params)


app = webapp2.WSGIApplication([
    ('/newnote.html', MainHandler)
], debug=True)