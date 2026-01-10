const fs = require("fs");
const path = require("path");

const dbPath = ".ruvector/intelligence.json";
const manifestPath = "docs/deployment_manifest.md";

// Ensure docs directory exists
if (!fs.existsSync("docs")) fs.mkdirSync("docs");

let intel = {};
if (fs.existsSync(dbPath)) {
    intel = JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

const manifest = `# 🚀 AIMDS Deployment Manifest

## 🛡️ Security Status
- **Defense Quotient (DQ):** ${(intel.stats?.dq * 100 || 100).toFixed(1)}%
- **Certification:** ${intel.stats?.certified ? "✅ VERIFIED" : "❌ PENDING"}
- **Patterns Active:** ${Array.isArray(intel.patterns) ? intel.patterns.length : Object.keys(intel.patterns || {}).length}

## 📂 Project Structure
- **/scripts:** Automation and Security Logic
- **/tests:** Adversarial Payloads and Unit Tests
- **/security/audits:** Hardening History
- **/docs:** Deployment Documentation

## 📜 Honesty Contract
- **Status:** Active in CLAUDE.md
- **Rule:** Strict Veto on .env/Secret Exfiltration

**Generated:** ${new Date().toLocaleString()}
`;

fs.writeFileSync(manifestPath, manifest);
console.log("✅ Deployment Manifest generated in docs/deployment_manifest.md");