import os
from flask import Flask, render_template, request, Response, jsonify
import json

app = Flask(__name__)
app.debug = True

@app.route('/')
def aabglov():
    return render_template('index.html')

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=443)
