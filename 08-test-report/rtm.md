# Requirements Traceability Matrix (RTM)

RTM menghubungkan requirement → scenario → test case → regression → hasil eksekusi → defect → otomasi. Status CYC diambil dari [execution-log.md](../05-test-execution/execution-log.md) .

## 1. Cakupan per requirement

| Requirement     | Verifikasi requirement | Scenario                                      | Test Case                                                      | Jumlah TC |
| --------------- | ---------------------- | --------------------------------------------- | -------------------------------------------------------------- | --------- |
| REQ-AUTH-001    | OBSERVED               | SCN-AUTH-001, SCN-E2E-001                     | TC-AUTH-001, TC-E2E-001                                        | 2         |
| REQ-AUTH-002    | OBSERVED               | SCN-AUTH-002                                  | TC-AUTH-002                                                    | 1         |
| REQ-AUTH-003    | OBSERVED               | SCN-AUTH-002                                  | TC-AUTH-003, TC-AUTH-004                                       | 2         |
| REQ-PIM-ADD-001 | OBSERVED               | SCN-PIM-ADD-001, SCN-PIM-ADD-008              | TC-PIM-ADD-001, TC-PIM-ADD-013                                 | 2         |
| REQ-PIM-ADD-002 | OBSERVED               | SCN-PIM-ADD-001, SCN-PIM-ADD-003              | TC-PIM-ADD-001, TC-PIM-ADD-003                                 | 2         |
| REQ-PIM-ADD-003 | OBSERVED               | SCN-PIM-ADD-004, SCN-PIM-ADD-005              | TC-PIM-ADD-005, TC-PIM-ADD-009                                 | 2         |
| REQ-PIM-ADD-004 | OBSERVED               | SCN-PIM-ADD-004                               | TC-PIM-ADD-004, TC-PIM-ADD-005, TC-PIM-ADD-006, TC-PIM-ADD-007 | 4         |
| REQ-PIM-ADD-005 | OBSERVED               | SCN-PIM-ADD-002, SCN-E2E-002                  | TC-PIM-ADD-002, TC-E2E-002                                     | 2         |
| REQ-PIM-ADD-006 | OBSERVED               | SCN-PIM-ADD-003                               | TC-PIM-ADD-003                                                 | 1         |
| REQ-PIM-ADD-007 | OBSERVED               | SCN-PIM-ADD-007                               | TC-PIM-ADD-011, TC-PIM-ADD-012                                 | 2         |
| REQ-PIM-ADD-008 | OBSERVED               | SCN-PIM-ADD-001, SCN-PIM-ADD-002, SCN-E2E-001 | TC-PIM-ADD-001, TC-PIM-ADD-002, TC-E2E-001                     | 3         |
| REQ-PIM-ADD-009 | OBSERVED               | SCN-PIM-ADD-005                               | TC-PIM-ADD-010                                                 | 1         |
| REQ-PIM-ADD-010 | OBSERVED               | SCN-PIM-ADD-006                               | TC-PIM-ADD-008                                                 | 1         |
| REQ-PIM-SRC-001 | OBSERVED               | SCN-PIM-SRC-003                               | TC-PIM-SRC-007                                                 | 1         |
| REQ-PIM-SRC-002 | OBSERVED               | SCN-PIM-SRC-003                               | TC-PIM-SRC-005                                                 | 1         |
| REQ-PIM-SRC-003 | OBSERVED               | SCN-PIM-SRC-003                               | TC-PIM-SRC-005, TC-PIM-SRC-006                                 | 2         |
| REQ-PIM-SRC-004 | OBSERVED               | SCN-PIM-SRC-001, SCN-E2E-001                  | TC-PIM-SRC-001, TC-E2E-001                                     | 2         |
| REQ-PIM-SRC-005 | OBSERVED               | SCN-PIM-SRC-001, SCN-E2E-001                  | TC-PIM-SRC-002, TC-E2E-001                                     | 2         |
| REQ-PIM-SRC-006 | OBSERVED               | SCN-PIM-SRC-002                               | TC-PIM-SRC-003, TC-PIM-SRC-004                                 | 2         |

## 2. Traceability per test case

| Requirement                                                     | Scenario        | Test Case      | REG     | TestRail Case ID | CYC-01 | BUG / DI | CYC-02 | Otomasi                             |
| --------------------------------------------------------------- | --------------- | -------------- | ------- | ---------------- | ------ | -------- | ------ | ----------------------------------- |
| REQ-AUTH-001                                                    | SCN-AUTH-001    | TC-AUTH-001    | REG-001 | —                | PASS   | —        | PASS   | auth-login.spec.js                  |
| REQ-AUTH-002                                                    | SCN-AUTH-002    | TC-AUTH-002    | —       | —                | PASS   | —        | —      | auth-login.spec.js                  |
| REQ-AUTH-003                                                    | SCN-AUTH-002    | TC-AUTH-003    | REG-002 | —                | PASS   | —        | PASS   | auth-login.spec.js                  |
| REQ-AUTH-003                                                    | SCN-AUTH-002    | TC-AUTH-004    | —       | —                | PASS   | —        | —      | auth-login.spec.js                  |
| REQ-PIM-ADD-001, REQ-PIM-ADD-002, REQ-PIM-ADD-008               | SCN-PIM-ADD-001 | TC-PIM-ADD-001 | REG-003 | —                | PASS   | —        | PASS   | pim-add-employee.spec.js            |
| REQ-PIM-ADD-005, REQ-PIM-ADD-008                                | SCN-PIM-ADD-002 | TC-PIM-ADD-002 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-ADD-002, REQ-PIM-ADD-006                                | SCN-PIM-ADD-003 | TC-PIM-ADD-003 | REG-004 | —                | PASS   | —        | PASS   | pim-add-employee-validation.spec.js |
| REQ-PIM-ADD-004                                                 | SCN-PIM-ADD-004 | TC-PIM-ADD-004 | —       | —                | PASS   | —        | —      | pim-add-employee-validation.spec.js |
| REQ-PIM-ADD-003, REQ-PIM-ADD-004                                | SCN-PIM-ADD-004 | TC-PIM-ADD-005 | —       | —                | PASS   | —        | —      | pim-add-employee-validation.spec.js |
| REQ-PIM-ADD-004                                                 | SCN-PIM-ADD-004 | TC-PIM-ADD-006 | —       | —                | PASS   | —        | —      | pim-add-employee-validation.spec.js |
| REQ-PIM-ADD-004                                                 | SCN-PIM-ADD-004 | TC-PIM-ADD-007 | —       | —                | PASS   | —        | —      | pim-add-employee-validation.spec.js |
| REQ-PIM-ADD-010                                                 | SCN-PIM-ADD-006 | TC-PIM-ADD-008 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-ADD-003                                                 | SCN-PIM-ADD-005 | TC-PIM-ADD-009 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-ADD-009                                                 | SCN-PIM-ADD-005 | TC-PIM-ADD-010 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-ADD-007                                                 | SCN-PIM-ADD-007 | TC-PIM-ADD-011 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-ADD-007                                                 | SCN-PIM-ADD-007 | TC-PIM-ADD-012 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-ADD-001                                                 | SCN-PIM-ADD-008 | TC-PIM-ADD-013 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-SRC-004                                                 | SCN-PIM-SRC-001 | TC-PIM-SRC-001 | REG-005 | —                | PASS   | —        | PASS   | pim-search-employee.spec.js         |
| REQ-PIM-SRC-005                                                 | SCN-PIM-SRC-001 | TC-PIM-SRC-002 | REG-006 | —                | PASS   | —        | PASS   | pim-search-employee.spec.js         |
| REQ-PIM-SRC-006                                                 | SCN-PIM-SRC-002 | TC-PIM-SRC-003 | —       | —                | PASS   | —        | —      | pim-search-employee.spec.js         |
| REQ-PIM-SRC-006                                                 | SCN-PIM-SRC-002 | TC-PIM-SRC-004 | REG-007 | —                | PASS   | —        | PASS   | pim-search-employee.spec.js         |
| REQ-PIM-SRC-002, REQ-PIM-SRC-003                                | SCN-PIM-SRC-003 | TC-PIM-SRC-005 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-SRC-003                                                 | SCN-PIM-SRC-003 | TC-PIM-SRC-006 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-PIM-SRC-001                                                 | SCN-PIM-SRC-003 | TC-PIM-SRC-007 | —       | —                | PASS   | —        | —      | —                                   |
| REQ-AUTH-001, REQ-PIM-ADD-008, REQ-PIM-SRC-004, REQ-PIM-SRC-005 | SCN-E2E-001     | TC-E2E-001     | REG-008 | —                | PASS   | —        | PASS   | e2e-add-then-search.spec.js         |
| REQ-PIM-ADD-005                                                 | SCN-E2E-002     | TC-E2E-002     | REG-009 | —                | PASS   | —        | PASS   | —                                   |

## 3. Ringkasan cakupan

Penyebut adalah seluruh requirement aktif pada [requirements.md](../01-requirement/requirements.md) (19 butir, diturunkan dari pengamatan, bukan spesifikasi resmi).

| Ukuran                                                          | Nilai     | Penyebut       |
| --------------------------------------------------------------- | --------- | -------------- |
| Requirement dengan minimal 1 test case (cakupan rencana)        | 19 (100%) | 19 requirement |
| Requirement dengan minimal 1 test case berstatus PASS atau FAIL | 19 (100%) | 19 requirement |
| Requirement dengan minimal 1 test case berstatus PASS           | 19 (100%) | 19 requirement |
| Requirement yang seluruh test case-nya berstatus PASS           | 19 (100%) | 19 requirement |
