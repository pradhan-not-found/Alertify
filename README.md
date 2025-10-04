# Alertify 🛡️

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Status: Hackathon Build](https://img.shields.io/badge/status-hackathon_build-success.svg)
![Tech: Node.js](https://img.shields.io/badge/tech-Node.js-green.svg)
![Frontend: JavaScript](https://img.shields.io/badge/frontend-JavaScript-yellow.svg)

An intelligent AI agent for real-time brand reputation management and crisis prevention. Built in 3 days for the AI Agent Hackathon.

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Roadmap](#future-roadmap)
- [License](#license)
- [Contact](#contact)

## About The Project

In today's fast-paced digital landscape, brand reputation is built over years but can be lost in minutes. Manually tracking mentions across fragmented social channels is a reactive strategy that often fails. By the time a PR crisis is spotted, it's often too late to control the narrative.

**Alertify** is the solution. It's an autonomous AI agent that serves as a unified command center for brand reputation management. It transforms a high-stakes, manual process into a proactive, intelligent workflow, allowing teams to monitor, analyze, and react to customer feedback in seconds, not hours.

## Key Features

- **Secure Authentication:** User registration and login system.
- **Multi-Platform Integration:** Connects to simulated APIs for Twitter, Google Reviews, and Reddit.
- **Real-Time Mention Dashboard:** A unified view of all brand mentions, filterable by source, sentiment, and priority.
- **AI-Powered Sentiment Analysis:** An intelligent agent automatically analyzes the sentiment of each post, flagging negative comments as "High Priority" for immediate review.
- **AI-Generated Reply Suggestions:** Utilizes a simulated AI core to generate on-brand, context-aware reply suggestions.
- **Direct Posting to Social Platforms:** Pretends to post replies directly to the source platform with a single click.
- **Competitor Tracking:** Monitor and analyze the social buzz around your competitors.
- **PDF Report Export:** Generate and download a professional summary of brand sentiment and key metrics.

## Tech Stack

This project demonstrates a full-stack application architecture.

**Frontend:**
- HTML5 & CSS3
- **Styling:** Tailwind CSS
- **Core Logic:** Vanilla JavaScript (ES6+)
- **Charting:** Chart.js
- **PDF Generation:** jspdf & html2canvas

**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, Dotenv
- **Simulated API Integrations:** Libraries like `twitter-api-v2` and `google-auth-library` are included to demonstrate a production-ready architecture.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Node.js and npm installed on your machine.
- [Node.js (LTS version recommended)](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/pradhan-not-found/Alertify.git](https://github.com/pradhan-not-found/Alertify.git)
    ```
2.  **Navigate to the backend folder:**
    ```sh
    cd Alertify/backend
    ```
3.  **Install NPM packages:**
    This will install all the backend dependencies listed in `package.json`.
    ```sh
    npm install
    ```
4.  **Create an Environment File:**
    Create a `.env` file in the `backend` folder and copy the contents from `.env.example`. The placeholder keys will work for this demo.

## Usage

1.  **Start the Backend Server:**
    From the `backend` directory, run:
    ```sh
    node server.js
    ```
    You will see a confirmation message in the terminal that the server is running on `http://localhost:3001`.

2.  **Launch the Frontend:**
    Navigate to the root project folder (`Alertify`) and open the `index.html` file in your web browser.

3.  **Run the Demo:**
    - Log in using the pre-filled credentials (`user@example.com` / `password123`).
    - Navigate to the **Settings** page and click a **"Connect"** button to simulate loading data.
    - Explore the Dashboard, Reports, and Competitors pages, which are now populated with demo data.
    - Use the "AI Suggestion" and "Post" buttons on the dashboard cards to see the backend server log simulated AI and API activity in your terminal.

## Project Structure
Of course. A professional README.md is the most important part of your GitHub repository. It's the first thing judges and recruiters will see.

This README is detailed, well-structured, and written to make your "Alertify" project look impressive and complete. It explains the "why," the "what," and most importantly, "how to run it."

Just copy the content below and paste it into the README.md file in your GitHub repository.

Markdown

# Alertify 🛡️

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Status: Hackathon Build](https://img.shields.io/badge/status-hackathon_build-success.svg)
![Tech: Node.js](https://img.shields.io/badge/tech-Node.js-green.svg)
![Frontend: JavaScript](https://img.shields.io/badge/frontend-JavaScript-yellow.svg)

An intelligent AI agent for real-time brand reputation management and crisis prevention. Built in 3 days for the AI Agent Hackathon.

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Roadmap](#future-roadmap)
- [License](#license)
- [Contact](#contact)

## About The Project

In today's fast-paced digital landscape, brand reputation is built over years but can be lost in minutes. Manually tracking mentions across fragmented social channels is a reactive strategy that often fails. By the time a PR crisis is spotted, it's often too late to control the narrative.

**Alertify** is the solution. It's an autonomous AI agent that serves as a unified command center for brand reputation management. It transforms a high-stakes, manual process into a proactive, intelligent workflow, allowing teams to monitor, analyze, and react to customer feedback in seconds, not hours.

## Key Features

- **Secure Authentication:** User registration and login system.
- **Multi-Platform Integration:** Connects to simulated APIs for Twitter, Google Reviews, and Reddit.
- **Real-Time Mention Dashboard:** A unified view of all brand mentions, filterable by source, sentiment, and priority.
- **AI-Powered Sentiment Analysis:** An intelligent agent automatically analyzes the sentiment of each post, flagging negative comments as "High Priority" for immediate review.
- **AI-Generated Reply Suggestions:** Utilizes a simulated AI core to generate on-brand, context-aware reply suggestions.
- **Direct Posting to Social Platforms:** Pretends to post replies directly to the source platform with a single click.
- **Competitor Tracking:** Monitor and analyze the social buzz around your competitors.
- **PDF Report Export:** Generate and download a professional summary of brand sentiment and key metrics.

## Tech Stack

This project demonstrates a full-stack application architecture.

**Frontend:**
- HTML5 & CSS3
- **Styling:** Tailwind CSS
- **Core Logic:** Vanilla JavaScript (ES6+)
- **Charting:** Chart.js
- **PDF Generation:** jspdf & html2canvas

**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, Dotenv
- **Simulated API Integrations:** Libraries like `twitter-api-v2` and `google-auth-library` are included to demonstrate a production-ready architecture.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Node.js and npm installed on your machine.
- [Node.js (LTS version recommended)](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/pradhan-not-found/Alertify.git](https://github.com/pradhan-not-found/Alertify.git)
    ```
2.  **Navigate to the backend folder:**
    ```sh
    cd Alertify/backend
    ```
3.  **Install NPM packages:**
    This will install all the backend dependencies listed in `package.json`.
    ```sh
    npm install
    ```
4.  **Create an Environment File:**
    Create a `.env` file in the `backend` folder and copy the contents from `.env.example`. The placeholder keys will work for this demo.

## Usage

1.  **Start the Backend Server:**
    From the `backend` directory, run:
    ```sh
    node server.js
    ```
    You will see a confirmation message in the terminal that the server is running on `http://localhost:3001`.

2.  **Launch the Frontend:**
    Navigate to the root project folder (`Alertify`) and open the `index.html` file in your web browser.

3.  **Run the Demo:**
    - Log in using the pre-filled credentials (`user@example.com` / `password123`).
    - Navigate to the **Settings** page and click a **"Connect"** button to simulate loading data.
    - Explore the Dashboard, Reports, and Competitors pages, which are now populated with demo data.
    - Use the "AI Suggestion" and "Post" buttons on the dashboard cards to see the backend server log simulated AI and API activity in your terminal.

## Project Structure

/Alertify
├── backend/
│   ├── routes/
│   │   ├── api.js          # Handles AI and social media post routes
│   │   └── auth.js         # Handles simulated login/registration routes
│   ├── services/
│   │   ├── aiService.js    # Simulates AI text generation
│   │   └── socialService.js # Simulates posting to social media
│   ├── .env.example        # Template for environment variables
│   ├── package.json        # Node.js project dependencies
│   └── server.js           # Main Express.js server file
│
├── .gitignore              # Tells Git which files to ignore (like .env)
├── index.html              # The single-page frontend application
└── README.md               # This file


## Future Roadmap

- [ ] Transition from simulated to live API integrations for all social platforms.
- [ ] Implement a real database (like PostgreSQL or MongoDB) for user and mention data.
- [ ] Develop the AI agent further to allow for fully automated replies based on confidence scores.
- [ ] Add support for more platforms like Facebook, Instagram, and LinkedIn.
- [ ] Create customizable email/Slack alerts for high-priority mentions.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Souradeep Pradhan - https://www.linkedin.com/posts/souradeep-pradhan_aiagent-hackathon-brandmanagement-activity-7380240201434005504-QugF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLSNZsB-zB5jTFxdjgEjPureWMt52kueHM

Project Link: https://pradhan-not-found.github.io/Alertify/

