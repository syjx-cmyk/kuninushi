# -*- coding: UTF-8 -*-

# .envに書いたURLのAPICから全データ取得してKuninushi_APIにぶち込む。
# これ実行する前にinit.shを実行するべきなんですわ。

import apic
import dotenv
import os
import json
import requests
import urllib.parse

dotenv.load_dotenv()

APIC_URL   = os.environ.get("APIC_URL")
APIC_USER  = os.environ.get("APIC_USER")
APIC_PASS  = os.environ.get("APIC_PASS")
IGNORE_SSL = os.environ.get("IGNORE_SSL")
KUNINUSHI_URL = os.environ.get("KUNINUSHI_URL")

api = apic.APIC(APIC_URL, APIC_USER, APIC_PASS, IGNORE_SSL)

# INFRA
#
data = api.get("/api/mo/uni/infra.json", params={"query-target": "subtree", "rsp-prop-include": "config-only"})
url = urllib.parse.urljoin(KUNINUSHI_URL, '/infra')
response = requests.post(
               url, 
               json.dumps(data), 
               headers={'Content-Type': 'application/json'}
           )
print(response.text)

# TENANT
# 
data = api.get("/api/mo/uni.json", params={"query-target": "subtree", "rsp-prop-include": "config-only"})
url = urllib.parse.urljoin(KUNINUSHI_URL, '/uni')
response = requests.post(
               url, 
               json.dumps(data), 
               headers={'Content-Type': 'application/json'}
           )
print(response.text)

# FABRIC 
# 
data = api.get("/api/mo/uni/fabric.json", params={"query-target": "subtree", "rsp-prop-include": "config-only"})
url = urllib.parse.urljoin(KUNINUSHI_URL, '/fabric')
response = requests.post(
               url, 
               json.dumps(data), 
               headers={'Content-Type': 'application/json'}
           )
print(response.text)

