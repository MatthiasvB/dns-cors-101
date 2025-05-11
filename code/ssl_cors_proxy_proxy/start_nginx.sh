#!/usr/bin/env bash

rootpath="/home/matthias/Documents/knowledge/Talks/ssl_cors_proxy_101/code/ssl_cors_proxy_proxy";
errorfile="e"

nginx -p $rootpath/ -c conf/nginx.conf -e $errorfile
