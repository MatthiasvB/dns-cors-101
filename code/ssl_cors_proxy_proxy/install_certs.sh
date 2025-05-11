#!/usr/bin/env bash

rootdir="/home/matthias/Documents/knowledge/Talks/ssl_cors_proxy_101/code/ssl_cors_proxy_proxy"
acmedir="$HOME/.acme.sh"

DOMAIN="vorführeffekt.de"
CONFIG_ROOT="/etc/nginx/ssl/${DOMAIN}"
mkdir -pv "$CONFIG_ROOT"
$acmedir/acme.sh -d "$DOMAIN" \
--install-cert \
--reloadcmd "$rootdir/reload_nginx.sh" \
--fullchain-file "${CONFIG_ROOT}/$DOMAIN.fullchain.cer" \
--key-file "${CONFIG_ROOT}/$DOMAIN.key" \
--cert-file "${CONFIG_ROOT}/$DOMAIN.cer"
