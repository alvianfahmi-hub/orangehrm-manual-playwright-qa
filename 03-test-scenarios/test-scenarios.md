# Test Scenarios

Setiap scenario menaut ke requirement ([requirements.md](../01-requirement/requirements.md)) dan ke test case ([test-cases.md](../04-test-cases/test-cases.md)). Kolom Requirement dan Test Case dihasilkan dari atribut Scenario pada tiap test case, sehingga selalu sama dengan test-cases.md. Hasil eksekusi, defect, dan otomasi per test case ada di [rtm.md](../08-test-report/rtm.md).

| Scenario        | Deskripsi                                                        | Requirement                                                     | Test Case                                                      |
| --------------- | ---------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------- |
| SCN-AUTH-001    | Login dengan kredensial valid                                    | REQ-AUTH-001                                                    | TC-AUTH-001                                                    |
| SCN-AUTH-002    | Login ditolak: field kosong dan kredensial tidak valid           | REQ-AUTH-002, REQ-AUTH-003                                      | TC-AUTH-002, TC-AUTH-003, TC-AUTH-004                          |
| SCN-PIM-ADD-001 | Tambah karyawan dengan data minimal (tanpa Create Login Details) | REQ-PIM-ADD-001, REQ-PIM-ADD-002, REQ-PIM-ADD-008               | TC-PIM-ADD-001                                                 |
| SCN-PIM-ADD-002 | Tambah karyawan dengan Create Login Details                      | REQ-PIM-ADD-005, REQ-PIM-ADD-008                                | TC-PIM-ADD-002                                                 |
| SCN-PIM-ADD-003 | Validasi field wajib                                             | REQ-PIM-ADD-002, REQ-PIM-ADD-006                                | TC-PIM-ADD-003                                                 |
| SCN-PIM-ADD-004 | Validasi batas karakter                                          | REQ-PIM-ADD-004, REQ-PIM-ADD-003                                | TC-PIM-ADD-004, TC-PIM-ADD-005, TC-PIM-ADD-006, TC-PIM-ADD-007 |
| SCN-PIM-ADD-005 | Perilaku Employee Id (otomatis dan duplikat)                     | REQ-PIM-ADD-003, REQ-PIM-ADD-009                                | TC-PIM-ADD-009, TC-PIM-ADD-010                                 |
| SCN-PIM-ADD-006 | Validasi Password dan Confirm Password                           | REQ-PIM-ADD-010                                                 | TC-PIM-ADD-008                                                 |
| SCN-PIM-ADD-007 | Upload foto profil                                               | REQ-PIM-ADD-007                                                 | TC-PIM-ADD-011, TC-PIM-ADD-012                                 |
| SCN-PIM-ADD-008 | Navigasi ke halaman Add Employee dari tombol + Add               | REQ-PIM-ADD-001                                                 | TC-PIM-ADD-013                                                 |
| SCN-PIM-SRC-001 | Mencari karyawan yang baru ditambahkan                           | REQ-PIM-SRC-004, REQ-PIM-SRC-005                                | TC-PIM-SRC-001, TC-PIM-SRC-002                                 |
| SCN-PIM-SRC-002 | Pencarian tanpa hasil                                            | REQ-PIM-SRC-006                                                 | TC-PIM-SRC-003, TC-PIM-SRC-004                                 |
| SCN-PIM-SRC-003 | Perilaku filter kosong dan Reset                                 | REQ-PIM-SRC-002, REQ-PIM-SRC-003, REQ-PIM-SRC-001               | TC-PIM-SRC-005, TC-PIM-SRC-006, TC-PIM-SRC-007                 |
| SCN-E2E-001     | Alur tambah karyawan lalu cari dan verifikasi                    | REQ-AUTH-001, REQ-PIM-ADD-008, REQ-PIM-SRC-004, REQ-PIM-SRC-005 | TC-E2E-001                                                     |
| SCN-E2E-002     | Login sebagai karyawan baru                                      | REQ-PIM-ADD-005                                                 | TC-E2E-002                                                     |
