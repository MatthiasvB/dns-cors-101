#!/usr/bin/env bash
set -euo pipefail

echo "You probably want to run this as root and used your domain\
as first argument and /etc/nginx/ssl as second argument.";

# Default values
DOMAIN="${1:-vorführeffekt.de}"
TARGET_DIR_IN="${2:-/etc/nginx/ssl}"
TARGET_DIR="$TARGET_DIR_IN/${DOMAIN}"

# Ensure output directory exists
mkdir -pv "$TARGET_DIR"

echo "[*] Generating self-signed certs for $DOMAIN"
echo "[*] Output directory: $TARGET_DIR"

# Paths
KEY_FILE="$TARGET_DIR/$DOMAIN.key"
CERT_FILE="$TARGET_DIR/$DOMAIN.cer"
CA_FILE="$TARGET_DIR/ca.cer"
FULLCHAIN_FILE="$TARGET_DIR/${DOMAIN}.fullchain.cer"

# Generate ECC private key
echo "[*] Generating ECC key..."
openssl ecparam -genkey -name prime256v1 -out "$KEY_FILE"

# Generate self-signed certificate
echo "[*] Generating self-signed certificate..."
openssl req -x509 -new -nodes \
  -key "$KEY_FILE" \
  -sha256 -days 365 \
  -out "$CERT_FILE" \
  -subj "/C=DE/ST=BY/L=Erlangen/O=Tutorial/OU=SelfSigned/CN=$DOMAIN"

# Use the same cert as "CA" since it's self-signed
cp "$CERT_FILE" "$CA_FILE"

# Create fullchain.cer
cat "$CERT_FILE" "$CA_FILE" > "$FULLCHAIN_FILE"

# Output summary
echo "[✓] Your cert is in: $CERT_FILE"
echo "[✓] Your cert key is in: $KEY_FILE"
echo "[✓] The intermediate CA cert is in: $CA_FILE"
echo "[✓] And the full-chain cert is in: $FULLCHAIN_FILE"
