- Domain kaufen (z.B. bei df.eu)
- Domain bei "Anbieter" hinzufügen, der dns-01 API unterstützt. Z.B. Cloudflare (choose free plan)
- Follow instructions (disable DNSSEC, set cloudflare dns servers)
- Create API token (I could probably use pre-existing Zone.DNS All Zones)
- Add necessary env vars to traefik docker-compose.yaml and .env file

- create hotspot `sudo create_ap wlp0s20f3 enp0s20f0u1i1 vorfuehreffekt supergeheim`


Investigate acme.sh instead of traefik

- enable cron
- install openssl + socat
- run `curl https://get.acme.sh | sh -s email=my@example.com`
- follow https://www.cyberciti.biz/faq/issue-lets-encrypt-wildcard-certificate-with-acme-sh-and-cloudflare-dns/
   - `mkdir -pv /etc/nginx/ssl/vorführeffekt.de/`
   - `acme.sh --set-default-ca --server letsencrypt`
   - `export CF_Token="Your_Cloudflare_DNS_API_Key_Goes_here"`
   - `acme.sh --issue --dns dns_cf --keylength ec-384 -d vorführeffekt.de -d '*.vorführeffekt.de'`
   - now certificates are lying around somewhere