#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os

from model.Note import Note
from google.appengine.ext.webapp import template


def render_template(handler, templatename, templatevalues):
    path = os.path.join(os.path.dirname(__file__), 'templates/' + templatename)
    html = template.render(path, templatevalues)
    handler.response.out.write(html)


class MainHandler(webapp2.RequestHandler):
    def get(self):
        notes = Note.all()
        notes_found = False
        if notes is None or notes.count() == 0:
            notes_found = False
        else:
            notes_found = True
        template_params = {
            'notes_found': notes_found,
            'notes': notes
        }
        render_template(self, 'index.html', template_params)


class EditHandler(webapp2.RequestHandler):
    def get(self):
        title = ""
        lastmodified = ""
        
        template_params = {

        }
        render_template(self, 'edit.html', template_params)

    def post(self):
        title = self.request.get('title')
        date = self.request.get('date')
        text = self.request.get('text')
        simpledate = self.request.get('simpledate');
        new_note = Note(title=title, lastmodified=date, day=simpledate, content=text)
        new_note.put()
        self.redirect("/")

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/edit.html', EditHandler)
], debug=True)
