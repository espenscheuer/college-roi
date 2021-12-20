from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    degree = str(self.headers.get('degree'))
    major = str(self.headers.get('major'))
    university = str(self.headers.get('university'))
    # return some string here or whatever 
    self.wfile.write(str('You are going to be sooooo broke after graduating from ' + university + " with a " + degree + " in " + major + " XD").encode())
    return