# Steps

connect to internet via phone USB tethering (top left USB-C)

open firewall, install dependencies
```shell
cd /home/matthias/nixconf
git checkout dns_cors_talk
nixos-rebuild test --flake /home/matthias/nixconf --use-remote-sudo
```


start hotspot
```shell
sudo create_ap wlp0s20f3 enp0s20f0u1i1 vorfuehreffekt supergeheim
```
start presentation

have people connect

start frontend
```shell
cd /home/matthias/Documents/knowledge/Talks/ssl_cors_proxy_101/code/ssl_cors_proxy_frontend;
npm run dev;
```
visit `http://localhost:5173/` or `http://192.168.12.1:5173/` or `http://vorführeffekt.de:5173/`

start backend
```shell
cd /home/matthias/Documents/knowledge/Talks/ssl_cors_proxy_101/code/ssl_cors_proxy_backend;
deno --allow-net server.ts;
```
present

explain reverse proxy

solve CORS using nginx

present

explain ssl certificates

generate self signed certs and show problems

explain how to buy a domain and obtain API key 
- [domainfactory dns server settings](https://admin.df.eu/kunde/index.php?module=nameserver&dn=3601771)
- [cloudflare](https://dash.cloudflare.com/4d499a973c4d2a9251a508ec6ee1a285/home/domains) &rarr; [profile - api tokens](https://dash.cloudflare.com/profile/api-tokens)

- enable cron
- install openssl + socat
- install acme.sh: run `curl https://get.acme.sh | sh -s email=matthias.vombruch@mathema.de`
- follow https://www.cyberciti.biz/faq/issue-lets-encrypt-wildcard-certificate-with-acme-sh-and-cloudflare-dns/
   - `mkdir -pv /etc/nginx/ssl/vorführeffekt.de/`
   - `acme.sh --set-default-ca --server letsencrypt`
   - `export CF_Token="Your_Cloudflare_DNS_API_Key_Goes_here"`
   - `acme.sh --issue --dns dns_cf --keylength ec-384 -d vorführeffekt.de -d '*.vorführeffekt.de'`
   - now certificates are lying around somewhere