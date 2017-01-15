# -*- coding: utf-8 -*-

import os
import logging
from flask import Flask, render_template, request, Response, jsonify
import json
from functools import wraps
import datetime
import HTMLParser


app = Flask(__name__)
app.debug = True#'DEBUG' in os.environ



######################### WEBSITE #########################
def test(msg):
    return "Your message: {}".format(msg.upper())

@app.route('/',methods=["POST"])
def hello():
    data = request.json
    clean_msg = HTMLParser.HTMLParser().unescape(data.get("msg"))
    new_msg = test(clean_msg)
    ret = {"status":200,"response":new_msg}
    return jsonify(**ret)

if __name__ == "__main__":
    app.run(port=5000)
