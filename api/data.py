from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    # return some string here or whatever 
    self.wfile.write(str('You are going to be sooooo broke XD').encode())
    return