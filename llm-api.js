// llm-api.js

const fetch = require('node-fetch'); // npm install node-fetch@2

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;     // <--- Put your API key here
const GOOGLE_CX = process.env.GOOGLE_CX; // <--- Put your CSE cx here

async function runTool(tc) {
  if (tc.name === "search") {
    const query = encodeURIComponent(tc.args.query);
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}&q=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.items && data.items[0]) {
        const snippet = data.items[0].snippet || "No snippet available.";
        return { result: snippet };
      } else {
        return { result: "No results found from Google Search." };
      }
    } catch (e) {
      return { result: `Search API error: ${e.message}` };
    }
  }
  if (tc.name === "aipipe") {
    // Mock result for AI Pipe
    return { result: "AI Pipe successfully processed your request. [Mock]" };
  }
  if (tc.name === "run_js") {
    try {
      let output = Function('"use strict";return (' + tc.args.code + ')')();
      return { result: "Output: " + output };
    } catch (e) {
      return { result: "JS Error: " + e.message };
    }
  }
  return { result: "Unknown tool." };
}

function mockLLM(messages, tools) {
  const last = messages[messages.length - 1]?.content?.toLowerCase() || "";
  // Example trivial decision logic; you can expand this!
  if (/(capital of|president of|founder of|who is|what is)/.test(last)) {
    return {
      output: `Let me look up "${messages[messages.length - 1].content}"...`,
      tool_calls: [
        { name: "search", args: { query: messages[messages.length - 1].content } }
      ]
    };
  }
  if (last.includes("js") || last.includes("calculate")) {
    return {
      output: "Let me run that code for you...",
      tool_calls: [
        { name: "run_js", args: { code: "2+2" } }
      ]
    };
  }
  if (last.includes("pipe")) {
    return {
      output: "Invoking AI Pipe...",
      tool_calls: [
        { name: "aipipe", args: { input: "Test data" } }
      ]
    };
  }
  // Default fallback if nothing matches
  return { output: "You asked: " + last, tool_calls: [] };
}

module.exports = { runTool, mockLLM };
