# 📄 Participant Handout: AI for Software Engineers

## 🎯 Learning Objectives
By the end of this module, you will:  
- ✅ Write effective prompts for AI tools.  
- ✅ Build a library of prompt templates for frequent coding tasks.  
- ✅ Use role-based prompting to get specialized outputs.  

---

## 🔥 Activity 1: Build a Highly Specific Prompt

### 📌 Purpose
Learn how to craft detailed, high-context prompts for complex engineering tasks.

### 📝 Instructions
Consider this scenario:  

You are building a React app for an e-commerce provider.  

**Create a prompt to:**  
- Set up a Node.js project with React + TypeScript + Vite  
- Include testing with Vitest and UI with Shadcn UI  
- Generate a `task_list.md` for an LLM to follow  

### ✍️ Your Prompt
[Write your prompt here]


---

## 🔥 Activity 2: Peer Testing Round-Robin

### 📌 Purpose
Refine prompts by testing and reviewing with peers.

### 📝 Instructions
1. Exchange your prompt with a peer.  
2. Test their prompt in your AI tool of choice.  
3. Provide feedback:  
   - Was the output clear and complete?  
   - What improvements would you suggest?  

### 📝 Feedback Notes
[Write your feedback here]


---

## 🔥 Activity 3: Role-Based Prompting

### 📌 Purpose
Learn how assigning roles to the AI influences its outputs.

### 📝 Instructions
Review these sample roles:  
- 🛡️ Security Engineer  
- 🚀 Performance Engineer  
- 🧪 QA Engineer  

**Write a prompt for one of these roles:**  

### ✍️ Your Role-Based Prompt
[Write your role-based prompt here]


**Reflect:** What other roles would you assign in your workflow?  

### 📝 Notes
[Your notes here]


---

## 💬 Reflection Questions
- 📌 Which prompt technique will you use first in your workflow?  
- 📌 What was the most surprising insight from peer testing?  
- 📌 Which roles are most useful for your current projects?  

---

## 🚀 Stretch Activity: Setting up Vitest

### 📌 Purpose
To gain hands-on experience setting up Vitest for unit testing in a JavaScript/TypeScript project.

### 📝 Instructions
1.  **Initialize a new project (if you haven't already):**
    ```bash
    mkdir my-vitest-project
    cd my-vitest-project
    npm init -y
    ```
2.  **Install Vitest:**
    ```bash
    npm install -D vitest
    ```
3.  **Configure `package.json`:**
    Add a test script to your `package.json`:
    ```json
    {
      "name": "my-vitest-project",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "vitest"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```
4.  **Create a test file (e.g., `test/sum.test.js` or `src/sum.test.ts`):**
    First, create a simple function to test (e.g., `src/sum.js`):
    ```javascript
    // src/sum.js
    export function sum(a, b) {
      return a + b;
    }
    ```
    Then, create your test file (e.g., `test/sum.test.js`):
    ```javascript
    // test/sum.test.js
    import { describe, expect, it } from 'vitest';
    import { sum } from '../src/sum'; // Adjust path as needed

    describe('sum', () => {
      it('adds two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
      });
    });
    ```
5.  **Run tests:**
    ```bash
    npm test
    ```

### ✅ Expected Outcomes
You will have a working Vitest setup and understand the basic workflow for writing and running tests.
