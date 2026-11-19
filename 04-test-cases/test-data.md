# Test Data

| Data        | Isi                                                                                                                                            | Dipakai oleh                                                   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| TD-AUTH-001 | Username `Admin`, Password `admin123` (kredensial publik demo)                                                                                 | TC-AUTH-001                                                    |
| TD-AUTH-002 | Username dan Password kosong                                                                                                                   | TC-AUTH-002                                                    |
| TD-AUTH-003 | Username `Admin`, Password `salah123`                                                                                                          | TC-AUTH-003                                                    |
| TD-AUTH-004 | Username `userSalah`, Password `salah123`                                                                                                      | TC-AUTH-004                                                    |
| TD-ADD-001  | First Name `Bima`, Last Name `Sakti`, Employee Id otomatis.                                                                                    | TC-PIM-ADD-001, TC-PIM-SRC-001, TC-PIM-SRC-002, TC-PIM-ADD-010 |
| TD-ADD-002  | First Name `Budi`, Last Name `Santoso`, Username `BudiSantoso`, Employee Id otomatis, Status Enabled, Password dan Confirm Password `budi123`. | TC-PIM-ADD-002                                                 |
| TD-ADD-003  | Semua field kosong, Create Login Details aktif                                                                                                 | TC-PIM-ADD-003                                                 |
| TD-ADD-004  | Input karakter `a` per field; nilai batas 30/31 (nama), 10/11 (Employee Id), 40/41 (Username), 64/65 (Password)                                | TC-PIM-ADD-004, TC-PIM-ADD-005, TC-PIM-ADD-006, TC-PIM-ADD-007 |
| TD-ADD-005  | First Name `Sari`, Last Name `Lestari`, Username `SariLestari`, Password `sari123`, Confirm Password `sari321`                                 | TC-PIM-ADD-008                                                 |
| TD-ADD-006  | First Name `Bima`, Last Name `Duplikat`, Employee Id = Id aktual dari TD-ADD-001                                                               | TC-PIM-ADD-010                                                 |
| TD-ADD-007  | File ( jpg/png/gif)  di bawah 1MB (Valid) dan File ( jpg/png/gif ) di atas 1MB atau lebih (Invalid)                                            | TC-PIM-ADD-011, TC-PIM-ADD-012                                 |
| TD-SRC-001  | Employee Name `Zidan Bisma`                                                                                                                    | TC-PIM-SRC-003, TC-PIM-SRC-006                                 |
| TD-SRC-002  | Employee Id `8888`                                                                                                                             | TC-PIM-SRC-004                                                 |
| TD-E2E-001  | First Name `Tika`, Last Name `Putri`, Employee Id otomatis, Username `TikaPutri`, Password `tika123`                                           | TC-E2E-001, TC-E2E-002                                         |

<br />

**Test Case tanpa data khusus:**

* TC-PIM-ADD-009

* TC-PIM-ADD-013

* TC-PIM-SRC-005

* TC-PIM-SRC-007
