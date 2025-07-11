# 🟢 Module 1: Introduction to AI for Software Development - 📄 Participant Handout

---

## 🎯 Learning Objectives
By the end of this module, you will:  
✅ Understand how LLMs process text in tokens and why it matters.  
✅ Compare outputs from different AI models to make better workflow decisions.  
✅ Apply practical techniques to reduce token usage and optimize cost.  

---

## 🔥 Activity 1: Token Counting

### 📌 Purpose
Learn how to analyze token usage in your code and understand its impact on API cost and performance.

### ⚙️ Tools You’ll Need
- [OpenAI Tokenizer](https://platform.openai.com/tokenizer)  
- [OpenAI Pricing](https://openai.com/api/pricing)

### 📝 Instructions
1. Open the OpenAI Tokenizer in your browser.  
2. Choose one of the provided sample files:  
   - Small function (~50 tokens)  
   - Medium API doc (~800 tokens)  
   - Large project file (~3000 tokens) (or use a file from your own project)  
3. Paste your selected file into the tokenizer.  
4. Record the token count.  
5. Visit OpenAI Pricing and calculate approximate costs for:  
   - GPT-3.5 ($0.0015 per 1K tokens)  
   - GPT-4x ($0.03 per 1K tokens)  
6. Reflect: Where in your workflow might token usage be reduced?  

### ✅ Record Your Findings

| File Used         | Token Count | GPT-3.5 Cost | GPT-4x Cost |
|--------------------|-------------|--------------|-------------|
|                    |             |              |             |

---

## 🔥 Activity 2: Model Comparison – Reasoning vs Chat Models

### 📌 Purpose
Compare different AI models to decide when to use a faster chat model versus a more powerful reasoning model.

### ⚙️ Tools You’ll Need
- [Model Leaderboard](https://lmarena.ai/leaderboard)  
- OpenAI Playground or your preferred AI tool (optional)

### 📝 Instructions
1. Review the leaderboard to understand model performance.  
2. Pick one of these prompts (or create your own):  
   - Simple coding task (sort a list)  
   - Complex reasoning task (trade-offs in API design)  
   - Debugging task (find the bug)  
3. Run the prompt in:  
   - GPT-3.5  
   - GPT-4x (if accessible)  
4. Observe and compare outputs for:  
   - Accuracy  
   - Depth of reasoning  
   - Speed of response  
5. Discuss trade-offs: Was GPT-4x’s output worth the extra time and cost?  

### ✅ Record Your Findings

| Prompt                  | Model   | Quality (1–5) | Notes                        |
|-------------------------|---------|---------------|------------------------------|
|                         |         |               |                              |

---

## 💬 Reflection Questions
- When would you choose a smaller model (GPT-3.5) over a larger one (GPT-4x)?  
- What surprised you about token usage or model differences?  
- How can token efficiency improve your development workflow?  

---

📌 **Note:** This handout is designed for you to follow along during Module 1 and capture your insights to apply in your day-to-day work.
