# 📖 Facilitator Guide  
## 🟢 Module 2: Prompt Engineering for Developers

---

## 🎯 Learning Objectives
By the end of this module, learners will:  
✅ Write effective prompts with clear context, examples, and direction.  
✅ Build reusable prompt templates for common engineering tasks.  
✅ Apply role-based prompting for specialized perspectives (e.g., Security Engineer).  
✅ Understand optimization and caching techniques for LLM-based applications.  

---

## ⏱️ Timing Overview (60 min)

| Segment                                  | Time  |
|------------------------------------------|-------|
| Kickoff + Demo: Bad vs Good Prompts      | 8 min |
| 🔥 Activity 1: Build a Highly Specific Prompt | 10 min|
| Instructor Demo: Personal Prompt Templates| 15 min|
| 🔥 Activity 2: Peer Testing Round-Robin   | 10 min|
| 🔥 Activity 3: Role-Based Prompting       | 12 min|
| Reflection & Wrap-Up                     | 5 min |

---

## 🔥 Activity 1: Build a Highly Specific Prompt

### 📌 Purpose
Teach participants how to craft detailed, high-context prompts for complex coding tasks.

### ⚙️ Setup
- Tools: GitHub Copilot, Cursor, Claude, or OpenAI Playground  
- Scenario: Building a React app for an e-commerce provider.  
- Goal: Create a prompt to:  
  - Set up a Node.js project with React + Typescript + Vite  
  - Include testing with Vitest and UI with Shadcn UI  
  - Generate a `task_list.md` file for LLM assistance

### 👩‍🏫 Instructor Steps
1. **Intro & Demo (5 min)**  
   - Show a bad prompt:  
     `"Build me a React app."`  
   - Show a good prompt:  
     `"You are a senior Node.js developer. Please set up a Node.js project with React + Typescript + Vite. Include Vitest for testing and Shadcn UI for UI components. Create a task_list.md file outlining remaining steps."`
2. **Learner Task (5 min)**  
   - Learners write their own specific prompt for the scenario.

### ✅ Expected Outputs
A highly specific, reusable prompt ready for testing.

### 💡 Tips
- Encourage learners to think like an engineer communicating requirements.
- Suggest including role assignment in prompts for better context.

---

## 🔥 Activity 2: Peer Testing Round-Robin

### 📌 Purpose
Enable participants to evaluate and refine each other’s prompts through testing.

### ⚙️ Setup
- Learners exchange their prompts with a peer.
- Each peer tests the received prompt in their AI tool of choice.

### 👩‍🏫 Instructor Steps
1. **Explain (2 min)**  
   - Discuss why peer feedback helps improve prompt quality.
2. **Learner Task (8 min)**  
   - Test peer’s prompt.  
   - Record output quality, clarity, and suggestions.

### ✅ Expected Outputs
Peer-reviewed prompts with feedback for refinement.

### 💡 Tips
- Encourage constructive feedback: clarity, completeness, alignment with coding standards.
- Facilitate sharing of notable improvements with the group.

---

## 🔥 Activity 3: Role-Based Prompting

### 📌 Purpose
Teach participants how assigning roles to LLMs changes their responses.

### ⚙️ Setup
Example Roles:
- Security Engineer: `"Review this code for vulnerabilities."`
- Performance Engineer: `"Optimize this function for memory efficiency."`
- QA Engineer: `"Generate edge case tests for this API."`

### 👩‍🏫 Instructor Steps
1. **Demo (7 min)**  
   - Show role-based prompts and compare responses.
2. **Learner Reflection (5 min)**  
   - Ask learners to brainstorm roles they’d use in their workflows.

### ✅ Expected Outputs
List of potential roles and sample prompts to use in future coding tasks.

### 💡 Tips
- Highlight the benefit of tailored expertise from role assignment.

---

## 📝 Reflection & Wrap-Up (5 min)

### 💬 Questions for Group Discussion
- “Which prompt refinement had the biggest impact?”  
- “How will you use role prompting in your workflow?”  
- “What prompts would you save as templates today?”

### 👩‍🏫 Instructor Wrap-Up
Reinforce key takeaways:  
✅ Specificity and context = higher quality AI outputs.  
✅ Peer testing and role prompting improve efficiency.
