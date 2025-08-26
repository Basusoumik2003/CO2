# 🌱 Carbon Positive  

> **Blockchain-Powered Carbon Credit & Sustainability Platform**  
Empowering individuals and organizations to measure, reduce, and offset their carbon footprint through **transparent, secure, and gamified eco-friendly actions**.  

---

## 📖 Table of Contents
1. [Overview](#-overview)  
2. [Vision](#-vision)  
3. [Features](#-features)  
4. [System Architecture](#-system-architecture)  
5. [Tech Stack](#-tech-stack)  
6. [Microservices](#-microservices)  
7. [Installation & Setup](#️-installation--setup)  
8. [API Documentation](#-api-documentation)  
9. [Data Flow Example](#-data-flow-example)  
10. [Screenshots & Diagrams](#-screenshots--diagrams)  
11. [Roadmap](#-roadmap)  
12. [Security](#-security)  
13. [Contributing](#-contributing)  
14. [License](#-license)  
15. [Author](#-author)  
16. [Organization Dashboard](#-organization-dashboard)  

---

## 🌍 Overview
**Carbon Positive** is a sustainability platform that leverages **blockchain** and **AI-driven analytics** to reward eco-friendly activities such as using EVs, planting trees, and generating renewable energy.  

Every action is recorded on-chain, ensuring **immutability, transparency, and trust**.  

---

## 🎯 Vision
- ✅ **Promote Carbon Neutrality**: Encourage individuals and companies to reduce emissions.  
- ✅ **Gamify Sustainability**: Reward eco-friendly actions with credits, badges, and challenges.  
- ✅ **Transparency via Blockchain**: Ensure every credit is verifiable and tamper-proof.  
- ✅ **Scalable Green Tech Ecosystem**: Allow integration of EVs, solar panels, and IoT sensors.  

---

## 🚀 Features
- 🔐 **Secure Authentication** – User login/signup with JWT & OAuth  
- 🚗 **EV Tracking** – Add & manage Electric Vehicle details  
- 🌳 **Tree Plantation Ledger** – Record tree data (height, species, geo-location) on **Ethereum/Hyperledger** with **IPFS storage**  
- ☀️ **Solar Data Integration** – Track solar energy contributions  
- 🏆 **Activity Section** – Gamified challenges with eco-badges  
- 📝 **Blog & Knowledge Hub** – Share sustainability stories, like/comment, IPFS storage  
- 📊 **Analytics Dashboard** – Carbon credits earned, CO₂ saved, impact reports  
- 🔔 **Notification Service** – Real-time activity updates via Node.js + Bull Queue  
- 📂 **File Management** – Secure media uploads (tree images, EV docs)  
- ⛓️ **Blockchain Verification** – Immutable credit & asset records  

---

## 🏗️ System Architecture
```mermaid
graph TD
    A[Frontend - React] --> B[Auth Service - Node/Express/JWT]
    A --> C[EV/Tree/Solar Services - Node/PostgreSQL]
    A --> D[Carbon Credit Service - Node/Express/PostgreSQL]
    A --> E[Blockchain Integration - Node + Ethers.js + IPFS]
    A --> F[Blog Service - Node + MongoDB]
    A --> G[Notification Service - Node + Bull Queue]
    A --> H[Analytics Service - Python + Pandas/NumPy]
    A --> I[Org Dashboard - Node/Postgres + APIs]