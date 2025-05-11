{
  description = "DevShells for backend (Deno) and frontend (Svelte/Skeleton UI) using nixpkgs-unstable";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
      in {
        devShells = {
          proxy = pkgs.mkShell {
            packages = [pkgs.nginx pkgs.openssl pkgs.linux-wifi-hotspot];
          };

          backend = pkgs.mkShell {
            packages = [pkgs.deno];
          };

          frontend = pkgs.mkShell {
            packages = [
              pkgs.nodejs
              pkgs.importNpmLock.hooks.linkNodeModulesHook
            ];

            npmDeps = pkgs.importNpmLock.buildNodeModules {
              npmRoot = ./ssl_cors_proxy_frontend;
              inherit (pkgs) nodejs;
            };
          };
        };
      }
    );
}
