# Bug Report

Status: **0 defect nyata dan 0 masalah desain test.** Seluruh 26 test case CYC-01 dan 9 test case CYC-02 berstatus PASS, sehingga tidak ada FAIL yang perlu dianalisis. Tidak ada defect yang dibuat untuk memenuhi kuota.

## Kebijakan

| Jenis               | Syarat                                                                                                                                                                                                                                                                                           | ID                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Defect nyata        | Ditemukan saat eksekusi pada expected result yang berdasar valid (`[OBSERVED]` atau requirement yang jelas); berhasil direproduksi minimal 3 kali dengan tanggal dan versi aplikasi tercatat; ada bukti; bukan akibat kesalahan desain test dan bukan akibat data demo yang diubah pengguna lain | `BUG-nnn`, padanan kunci Jira `OHRM-n`                                             |
| Masalah desain test | Test case FAIL karena expected result salah atau tidak berdasar, sementara perilaku aplikasi tampak wajar                                                                                                                                                                                        | `DI-nnn`; test case dikoreksi lalu dijalankan ulang; tidak dihitung sebagai defect |

<br />

## Format tiket

| Field Jira         | Isi                                                                    |
| ------------------ | ---------------------------------------------------------------------- |
| Summary            | `[Modul] Perilaku yang salah`                                          |
| Environment        | URL, browser dan versi, OS, tanggal uji, versi aplikasi (footer login) |
| Steps to Reproduce | Langkah bernomor beserta data uji (ID TD-xxx)                          |
| Actual Result      | Yang terjadi                                                           |
| Expected Result    | Yang seharusnya terjadi, merujuk REQ-ID                                |
| Severity           | Critical / High / Medium / Low, beserta alasan                         |
| Attachment         | Screenshot atau video                                                  |
| Terkait            | TC-ID, REQ-ID, dan BUG-ID di deskripsi                                 |
| Label              | Modul (`AUTH`, `PIM-ADD`, `PIM-SRC`)                                   |

## Definisi severity

| Severity | Arti                                       |
| -------- | ------------------------------------------ |
| Critical | Alur utama tidak dapat dijalankan          |
| High     | Fungsi penting salah, ada solusi sementara |
| Medium   | Fungsi pendukung atau validasi salah       |
| Low      | Tampilan atau teks, dampak kecil           |

## Indeks defect

| BUG-ID | Jira key | Judul     | TC-ID | REQ-ID | Severity | Status | Tanggal |
| ------ | -------- | --------- | ----- | ------ | -------- | ------ | ------- |
| —      | —        | Tidak ada | —     | —      | —        | —      | —       |

## Log masalah desain test

| DI-ID | TC-ID | Masalah   | Koreksi | Status | Tanggal |
| ----- | ----- | --------- | ------- | ------ | ------- |
| —     | —     | Tidak ada | —       | —      | —       |
