#!/bin/bash
# mongodbがローカルで動いてる想定。
mongo kuninushi --eval "db.infra.drop()"
mongo kuninushi --eval "db.uni.drop()"
mongo kuninushi --eval "db.fabric.drop()"
