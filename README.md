# OrangeHRM Web Application — Manual Testing & Basic Playwright Automation

**Independent QA Portfolio Project**

Repositori ini mendokumentasikan proyek portofolio QA independen pada **OrangeHRM Open Source (OS) 5.9** melalui demo publik pihak ketiga. Fokus pengujian adalah alur Admin menambahkan karyawan baru melalui modul PIM, kemudian menemukan kembali data tersebut melalui Employee List. Login merupakan prasyarat untuk menjalankan alur utama.

* **Objek uji:** <https://opensource-demo.orangehrmlive.com> (demo publik, bukan instalasi lokal)

* **Penulis:** Alvian Fahmi

* **GitHub:** [alvianfahmi-hub](https://github.com/alvianfahmi-hub)

## Tujuan Proyek

* Mendokumentasikan requirement berdasarkan pengamatan terhadap perilaku aplikasi dan membedakan hasil observasi dari asumsi desain.

* Menyusun test plan, test scenario, test case, test data, dan Requirement Traceability Matrix (RTM) untuk alur yang menjadi cakupan proyek.

* Mencatat hasil eksekusi manual, regression, serta evidence pengujian.

* Mengotomasi alur pengujian yang sama menggunakan Playwright (JavaScript) sebagai pelengkap pengujian manual.

## Application Under Test (AUT)

| Atribut        | Detail                                          |
| :------------- | :---------------------------------------------- |
| Aplikasi       | OrangeHRM Open Source                           |
| Versi          | OrangeHRM OS 5.9                                |
| URL            | <https://opensource-demo.orangehrmlive.com>     |
| Jenis aplikasi | Web application                                 |
| Lingkungan     | Demo publik pihak ketiga; bukan instalasi lokal |

## Ruang Lingkup Pengujian

Alur utama yang diuji adalah **Admin login → PIM Add Employee → PIM Employee List**. Setelah login, Admin menambahkan karyawan baru dan memastikan data tersebut dapat ditemukan kembali melalui Employee List. Total cakupan terdiri dari **26 test case**.

**Termasuk dalam cakupan:**

* Login sebagai prasyarat alur utama.

* Penambahan karyawan melalui PIM Add Employee.

* Pencarian dan verifikasi data karyawan melalui PIM Employee List.

* Eksekusi manual, regression, pencatatan evidence, dan otomasi Playwright untuk alur yang sama.

**Di luar cakupan:**

* Leave, Time, Recruitment, dan Performance.

* Admin > User Management dan Directory.

* Edit atau hapus data karyawan.

* Import CSV.

* Performance testing, security testing, dan kompatibilitas lintas browser.

## Statistik dan Status Proyek

| Area                   | Hasil / Status                                                               |
| :--------------------- | :--------------------------------------------------------------------------- |
| Requirement            | **19** requirement turunan dari pengamatan: **8 OBSERVED** dan **11 ASUMSI** |
| Eksekusi manual CYC-01 | **26 test case**: PASS 26, FAIL 0, BLOCKED 0, NOT RUN 0                      |
| Regression CYC-02      | **9 test case**: PASS 9, FAIL 0, BLOCKED 0, NOT RUN 0                        |
| Otomasi Playwright     | **15 test PASS**                                                             |
| Defect aplikasi        | **0** defect nyata; tidak ada test case yang FAIL                            |
| Masalah desain test    | **0**                                                                        |
| Defect simulasi        | Tidak ada                                                                    |
| Evidence eksplorasi    | **5 screenshot**                                                             |
| Evidence eksekusi      | **35 screenshot**                                                            |

Requirement diperbarui berdasarkan hasil eksekusi. Regression CYC-02 telah selesai; retest tidak diperlukan karena tidak ada defect yang dilaporkan. Evidence eksekusi direferensikan pada execution log dan tersedia di [`05-test-execution/evidence/`](05-test-execution/evidence/).

## Struktur dan Navigasi Repositori

| Folder                                                               | Isi                                                                                                           |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| [`01-requirement/`](01-requirement/requirements.md)                  | Requirement turunan, asumsi, dan bukti eksplorasi ([`evidence/`](01-requirement/evidence/))                   |
| [`02-test-planning/`](02-test-planning/test-plan.md)                 | Test plan dan test environment                                                                                |
| [`03-test-scenarios/`](03-test-scenarios/test-scenarios.md)          | Test scenario serta pemetaan ke requirement dan test case                                                     |
| [`04-test-cases/`](04-test-cases/)                                   | Test case sebagai sumber utama desain dan test data                                                           |
| [`05-test-execution/`](05-test-execution/execution-log.md)           | Execution log dan evidence ([`evidence/`](05-test-execution/evidence/))                                       |
| [`06-bug-report/`](06-bug-report/bug-report.md)                      | Kebijakan dan indeks defect                                                                                   |
| [`07-retest-regression/`](07-retest-regression/retest-regression.md) | Retest dan regression (REG-001 sampai REG-009)                                                                |
| [`08-test-report/`](08-test-report/test-summary-report.md)           | Laporan ringkasan dan RTM                                                                                     |
| [`09-tools/testrail/`](09-tools/testrail/)                           | Bukti eksekusi CYC-01 dan CYC-02, TestRail, serta file impor CSV ([`evidence/`](09-tools/testrail/evidence/)) |
| [`10-automation/`](10-automation/)                                   | Script otomasi Playwright dan evidence hasil eksekusi ([`evidence/`](10-automation/evidence/))                |

**Urutan membaca yang disarankan:** requirement → test plan → test scenario → test case dan test data → RTM → execution log → bug report → retest/regression → laporan.

## Peran Tiap Tool

| Tool                    | Fungsi                                                   | Lokasi di repositori                       |
| :---------------------- | :------------------------------------------------------- | :----------------------------------------- |
| TestRail                | Test run, status per test case, dan hasil eksekusi       | [`09-tools/testrail/`](09-tools/testrail/) |
| Playwright (JavaScript) | Otomasi alur pengujian yang sama dengan pengujian manual | [`10-automation/`](10-automation/)         |
| GitHub                  | Dokumentasi proyek dan penyimpanan evidence              | Seluruh repositori                         |

Folder `10-automation/` berisi script otomasi dan evidence hasil eksekusi. README utama ini tidak menduplikasi petunjuk instalasi atau perintah eksekusi.

## Pola ID dan Traceability

Pola ID digunakan untuk menjaga keterkaitan antarartefak pengujian:

`REQ-{MODUL}-nnn` → `SCN-{MODUL}-nnn` → `TC-{MODUL}-nnn` → `REG-nnn` (subset regression).

ID temuan terdiri dari:

* `BUG-nnn`: defect aplikasi, dengan padanan tiket Jira `OHRM-n`.

* `DI-nnn`: masalah desain test.

ID artefak pendukung:

* `EXP-{MODUL}-nnn`: exploratory testing charter.

* `ASM-nnn`: asumsi.

* `TD-...`: test data.

* `SS-nnn`: screenshot eksplorasi.

Kode modul yang digunakan adalah `AUTH`, `PIM-ADD`, `PIM-SRC`, dan `E2E`. Test otomasi menggunakan TC-ID yang sama pada judul test. Lihat [RTM](08-test-report/rtm.md) untuk matriks traceability lengkap.

## Legenda Tag dan Status

### Tag requirement

| Tag                     | Arti                                                                                                                             |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `[OBSERVED: SS-xxx]`    | Terlihat langsung pada bukti, yaitu screenshot eksplorasi (`SS-nnn`) atau evidence eksekusi (misalnya `TC-AUTH-001_CYC01_PASS`). |
| `[ASSUMPTION: ASM-nnn]` | Asumsi desain tanpa bukti; daftar lengkap tersedia di [requirements.md](01-requirement/requirements.md#asumsi).                  |

### Status pengujian

| Status                                    | Digunakan untuk   | Arti                                                                                                                                   |
| :---------------------------------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `PASS`, `FAIL`, `BLOCKED`, `NOT RUN`      | Test case dan REG | Hasil eksekusi. Aturan penentuan dijelaskan pada [test-plan.md](02-test-planning/test-plan.md#7-status-eksekusi-dan-aturan-penilaian). |
| `OBSERVED`, `PARTIAL`, `UNVERIFIED`       | Requirement       | Tingkat keterlihatan perilaku pada screenshot; bukan hasil eksekusi test case.                                                         |
| `REPRODUCED`, `NOT REPRODUCED`, `NOT RUN` | Retest            | Menunjukkan apakah perilaku defect masih terjadi; bukan verifikasi bahwa defect telah diperbaiki.                                      |

## Batasan Proyek

* **Demo publik:** Aplikasi digunakan bersama dan data dapat di-reset sewaktu-waktu. Jumlah record maupun data lain dapat berubah tanpa pemberitahuan. Detail lingkungan tersedia di [environment.md](02-test-planning/environment.md).

* **Perbaikan defect:** Penulis tidak memiliki akses untuk memperbaiki aplikasi OrangeHRM. Karena itu, retest berarti menjalankan ulang pengujian untuk memeriksa apakah perilaku masih terjadi, bukan memverifikasi perbaikan aplikasi.

* **Akun uji:** Password akun uji fiktif (misalnya `budi123`, `sari123`, dan `tika123`) dicantumkan pada [test-data.md](04-test-cases/test-data.md). Akun tersebut hanya digunakan pada demo publik; jangan gunakan password yang sama pada layanan lain.

* **Sumber requirement:** Requirement bukan spesifikasi resmi OrangeHRM; seluruh requirement diturunkan dari pengamatan terhadap aplikasi.

## Disclaimer

Proyek ini merupakan portofolio QA independen yang dilakukan terhadap demo publik OrangeHRM untuk tujuan pembelajaran dan demonstrasi profesional. Proyek ini tidak ditugaskan atau disetujui oleh OrangeHRM, serta bukan merupakan pekerjaan untuk klien.
