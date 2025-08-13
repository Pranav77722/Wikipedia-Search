<h1 align="center">📚 Wikipedia Search Web App</h1>

<p align="center">
  <em>Search Wikipedia articles in real time with a clean, modern UI.</em>
</p>

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" /></a>
</p>

---

<p align="center">
  <a href="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/" target="_blank"><img src="https://res.cloudinary.com/dcy10jvpr/image/upload/c_thumb,w_600,g_face/v1755106480/Screenshot_2025-08-13_230110_gdizpu.png" alt="Wikipedia Search Web App – Live Preview" /></a>
</p>

<p align="center">
  <strong><a href="https://pranavsearch.ccbp.tech/" target="_blank">🚀 Live Demo</a></strong>
  &nbsp;•&nbsp;
  <a href="#-installation--run-locally">Install Locally</a>
  &nbsp;•&nbsp;
  <a href="#-features">Features</a>
  &nbsp;•&nbsp;
  <a href="#-project-structure">Structure</a>
</p>

---

## 📝 Project Description

The **Wikipedia Search Web App** is a lightweight, responsive search tool that fetches live Wikipedia articles using the **CCBP Wikipedia Search API**. It displays article **titles**, **URLs**, and **short descriptions** in a clean interface, with a **loading spinner** and **smooth animations** for better UX.

> 🔗 **CCBP Wikipedia Search API**: `https://apis.ccbp.in/wiki-search` (JSON response)

---

## ✨ Features

* 🔍 **Real-time Search** — Press **Enter** to fetch results instantly.
* 📄 **Rich Article Cards** — Title, clickable URL, and description.
* ⏳ **Loading Spinner** — Clear feedback during fetch.
* 🎨 **Modern UI** — Responsive layout with hover effects.
* ⚡ **Lightweight** — Built with vanilla **HTML**, **CSS**, **JavaScript** (optional **Bootstrap 4** styles).

---

## 📂 Project Structure

```text
.
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
└── script.js       # API fetching and DOM manipulation
```

---

## 🛠 Integration Steps (HTML + CSS + JS)

### 1) Link CSS in `index.html`

```html
<!-- Inside <head> -->
<link rel="stylesheet" href="style.css" />
```

### 2) Link JS before closing `</body>`

```html
<!-- Right before </body> -->
<script src="script.js"></script>
```

### 3) File Placement

* Keep `index.html`, `style.css`, and `script.js` in the same folder (or update the paths accordingly).
* Ensure JS is loaded **after** the DOM (by placing the script tag at the end or using `defer`).

---

## 🚀 Live Demo

* **GitHub Pages:** [https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)

> Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name. The image preview above is **clickable** and points to the same Live Demo URL.

---

## 📥 Installation & Run Locally

### 1) Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

### 2) Navigate into the folder

```bash
cd YOUR-REPO-NAME
```

### 3) Open `index.html`

* **Double‑click** `index.html`, or run one of:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux (GNOME)
xdg-open index.html
```

---

## 🧩 Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Bootstrap 4** (optional)
* **Fetch API**

---

## 🌐 API Usage (example snippet)

```js
const endpoint = "https://apis.ccbp.in/wiki-search?search=";
const query = encodeURIComponent(searchInput.value.trim());
const url = `${endpoint}${query}`;

spinner.classList.remove("hidden");

fetch(url)
  .then(res => res.json())
  .then(data => {
    // data.search_results -> array of results
    renderResults(data.search_results);
  })
  .catch(console.error)
  .finally(() => spinner.classList.add("hidden"));
```

---

## 📸 Preview

<p align="center">
  <a href="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/" target="_blank">
    <img src="https://res.cloudinary.com/dcy10jvpr/image/upload/c_thumb,w_600,g_face/v1755106480/Screenshot_2025-08-13_230110_gdizpu.png" alt="Wikipedia Search Preview" />
  </a>
</p>

---

## 📧 Contact

**Pranav Khaire**
📩 Email: <a href="mailto:khairepranav246@gmail.com">[khairepranav246@gmail.com](mailto:khairepranav246@gmail.com)</a>
🔗 LinkedIn: <a href="https://www.linkedin.com/in/pranav-khaire-465664248/" target="_blank">Pranav Khaire</a>

---

<p align="center">Made with ❤️ by <strong>Pranav Khaire</strong></p>
