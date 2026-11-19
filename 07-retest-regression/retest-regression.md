# Retest dan Regression

Status: **retest tidak diperlukan** (tidak ada test case FAIL pada CYC-01); **regression CYC-02 dijalankan** (9 test case, PASS 9, FAIL 0, BLOCKED 0, NOT RUN 0). Tanggal, browser, dan versi aplikasi CYC-02 belum dicatat pada execution log.

## Batasan

Aplikasi demo adalah milik pihak ketiga dan penulis tidak dapat memperbaiki defect. Karena itu:

* **Retest** berarti mengeksekusi ulang test case yang FAIL pada waktu berbeda untuk memeriksa apakah perilaku masih terjadi. Ini bukan verifikasi perbaikan.

* Hasil retest hanya `REPRODUCED` (perilaku masih terjadi), `NOT REPRODUCED` (tidak terjadi pada pengujian itu; **tidak** berarti diperbaiki), atau `NOT RUN`. Status "fixed" atau "verified" tidak dipakai karena perbaikan tidak dapat dikonfirmasi.

* Setiap hasil retest mencatat tanggal dan versi aplikasi (footer halaman login).

* Test case yang FAIL karena kesalahan desain (`DI-nnn`) tidak diretest; test case dikoreksi lalu dijalankan sebagai eksekusi baru.

* **Regression** berarti mengeksekusi ulang subset inti (CYC-02) pada versi aplikasi yang sama. Tidak ada defect simulasi dalam proyek ini.

## Subset regression

Aturan awal: semua test case Critical, ditambah satu test negatif atau validasi per modul (REG-001 s.d. REG-008). REG-009 (TC-E2E-002, login sebagai karyawan baru) ditambahkan pada CYC-02; alasannya tidak tercatat. Nomor REG tidak diubah setelah ditetapkan.

| REG-ID  | TC-ID          | Judul                                                                              | Prioritas | Otomasi                              |
| ------- | -------------- | ---------------------------------------------------------------------------------- | --------- | ------------------------------------ |
| REG-001 | TC-AUTH-001    | Login dengan kredensial Admin valid                                                | Critical  | auth-login.spec.js                   |
| REG-002 | TC-AUTH-003    | Login dengan Username benar dan Password salah                                     | High      | auth-login.spec.js                   |
| REG-003 | TC-PIM-ADD-001 | Tambah karyawan dengan First Name dan Last Name saja                               | Critical  | pim-add-employee.spec.js             |
| REG-004 | TC-PIM-ADD-003 | Save dengan semua field kosong (Create Login Details aktif)                        | High      | pim-add-employee-validation.spec.js  |
| REG-005 | TC-PIM-SRC-001 | Cari karyawan berdasarkan Employee Name                                            | Critical  | pim-search-employee.spec.js          |
| REG-006 | TC-PIM-SRC-002 | Cari karyawan berdasarkan Employee Id                                              | Critical  | pim-search-employee.spec.js          |
| REG-007 | TC-PIM-SRC-004 | Cari Employee Id yang tidak ada                                                    | High      | pim-search-employee.spec.js          |
| REG-008 | TC-E2E-001     | Login Admin, tambah karyawan, cari berdasarkan Employee Id, verifikasi nama dan Id | Critical  | e2e-add-then-search.spec.js          |
| REG-009 | TC-E2E-002     | Login sebagai karyawan yang baru dibuat                                            | Low       | e2e-add-then-search.spec.js          |

## Hasil retest

Tidak ada test case FAIL pada CYC-01, sehingga tidak ada defect untuk diretest.

| BUG-ID | Jira key | TC-ID | Tanggal | Versi aplikasi | Hasil | Catatan   |
| ------ | -------- | ----- | ------- | -------------- | ----- | --------- |
| —      | —        | —     | —       | —              | —     | Tidak ada |

## Hasil regression (CYC-02)

Hasil rinci per REG ada di [execution-log.md](../05-test-execution/execution-log.md#cyc-02--retest-dan-regression). Tabel membandingkan CYC-01 dan CYC-02.

| REG-ID  | TC-ID          | CYC-01 | CYC-02 | Selisih   | Catatan |
| ------- | -------------- | ------ | ------ | --------- | ------- |
| REG-001 | TC-AUTH-001    | PASS   | PASS   | tidak ada | <br />  |
| REG-002 | TC-AUTH-003    | PASS   | PASS   | tidak ada | <br />  |
| REG-003 | TC-PIM-ADD-001 | PASS   | PASS   | tidak ada | <br />  |
| REG-004 | TC-PIM-ADD-003 | PASS   | PASS   | tidak ada | <br />  |
| REG-005 | TC-PIM-SRC-001 | PASS   | PASS   | tidak ada | <br />  |
| REG-006 | TC-PIM-SRC-002 | PASS   | PASS   | tidak ada | <br />  |
| REG-007 | TC-PIM-SRC-004 | PASS   | PASS   | tidak ada | <br />  |
| REG-008 | TC-E2E-001     | PASS   | PASS   | tidak ada | <br />  |
| REG-009 | TC-E2E-002     | PASS   | PASS   | tidak ada | <br />  |

Ringkasan CYC-02: 9 test case — PASS 9, FAIL 0, BLOCKED 0, NOT RUN 0. Pass rate regression: 100% (9/9).
