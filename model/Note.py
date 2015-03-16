from google.appengine.ext import db
import datetime

class Note(db.Model):
    title = db.StringProperty()
    lastmodified = db.DateTimeProperty()
    content = db.TextProperty()
