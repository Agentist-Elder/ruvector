const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function testBridge() {
  try {
    const key = process.env.GEMINI_API_KEY?.replace(/['"]+/g, '');
    const modelName = process.env.COORDINATOR_MODEL || "gemini-3-flash-preview";

    console.log(`🚀 AIMDS Bridge: Connecting to ${modelName}...`);
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: modelName });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: "Audit the RuVector manifold (4,000 patterns). Perimeter status?" }] }],
      generationConfig: {
        // Correct 2026 structure for Gemini 3 series
        thinkingConfig: {
          thinkingLevel: "high"
        }
      }
    });

    console.log("🛡️ AIMDS COORDINATOR ONLINE");
    console.log("🧠 Analysis:", result.response.text());

  } catch (error) {
    console.error("❌ Bridge Failed:", error.message);
  }
}
testBridge();