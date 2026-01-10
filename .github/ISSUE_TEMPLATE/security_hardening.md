---
name: 🛡️ Security Hardening Audit
about: Standardized checklist for maintaining 100% DQ after feature updates.
title: 'Audit: [Feature Name] Hardening'
labels: security, hardening
assignees: ''
---

## 📊 Post-Update Audit
- [ ] New tool schemas sanitized for Gemini/Claude compatibility.
- [ ] `npm run certify` executed.
- [ ] DQ Score remains at **100.0%**.
- [ ] `security/audits/security_hardening_report.md` updated and synced.

## 🧪 Adversarial Check
- [ ] Verified that new features do not bypass the `.env` exfiltration veto.
- [ ] Run `tests/worker_output.json` against the updated logic.

## 📝 Notes
*List any new patterns added to .ruvector/intelligence.json here.*