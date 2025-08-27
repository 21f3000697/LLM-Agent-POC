# LLM Agent Browser POC

A minimal local agent that combines a browser UI, LLM-powered tool-calling logic, and real Google Search snippets.

## Setup

1. Install Node.js and npm
2. Replace `YOUR_GOOGLE_API_KEY` and `YOUR_CUSTOM_SEARCH_ENGINE_ID` in `llm-api.js`
3. Run:

    npm install
    npm start

4. Open [http://localhost:3000](http://localhost:3000)

## Usage

- Try: "Capital of France?", "Who is the founder of Microsoft?", etc.
- The agent will call Google Search and return a live snippet.
- JS and AI Pipe remain mock/demo handled. Extend as needed!

## Extend

- To use other LLMs, replace `mockLLM` with API calls.
- To upgrade pipeline/tool logic, add to or modify `runTool`.
