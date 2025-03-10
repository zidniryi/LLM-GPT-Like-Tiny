# TinyLlama LLM Project GPT Like

This project is built with **Ollama** and **TinyLlama** to create a lightweight Large Language Model (LLM) application. The backend, powered by Express.js, processes requests and communicates with the TinyLlama model, while the frontend, developed in React.js, provides a user-friendly interface for interaction.

![Alt text](https://i.ibb.co/wg7Ks32/Screenshot-2024-10-26-at-12-54-27.png)
![Alt text](https://i.ibb.co/qs04TD2/Screenshot-2024-10-26-at-12-03-32.png)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting the Servers](#starting-the-servers)
  - [Interacting with TinyLlama](#interacting-with-tinyllama)
- [Backend API Example](#backend-api-example)
  - [Request Parameters](#request-parameters)
  - [Response](#response)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Interactive Chat Interface**: Users can chat with TinyLlama via a web-based chat interface.
- **Efficient API Handling**: Express.js backend routes messages to TinyLlama efficiently.
- **Lightweight LLM**: Uses the TinyLlama-1.1B model for fast response times.
- **Scalable Design**: The project structure allows easy expansion with additional features.

---

## Project Structure

This project has a **backend** (Express.js) and **frontend** (React.js) directory:

```plaintext
tinyllama-llm-project/
├── backend/                # Backend files (Express.js)
│   ├── app.js              # Main server file
│   └── package.json
├── frontend/               # Frontend files (React.js)
│   ├── src/
│   │   ├── App.js          # Main App component
│   └── package.json
└── README.md
```

---

## Getting Started

Follow the steps below to install and run the project on your local machine.

### Prerequisites

- Node.js and npm
- Python 3.x
- Ollama CLI (for running TinyLlama locally)

### Installation

1. **Clone the Repository**

   Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/zidniryi/LLM-GPT-Like-Tiny
   cd tinyllama-llm-project
   ```

2. **Backend Setup**

   Navigate to the `backend` directory to set up the backend server:

   ```bash
   cd backend
   ```

   Install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Frontend Setup**

   Open a new terminal window and navigate to the `frontend` directory to set up the frontend client:

   ```bash
   cd frontend
   ```

   Install the necessary dependencies:

   ```bash
   npm install
   ```

4. **Set Up Ollama**

   Ensure Ollama and TinyLlama are installed and configured on your system. Follow [Ollama's official documentation](https://ollama.com/) for setup instructions.

---

## Usage

### Starting the Servers

1. **Start the Backend Server**

   In the `backend` directory, run the following command:

   ```bash
   npm start
   ```

   The backend server should start on `http://localhost:3001`.

2. **Start the Frontend Server**

   In a new terminal window, navigate to the `frontend` directory and run:

   ```bash
   npm start
   ```

   The frontend should start on `http://localhost:3000`.

### Interacting with TinyLlama

Once both servers are running, open your browser and navigate to `http://localhost:3000` to interact with the TinyLlama model through the chat interface.

---

## Backend API Example

The backend exposes an API endpoint to interact with the TinyLlama model programmatically.

- **Endpoint**: POST `http://localhost:3001/generate`

**Request Payload**:

```json
{
  "model": "tinyllama",
  "prompt": "What colow of the sky",
  "raw": true,
  "stream": false
}
```

**Response**:

```json
{
  "model": "tinyllama",
  "created_at": "2024-10-26T05:56:34.946112Z",
  "response": " was it? \n“Was it blue?” asks the boy.\n\nThe sky was a blue-white glow,  \nA sight so beautiful to behold.\n\nAnd the stars sparkled like diamonds,  \nShining brightly in the night's dark, clear sky.\n\nThe moon shone high and bright above,  \nA light that illuminated all below.\n\nBut even as it grew into the night,  \nThe moon cast a dim but ever-lasting glow.\n\nFor when the stars began to fade away,  \nAnd the last of their light was gone,  \nA silence descended upon the night,  \nAs though the world were waiting for peace.",
  "done": true,
  "done_reason": "stop",
  "total_duration": 8206857666,
  "load_duration": 4364864791,
  "prompt_eval_count": 7,
  "prompt_eval_duration": 82870000,
  "eval_count": 156,
  "eval_duration": 3753873000
}
```

### Request Parameters

- **message**: (string) The message to send to TinyLlama.

### Response

- **response**: (string) The model’s response.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## License

This project is licensed under the MIT License.
