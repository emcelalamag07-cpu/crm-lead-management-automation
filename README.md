# CRM Lead Management Automation

## Overview

Enterprise-style QA portfolio project demonstrating:

- BRD
- FRS
- RTM
- Test Case Design
- Defect Management
- Playwright Automation

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model

## Automated Test Cases

### TS-001 Authentication Module

| TC ID | Scenario |
|--------|-----------|
| TC-001 | Login with Valid Credentials |
| TC-003 | Login with Invalid Password |
| TC-004 | Login with Invalid Username |
| TC-005 | Login with Blank Username |
| TC-006 | Login with Blank Password |

### TS-002 Lead Management Module

| TC ID | Scenario |
|--------|-----------|
| TC-009 | Create Lead with Valid Data |
| TC-010 | Create Lead with Blank First Name |
| TC-011 | Create Lead with Blank Last Name |
| TC-012 | Search Existing Employee |
| TC-013 | Search Non-Existing Employee |

## Framework Features

- Playwright Automation Framework
- TypeScript
- Page Object Model (POM)
- Test Data Management
- Dynamic Employee Creation using Timestamp-Based Test Data
- Automatic Screenshot Capture (PASS/FAIL)
- Cross-Browser Testing
- HTML Reporting
- GitHub Version Control

## Framework Structure

pages/
  LoginPage.ts
  PIMPage.ts

test-data/
  loginData.ts
  employeeData.ts

tests/
  login.spec.ts
  lead-management.spec.ts

utils/
  screenshotHelper.ts
  
## Current Progress

✅ TS-001 Authentication Module

✅ TS-002 Lead Management Module

🔄 TS-003 Employee Management Module (Next Phase)

## Automation Coverage

- Total Automated Test Cases: 10
- Completed Test Scenarios: 2
- Browser Coverage:
  - Chromium
  - Firefox
  - WebKit
