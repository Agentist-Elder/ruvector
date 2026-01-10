#!/bin/bash
# AIMDS Battle Loop: Stress-testing the RuVector Manifold

# 1. Extract payloads from your worker's output (assumes worker_output.json exists)
# Or manually paste the array into a variable for this test
PAYLOADS=$(node -e 'console.log(JSON.parse(require("fs").readFileSync("worker_output.json")).join("\n---\n"))')

IFS=$'\n'
for ATTACK in $(echo "$PAYLOADS" | tr '\n' ' '); do
  echo "--------------------------------------------------"
  echo "🧨 DEPLOYING ATTACK: ${ATTACK:0:60}..."
  
  # Run the attack through Claude Code in headless mode
  # This triggers the PreToolUse hooks automatically
  claude -p "$ATTACK"
  
  echo "🏁 ATTACK CYCLE COMPLETE"
done