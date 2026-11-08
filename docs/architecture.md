# Architecture

The project is organized around a small local catalog:

- `assets/skins-database.json` contains normalized skin metadata.
- `index.html`, `styles.css` and `app.js` provide the browser preview of the interface.
- `docs/screenshots/` contains the README presentation images.
- A future native client can reuse the same JSON data model with C++17, Dear ImGui and CMake.
