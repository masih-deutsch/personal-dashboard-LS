# ⚡ Productivity & Life Dashboard

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Zustand-430098?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
</div>

<br />

A powerful, full-featured personal productivity dashboard built with **React**, featuring an interactive Daily Diary and a structured To-Do List manager. 

This project demonstrates scalable architecture using **Zustand** for global state management with automated local persistence, and **React Hook Form** for seamless, high-performance form handling.

---

## ✨ Key Features

* **🗂️ Dual-Module Dashboard:** Smooth navigation between a visual Daily Diary grid and a tabular To-Do List using dynamic routing.
* **🐻 Zustand Global Store:** Highly scalable state management with middleware persistence (`localStorage`), custom sorting methods, and clean immutable updates.
* **📝 Advanced Form Handling:** Built with **React Hook Form** inside native HTML5 `<dialog>` modals for efficient data validation, entry creation, and live editing.
* **⚡ Smart Sorting & Filtering:** Multi-criteria sorting allowing users to order tasks and diary entries instantly by Title, Date, or Completion Status.
* **🎨 Modern & Interactive UI:** Styled with **Tailwind CSS** and **DaisyUI**, featuring responsive tables, glassmorphism modal backdrops, and 3D hover animations.

---

### Live Demo: https://masihcodes.github.io/personal-dashboard-LS/

___

## 💡 What I Learned

* **Replacing prop-drilling and Context API** with `Zustand` to manage complex global state and persistence seamlessly.
* **Leveraging `toSorted()` and immutable array updates** within `Zustand` store actions for predictable UI re-renders.
* **Implementing high-performance form validations and resets** using `React Hook Form` (`useForm`, `watch`, `reset`).
* **Controlling native HTML5 `<dialog>` elements** programmatically using React `useRef` and `useEffect` hooks.

___

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/masihcodes/personal-dashboard-LS.git
cd personal-dashboard-LS
npm install
