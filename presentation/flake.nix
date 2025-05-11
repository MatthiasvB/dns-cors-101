{
  description = "Flake containing NodeJS infrastructure";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
        version = "1.0.0";
      in {
        devShells = with pkgs; rec {
          presentation = mkShell {
            # Set env var
            VERSION = version;

            packages = [
              importNpmLock.hooks.linkNodeModulesHook
              nodejs
              (writeShellScriptBin "deploy" ''
                #!${bash}/bin/bash

                # colors
                green="\e[0;32m"
                reset="\e[0m"

                name="nixxer-docs"

                echo "You need to be logged in to our internal container registry. If this script fails, try"
                echo "  docker login nexus.matheads.de:8083"
                echo "with your usual MATHEMA credentials"

                echo "docker login nexus.matheads.de:8083" > /dev/clipboard
                echo "(the login command has been saved to your clipboard [at least if you are using git bash under Windows])"

                remotename="$name:${version}"
                remoteurl="nexus.matheads.de:8083/$remotename"
                docker build . -t "$name"
                docker tag "$name" $remoteurl
                echo "docker push $remoteurl"
                docker push $remoteurl

                echo "Pushed to $remoteurl"
                echo
                echo -e "''${green}$remotename''${reset} has been pushed to the registry. Let the admin's know to re-deploy it"
              '')
            ];

            npmDeps = importNpmLock.buildNodeModules {
              npmRoot = ./.;
              inherit nodejs;
            };

            shellHook = ''
              # colors
              black="\e[0;30m"
              red="\e[0;31m"
              green="\e[0;32m"
              yellow="\e[0;33m"
              blue="\e[0;34m"
              magenta="\e[0;35m"
              cyan="\e[0;36m"
              white="\e[0;37m"
              reset="\e[0m"

              echo
              echo "Buggy tooling does not reliably run setup hook \"linkNodeModulesHook\": Running it explicitly...";
              linkNodeModulesHook;
              echo
              echo "VuePress development environment is ready.";
              echo -e "''${green}To start the dev server, run: npm run docs:dev$reset";
              echo -e "To deploy, run \"''${red}deploy''${reset}\" and let the admins know"
              echo "(don't forget to adjust the \"version\" in the flake.nix)"
              echo
            '';
          };
          default = presentation;
        };
      }
    );
}
