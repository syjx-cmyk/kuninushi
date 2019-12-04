# -*- coding: UTF-8 -*-
# kuninushiのフロントエンドからaxiosでAPICにpostできなかったので作った。
# jsonをpostすれば、APICの方にそのまま転送する。
# 仲介みたいな感じで動く。

import requests
import json
import dotenv
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

import apic

dotenv.load_dotenv()

APIC_URL   = os.environ.get("APIC_URL")
APIC_USER  = os.environ.get("APIC_USER")
APIC_PASS  = os.environ.get("APIC_PASS")
IGNORE_SSL = os.environ.get("IGNORE_SSL")

app = Flask(__name__)
CORS(app)

# request bodyのjsonをAPICのuni.jsonにPOSTする。
@app.route('/', methods=['POST'])
def apic_post():
    payload = request.json
    print(payload)

    api = apic.APIC(APIC_URL, APIC_USER, APIC_PASS, IGNORE_SSL)

    data = api.post("/api/mo/uni.json", payload)
    #[TODO] len(data)が0ならOK, 1以上ならエラーメッセージ返すよう修正しろ。
    result = {"text": "Unknown Error"} 
    if len(data) == 0:
        result = {"text": "Success."} 
    if len(data) == 1:
        result = {"text": data[0]['error']['attributes']['text']}
    return result

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3010)
