# Project: My Awesome TypeScript Library

## General Instructions:

- When generating new TypeScript code, please follow the existing coding style.
- Ensure all new functions and classes have JSDoc comments.
- Prefer functional programming paradigms where appropriate.
- All code should be compatible with TypeScript 5.0 and Node.js 20+.

## Coding Style:

- Use 2 spaces for indentation.
- Interface names should be prefixed with `I` (e.g., `IUserService`).
- Private class members should be prefixed with an underscore (`_`).
- Always use strict equality (`===` and `!==`).

## Specific Component: `src/api/client.ts`

- This file handles all outbound API requests.
- When adding new API call functions, ensure they include robust error handling and logging.
- Use the existing `fetchWithRetry` utility for all GET requests.

## Regarding Dependencies:

- Avoid introducing new external dependencies unless absolutely necessary.
- If a new dependency is required, please state the reason.

---

## Mior Tech Event Website

This project includes a single-page, serverless HTML website (`index.html`) for the "1-Day Mior Tech Event".

**Features:**
- Displays a schedule of technical talks with timings.
- Includes a 1-hour lunch break and 10-minute transitions between talks.
- Allows users to search talks by category (client-side JavaScript).
- Talk descriptions can be expanded/collapsed.

**To view the website locally:**
1. Ensure you have Python installed.
2. Navigate to the project root directory in your terminal.
3. Run `python3 -m http.server 8000` (for Python 3) or `python -m SimpleHTTPServer 8000` (for Python 2).
4. Open your web browser and go to `http://localhost:8000`.