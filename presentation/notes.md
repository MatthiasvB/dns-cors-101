# Talk
## Title

## Why though

## SSL
Secure sockets layer

- encryption
   - can not listen
   - can not tamper
- authenticity
   - is who I think they are

### Authenticity how?
- Your browser is hardcoded to trust a bunch of "Root Certificate Authorities"
- Root CAs have ways to verify that you control a given domain
- They let you prove that. They give you a certificate, which is derived from their root certificate, which the browser verifies and trusts
- The entire internet is built on a bunch of implicitly trusted entities
- Control them, know everything
- Cool

## CORS
- not _anyone_ can fuck with my API
   - **CSRF** Cross Site Request Forgery &hyphen; sends request to my backend from different site. Could screw with data, make payments, ...
   - could request sensitive data using cached credentials
   - could use my (expensive) premium API for their own services

## Note on SSL vs TLS
TLS has
- better encryption
- better handshakes, not vulnerable to downgrade attacks
- formalized key generation
- protects better against chosen-ciphertext attacks
- better performance
- forward secrecy (session keys can not be retroactively stolen)
- better error handling and well-defined states
- more extensible

## Do we want that?
Yes we want that

## Do we want to deal with that?
No we don't

## Do we have to 
Yes we do

But there are better and worse methods

## What's the pain?
### TLS
Transport layer security

- Adding TLS to code can be fiddly
- Everything that has to do with security is
   - poorly documented
   - complicated
   - awful to use because the code is written by academics who don't use their APIs
- Even if we get the code right self-signed certificates are a huge pain because
   - Need to accept security risk
   - Also need to accept security risk for backend certificate but browsers don't tell us that
   - don't provide trust (authenticity), only encryption

### CORS
Cross origin resource sharing

- Easiest to "fix" by simply disabling using wildcard `*`
- Proper configuration needs know domain names, so needs to be configurable and is runtime environment dependent

## Solution?
Don't do it

Then do it

## Reverse _what_?
Reverse proxy

- you don't talk to my app
- you talk to my nginx
- nginx talks to my app
   - and abstracts all my internal port mappings away
   - provides all sorts of neat stuff
   - can _also_ serve files / web apps if you want
   - can respond to `OPTIONS` requests and add headers for CORS
   - can be the TLS endpoint (and talk without encryption within my host / private network)

Actual applications have no clue that CORS and TLS exist

## But _how_?
- Need to configure nginx &rarr; will show minimal configuration
- Need to get _official_ certificates which my browser trusts &rarr; will show how to automate using `acme.sh` and even easier "NixOS" if we have time

## Life coding
- run apps
- let users visit dev servers directly
- start nginx without TLS
- generate self-signed certificates
- enable nginx TLS
- let users visit
   - accept security risk
   - still fucked
   - visit backend
   - accept security risk
   - works
- generate official certificates
- let users visit
   - no issue
