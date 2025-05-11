#!/usr/bin/env bash

# Load environment variables from a separate file
source traefik.env

# Then run Traefik
exec ./traefik --configFile=traefik.yaml

