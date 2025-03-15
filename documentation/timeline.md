# 📅 Project Timeline - Peer Tutoring SaaS

## 🚀 Phase 1: Project Initiation (15 March 2025)

### ✅ Completed:

- Created GitHub repository
    - [Peer Tutoring Repositoy](https://github.com/indodanazwide/peer-tutoring.git)

- Initialized project structure (Frontend, Backend, Documentation)
    ```sh
    tree -L 2

    ├── client
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── node_modules
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── public
    │   ├── README.md
    │   ├── src
    │   └── vite.config.js
    ├── documentation
    │   └── sql.md
    ├── LICENSE
    ├── README.md
    └── server
        └── venv
    ```

- Set up `.gitignore`, `README.md`, and `LICENSE`
    ```sh
    touch .gitignore
    touch README.md
    touch LICENSE
    ```

- Installed dependencies for both frontend (React) and backend (Flask)
    ```sh
    . # For Vite + React
    npm create vite@latest  
    cd client && npm install && cd ..

    . # For Flask
    mkdir server && cd server && python3 -m venv venv && . venv/bin/activate && pip install Flask && cd ..
    ```

- Commit my initial setup
    ---
    