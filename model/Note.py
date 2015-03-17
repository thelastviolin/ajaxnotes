from google.appengine.ext import db

class Note(db.Model):
    title = db.StringProperty()
    lastmodified = db.TextProperty()
    content = db.TextProperty()
    day = db.TextProperty()
