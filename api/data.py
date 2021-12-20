from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

  def do_POST(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    # return some string here or whatever 
    self.wfile.write("Wow you aren't gonna make shit from this lmao").encode()
    return