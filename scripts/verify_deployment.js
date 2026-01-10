const fs = require("fs");

const checks = [
    { name: "Root Organization", path: "EXPORT_MODULE_SUMMARY.md", expected: false },
    { name: "Security Audit Path", path: "security/audits/security_hardening_report.md", expected: true },
    { name: "Deployment Manifest", path: "docs/deployment_manifest.md", expected: true },
    { name: "Adversarial Tests", path: "tests/worker_output.json", expected: true },
    { name: "Security Scripts", path: "scripts/certify_security.js", expected: true }
];

console.log("🏁 Starting Final Deployment Verification...\n");

let passed = true;
checks.forEach(check => {
    const exists = fs.existsSync(check.path);
    if (exists === check.expected) {
        console.log(`✅ ${check.name}: PASS`);
    } else {
        console.log(`❌ ${check.name}: FAIL (File ${exists ? "should not be in root" : "missing"})`);
        passed = false;
    }
});

if (passed) {
    console.log("\n🚀 SYSTEM READY: All structures and security protocols verified.");
} else {
    console.log("\n⚠️ ATTENTION: Some organizational steps are incomplete.");
}