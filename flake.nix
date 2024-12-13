{
  description = "Docusaurus development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and npm
            nodejs_20
            nodePackages.npm

            # Docusaurus and development tools
            nodePackages.yarn
            nodePackages.typescript
            nodePackages.prettier

            # Optional but useful tools
            git
            curl
            wget
          ];

          # Shell hook to set up the environment
          shellHook = ''
            echo "🚀 Docusaurus Development Environment"
            echo "Node version: $(node --version)"
            echo "npm version: $(npm --version)"

            # Create .env file if it doesn't exist
            if [ ! -f .env ]; then
              touch .env
              echo "Created .env file"
            fi

            # Function to create a new Docusaurus site
            create() {
              if [ -z "$1" ]; then
                echo "❌ Error: Please provide a project name"
                echo "Usage: create my-website"
                return 1
              fi

              npx create-docusaurus@latest "$1" classic
            }

            echo "💡 Use 'create <project-name>' to create a new Docusaurus site"
            echo "   Example: create my-wiki"
          '';
        };

        # Optional: Add a formatter
        formatter = pkgs.nixpkgs-fmt;
      }
    );
}
