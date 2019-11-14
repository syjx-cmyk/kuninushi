# -*- coding: UTF-8 -*-

import requests
import urllib.parse
import json

class APIC():
    # urlを設定。
    # user, passwordからaaaLoginを実行。cookie取得してセッション開始。
    def __init__(self, url, user, password, ignore_ssl_verify=False):
        self._url = url
        self._aaaLogin = {
                "aaaUser": {
                    "attributes": {
                        "name": user,
                        "pwd": password
                    }
                }
            }
        if ignore_ssl_verify:
            # SSL証明書の正当性検証を無視
            self._ssl_verify = False
        
        aaaLogin_url = \
            urllib.parse.urljoin(self._url, "/api/aaaLogin.json")

        response = \
            requests.post(
                    aaaLogin_url, 
                    data=json.dumps(self._aaaLogin),
                    verify=self._ssl_verify)

        imdata = self.__parse_apic_response(response)

        # ログイン失敗時例外raising
        if "error" in imdata[0]:
            message = \
                imdata[0]['error']['attributes']['text']
            raise ApicAAALoginError(message)

        self._cookies = response.cookies

    def get(self, path, params={}):
        url = \
            urllib.parse.urljoin(self._url, path)

        response = \
            requests.get(
                    url, 
                    params=params,
                    verify=self._ssl_verify,
                    cookies=self._cookies)

        imdata = self.__parse_apic_response(response)

        # ログイン失敗時例外raising
        if "error" in imdata[0]:
            message = \
                imdata[0]['error']['attributes']['text']
            raise ApicAPIGetError(message)

        return imdata

    def post(self, path, payload):
        url = \
            urllib.parse.urljoin(self._url, path)

        response = \
            requests.post(
                    url, 
                    json.dumps(payload),
                    verify=self._ssl_verify,
                    cookies=self._cookies)


        imdata = self.__parse_apic_response(response)

        return imdata

    # APICレスポンスからimdata部分取り出しmethod
    def __parse_apic_response(self, response):
        full_data = json.loads(response.text)
        imdata = full_data['imdata']
        return imdata

class ApicAAALoginError(Exception):
    def __init__(self, message):
        self.message = message

class ApicAPIGetError(Exception):
    def __init__(self, message):
        self.message = message

class ApicAPIPostError(Exception):
    def __init__(self, message):
        self.message = message

