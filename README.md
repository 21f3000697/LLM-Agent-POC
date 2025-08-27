# LLM Agent Proof-of-Concept (POC)

This project demonstrates a **minimal browser-based intelligent agent** powered by a custom Language Model (LLM) loop integrated with external tools. It enables real-time, multi-tool reasoning by dynamically invoking APIs such as **Google Custom Search API**, running JavaScript code, and simulating AI pipelines.

---

## Features

- **Conversational user interface** with message history in the browser.
- Dynamic decision-making to invoke tools based on user input.
- Integration with **Google Custom Search API** for fetching real-world search snippets.
- Secure JavaScript code execution sandboxed in the backend.
- Modular backend supporting tool execution and simple LLM logic simulation.
- Easy extensibility to integrate real LLM APIs and other AI workflows.

---

## Project Structure

llm-agent-poc/
├── index.html # Frontend UI and agent client logic
├── llm-api.js # Backend LLM simulation and tool call implementation
├── server.js # Express server serving frontend + API endpoints
├── package.json # Node.js project metadata and dependencies
└── README.md # Project documentation and instructions

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- A **Google API Key** with Custom Search API enabled
- A **Google Custom Search Engine (CSE) ID** configured for web-wide search

---

## Setup Instructions

1. **Clone or download** this repository and navigate to its root directory:

    ```
    cd llm-agent-poc
    ```

2. **Install dependencies** using npm:

    ```
    npm install
    ```

3. **Configure environment variables** for sensitive keys:

    - Create a `.env` file at the project root (not committed to version control).
    - Add your keys as follows:

      ```
      GOOGLE_API_KEY=your_google_api_key_here
      GOOGLE_CX=your_custom_search_engine_id_here
      ```

4. **Start the server**:

    ```
    npm start
    ```

5. **Open your browser** and go to:

    ```
    http://localhost:3000
    ```

---

## Usage

- Interact with the LLM Agent by typing natural language queries.
- The agent dynamically decides when to:
  - Query Google Custom Search for real-time web snippets.
  - Execute provided JavaScript code safely in the backend.
  - Simulate AI pipeline calls.
- Sample queries to try:

  - `Capital of France?`
  - `Who founded Microsoft?`
  - `Run JS 2+2`
  - `Invoke AI Pipe`

---

## Security Considerations

- **API keys and secrets are loaded via environment variables** and are not included in source code.
- The frontend does not expose any secret keys.
- JavaScript code execution is sandboxed on the backend to avoid unsafe operations.
- Follow best practices to secure your `.env` file and restrict API key permissions.

---

## Extending the Project

- Replace the simulated `mockLLM` logic in `llm-api.js` with actual LLM API calls (e.g., OpenAI, Anthropic).
- Add additional tool integrations (e.g., knowledge bases, databases, custom AI pipelines).
- Enhance conversational memory persistence for longer multi-turn dialogues.
- Integrate OAuth or user authentication for personalized experiences.

---

## Troubleshooting

- Ensure your Google Custom Search API and CSE ID are correctly configured for **searching the entire web** to avoid empty results.
- Check Node.js version compatibility if dependency errors occur.
- Inspect server console logs for API request/response errors.
- For rate limit or quota exceeded errors, verify Google Cloud Console quotas.

---

## License

This project is provided as-is under the MIT License. See [LICENSE](LICENSE) for details.

---

## Acknowledgements

- Inspired by modern multi-tool LLM agent architectures.
- Uses [Express](https://expressjs.com/) for backend API.
- Bootstrap for elegant UI styling.

---

For questions or contributions, feel free to open issues or pull requests.

---

*Happy coding and exploring AI-powered agents!*  

## Usage

- Interact with the LLM Agent by typing natural language queries.
- The agent dynamically decides when to:
  - Query Google Custom Search for real-time web snippets.
  - Execute provided JavaScript code safely in the backend.
  - Simulate AI pipeline calls.

### Sample Queries to Try

- Interview me to create a blog post.
- About IBM
- Next step, please.
- Run JS 2+2
- Invoke AI Pipe

### Example Agent Conversation

Here’s a sample “reasoning loop” in action:

User: Interview me to create a blog post.
Agent: output = Sure! What’s the post about?, tool_calls = []

User: About IBM
Agent: output = Let me search for IBM, tool_calls = [search("IBM")]

Agent: output = OK, IBM is a big company founded in ..., tool_calls = []

User: Next step, please.
...


---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- A **Google API Key** with Custom Search API enabled
- A **Google Custom Search Engine (CSE) ID** configured for web-wide search

---

## Setup Instructions

1. **Clone or download** this repository and navigate to its root directory:

    ```
    cd llm-agent-poc
    ```

2. **Install dependencies** using npm:

    ```
    npm install
    ```

3. **Configure environment variables** for sensitive keys:

    - Create a `.env` file at the project root (not committed to version control).
    - Add your keys as follows:

      ```
      GOOGLE_API_KEY=your_google_api_key_here
      GOOGLE_CX=your_custom_search_engine_id_here
      ```

4. **Start the server**:

    ```
    npm start
    ```

5. **Open your browser** and go to:

    ```
    http://localhost:3000
    ```

---

## Usage

- Interact with the LLM Agent by typing natural language queries.
- The agent dynamically decides when to:
  - Query Google Custom Search for real-time web snippets.
  - Execute provided JavaScript code safely in the backend.
  - Simulate AI pipeline calls.
- Sample queries to try:

  - `Capital of France?`
  - `Who founded Microsoft?`
  - `Run JS 2+2`
  - `Invoke AI Pipe`

---

