{
  # Basic ACME setup (DNS-01 via Cloudflare)
  security.acme = {
    acceptTerms = true;
    defaults = {
      email = "matthias.vombruch@gmx.de";
      dnsProvider = "cloudflare";
      credentialFiles = {
        CF_DNS_API_TOKEN_FILE = "/etc/secrets/nixos_acme/cf_token";
      };
    };
    # This is probably not needed, but just in case
    certs = {
      "xn--vorfhreffekt-glb.de" = {
        extraDomainNames = [
          # "whatever.vorführeffekt.de"
        ];
      };
    };
  };

  services.nginx = {
    enable = true;
    recommendedProxySettings = true; # adds a bunch of headers

    # Insert your CORS map into the http { } block
    commonHttpConfig = ''
      map $http_origin $cors_origin {
        default "";
        "~^https?://(frontend?|backend)\.(vorführeffekt|xn--vorfhreffekt-glb)\.de$" "$http_origin";
      }
    '';

    virtualHosts = {
      # FRONTEND vhost (no CORS needed here)
      "frontend.xn--vorfhreffekt-glb.de" = {
        # serverAliases = [ "frontend.vorführeffekt.de" ];

        # implicit HTTP + HTTPS via enableACME/forceSSL
        forceSSL    = true;
        enableACME  = true;   # use DNS-01 via security.acme
        acmeRoot    = null;   # no http-01 challenge path

        locations."/" = {
          proxyPass = "http://localhost:5173";
        };
      };

      # BACKEND vhost
      "backend.xn--vorfhreffekt-glb.de" = {
        # serverAliases = [ "backend.vorführeffekt.de" ];

        # implicit HTTP + HTTPS
        forceSSL    = true;
        enableACME  = true;
        acmeRoot    = null;

        locations."/" = {
          extraConfig = ''
            # Handle preflight requests
            if ($request_method = OPTIONS) {
              add_header Access-Control-Allow-Origin   $cors_origin;
              add_header Access-Control-Allow-Methods  "GET, POST, OPTIONS, PUT, DELETE";
              add_header Access-Control-Allow-Headers  "*";
              add_header Access-Control-Max-Age        86400;
              add_header Content-Length               0;
              add_header Content-Type                 "text/plain; charset=UTF-8";
              return 204;
            }

            # CORS for actual requests
            add_header Access-Control-Allow-Origin  $cors_origin always;
            add_header Access-Control-Allow-Credentials true;
          '';
          proxyPass = "http://localhost:3000";
        };
      };
    };
  };
}
