# Test Cases

## Ringkasan

| TC-ID                                                                                                      | Judul                                                                              | Prioritas | Tipe       | REG     | Otomasi                             |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------- | ---------- | ------- | ----------------------------------- |
| [TC-AUTH-001](#tc-auth-001--login-dengan-kredensial-admin-valid)                                           | Login dengan kredensial Admin valid                                                | Critical  | Positive   | REG-001 | auth-login.spec.js                  |
| [TC-AUTH-002](#tc-auth-002--login-dengan-username-dan-password-kosong)                                     | Login dengan Username dan Password kosong                                          | High      | Validation | —       | auth-login.spec.js                  |
| [TC-AUTH-003](#tc-auth-003--login-dengan-username-benar-dan-password-salah)                                | Login dengan Username benar dan Password salah                                     | High      | Negative   | REG-002 | auth-login.spec.js                  |
| [TC-AUTH-004](#tc-auth-004--login-dengan-username-dan-password-salah)                                      | Login dengan Username dan Password salah                                           | High      | Negative   | —       | auth-login.spec.js                  |
| [TC-PIM-ADD-001](#tc-pim-add-001--tambah-karyawan-dengan-first-name-dan-last-name-saja)                    | Tambah karyawan dengan First Name dan Last Name saja                               | Critical  | Positive   | REG-003 | pim-add-employee.spec.js            |
| [TC-PIM-ADD-002](#tc-pim-add-002--tambah-karyawan-dengan-create-login-details-aktif)                       | Tambah karyawan dengan Create Login Details aktif                                  | High      | Positive   | —       | —                                   |
| [TC-PIM-ADD-003](#tc-pim-add-003--save-dengan-semua-field-kosong-create-login-details-aktif)               | Save dengan semua field kosong (Create Login Details aktif)                        | High      | Validation | REG-004 | pim-add-employee-validation.spec.js |
| [TC-PIM-ADD-004](#tc-pim-add-004--batas-karakter-first-name-middle-name-dan-last-name)                     | Batas karakter First Name, Middle Name, dan Last Name                              | Medium    | Boundary   | —       | pim-add-employee-validation.spec.js |
| [TC-PIM-ADD-005](#tc-pim-add-005--batas-karakter-employee-id)                                              | Batas karakter Employee Id                                                         | Medium    | Boundary   | —       | pim-add-employee-validation.spec.js |
| [TC-PIM-ADD-006](#tc-pim-add-006--batas-karakter-username-create-login-details-aktif)                      | Batas karakter Username (Create Login Details aktif)                               | Medium    | Boundary   | —       | pim-add-employee-validation.spec.js |
| [TC-PIM-ADD-007](#tc-pim-add-007--batas-karakter-password-create-login-details-aktif)                      | Batas karakter Password (Create Login Details aktif)                               | Medium    | Boundary   | —       | pim-add-employee-validation.spec.js |
| [TC-PIM-ADD-008](#tc-pim-add-008--confirm-password-berbeda-dari-password)                                  | Confirm Password berbeda dari Password                                             | Medium    | Validation | —       | —                                   |
| [TC-PIM-ADD-009](#tc-pim-add-009--employee-id-terisi-otomatis-saat-form-dibuka)                            | Employee Id terisi otomatis saat form dibuka                                       | Medium    | Positive   | —       | —                                   |
| [TC-PIM-ADD-010](#tc-pim-add-010--tambah-karyawan-dengan-employee-id-yang-sudah-dipakai)                   | Tambah karyawan dengan Employee Id yang sudah dipakai                              | High      | Negative   | —       | —                                   |
| [TC-PIM-ADD-011](#tc-pim-add-011--upload-foto-profil-valid)                                                | Upload foto profil valid                                                           | Low       | Positive   | —       | —                                   |
| [TC-PIM-ADD-012](#tc-pim-add-012--upload-foto-tidak-valid-file-jpg-lebih-dari-1mb)                         | Upload foto tidak valid                                                            | Low       | Negative   | —       | —                                   |
| [TC-PIM-ADD-013](#tc-pim-add-013--buka-add-employee-dari-tombol--add-di-employee-list)                     | Buka Add Employee dari tombol + Add di Employee List                               | Medium    | Positive   | —       | —                                   |
| [TC-PIM-SRC-001](#tc-pim-src-001--cari-karyawan-berdasarkan-employee-name)                                 | Cari karyawan berdasarkan Employee Name                                            | Critical  | Positive   | REG-005 | pim-search-employee.spec.js         |
| [TC-PIM-SRC-002](#tc-pim-src-002--cari-karyawan-berdasarkan-employee-id)                                   | Cari karyawan berdasarkan Employee Id                                              | Critical  | Positive   | REG-006 | pim-search-employee.spec.js         |
| [TC-PIM-SRC-003](#tc-pim-src-003--cari-employee-name-yang-tidak-ada)                                       | Cari Employee Name yang tidak ada                                                  | High      | Negative   | —       | pim-search-employee.spec.js         |
| [TC-PIM-SRC-004](#tc-pim-src-004--cari-employee-id-yang-tidak-ada)                                         | Cari Employee Id yang tidak ada                                                    | High      | Negative   | REG-007 | pim-search-employee.spec.js         |
| [TC-PIM-SRC-005](#tc-pim-src-005--klik-search-tanpa-mengisi-filter)                                        | Klik Search tanpa mengisi filter                                                   | Medium    | Positive   | —       | —                                   |
| [TC-PIM-SRC-006](#tc-pim-src-006--reset-setelah-mengisi-filter)                                            | Reset setelah mengisi filter                                                       | Medium    | Positive   | —       | —                                   |
| [TC-PIM-SRC-007](#tc-pim-src-007--filter-employee-list-tampil-lengkap-dengan-nilai-default)                | Filter Employee List tampil lengkap dengan nilai default                           | Low       | Positive   | —       | —                                   |
| [TC-E2E-001](#tc-e2e-001--login-admin-tambah-karyawan-cari-berdasarkan-employee-id-verifikasi-nama-dan-id) | Login Admin, tambah karyawan, cari berdasarkan Employee Id, verifikasi nama dan Id | Critical  | End-to-End | REG-008 | e2e-add-then-search.spec.js         |
| [TC-E2E-002](#tc-e2e-002--login-sebagai-karyawan-yang-baru-dibuat)                                         | Login sebagai karyawan yang baru dibuat                                            | Low       | End-to-End | REG-009 | e2e-add-then-search.spec.js         |

Total Test Case: **26** 

## Detail

### TC-AUTH-001 — Login dengan kredensial Admin valid

| Atribut          | Isi                                                               |
| ---------------- | ----------------------------------------------------------------- |
| Scenario         | SCN-AUTH-001                                                      |
| Requirement      | REQ-AUTH-001                                                      |
| Prioritas / Tipe | Critical / Positive                                               |
| Prasyarat        | Halaman login terbuka. Kredensial demo tampil pada halaman login. |
| Data uji         | TD-AUTH-001                                                       |
| Regression       | REG-001                                                           |
| Otomasi          | auth-login.spec.js                                                |

**Langkah:**

1. Buka `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`.
2. Isi Username dengan `Admin`.
3. Isi Password dengan `admin123`.
4. Klik tombol **Login**.

**Expected result:**

* Halaman Dashboard tampil, menu **Dashboard** aktif, nama pengguna tampil di top bar.

### TC-AUTH-002 — Login dengan Username dan Password kosong

| Atribut          | Isi                    |
| ---------------- | ---------------------- |
| Scenario         | SCN-AUTH-002           |
| Requirement      | REQ-AUTH-002           |
| Prioritas / Tipe | High / Validation      |
| Prasyarat        | Halaman login terbuka. |
| Data uji         | TD-AUTH-002            |
| Regression       | —                      |
| Otomasi          | auth-login.spec.js     |

**Langkah:**

1. Biarkan Username dan Password kosong.
2. Klik tombol **Login**.

**Expected result:**

* Pesan `Required` muncul di bawah Username dan di bawah Password.

* Pengguna tetap berada di halaman login.

### TC-AUTH-003 — Login dengan Username benar dan Password salah

| Atribut          | Isi                    |
| ---------------- | ---------------------- |
| Scenario         | SCN-AUTH-002           |
| Requirement      | REQ-AUTH-003           |
| Prioritas / Tipe | High / Negative        |
| Prasyarat        | Halaman login terbuka. |
| Data uji         | TD-AUTH-003            |
| Regression       | REG-002                |
| Otomasi          | auth-login.spec.js     |

**Langkah:**

1. Isi Username dengan `Admin`.
2. Isi Password dengan `salah123`.
3. Klik tombol **Login**.

**Expected result:**

* Pesan `Invalid credentials` tampil.

* Pengguna tetap berada di halaman login.

### TC-AUTH-004 — Login dengan Username dan Password salah

| Atribut          | Isi                    |
| ---------------- | ---------------------- |
| Scenario         | SCN-AUTH-002           |
| Requirement      | REQ-AUTH-003           |
| Prioritas / Tipe | High / Negative        |
| Prasyarat        | Halaman login terbuka. |
| Data uji         | TD-AUTH-004            |
| Regression       | —                      |
| Otomasi          | auth-login.spec.js     |

**Langkah:**

1. Isi Username dengan `userSalah`.
2. Isi Password dengan `salah123`.
3. Klik tombol **Login**.

**Expected result:**

* Pesan `Invalid credentials` tampil.

* Pengguna tetap berada di halaman login.

### TC-PIM-ADD-001 — Tambah karyawan dengan First Name dan Last Name saja

| Atribut          | Isi                                               |
| ---------------- | ------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-001                                   |
| Requirement      | REQ-PIM-ADD-001, REQ-PIM-ADD-002, REQ-PIM-ADD-008 |
| Prioritas / Tipe | Critical / Positive                               |
| Prasyarat        | Sudah login sebagai Admin.                        |
| Data uji         | TD-ADD-001                                        |
| Regression       | REG-003                                           |
| Otomasi          | pim-add-employee.spec.js                          |

**Langkah:**

1. Klik menu **PIM** di sidebar.
2. Klik tab **Add Employee**.
3. Isi First Name `Bima` dan Last Name `Sakti`.
4. Klik **Save**.

**Expected result:**

* Karyawan tersimpan.

* Data karyawan memuat nama sesuai input.

### TC-PIM-ADD-002 — Tambah karyawan dengan Create Login Details aktif

| Atribut          | Isi                                                      |
| ---------------- | -------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-002                                          |
| Requirement      | REQ-PIM-ADD-005, REQ-PIM-ADD-008                         |
| Prioritas / Tipe | High / Positive                                          |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka. |
| Data uji         | TD-ADD-002                                               |
| Regression       | —                                                        |
| Otomasi          | —                                                        |

**Langkah:**

1. Isi First Name `Budi` dan Last Name `Santoso`.
2. Aktifkan toggle **Create Login Details**.
3. Isi Username `BudiSantoso`, pilih Status **Enabled**.
4. Isi Password dan Confirm Password dengan `budi123`.
5. Klik **Save**.

**Expected result:**

* Toast `Successfully Saved` tampil dan URL memuat `viewPersonalDetails`.

### TC-PIM-ADD-003 — Save dengan semua field kosong (Create Login Details aktif)

| Atribut          | Isi                                                      |
| ---------------- | -------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-003                                          |
| Requirement      | REQ-PIM-ADD-002, REQ-PIM-ADD-006                         |
| Prioritas / Tipe | High / Validation                                        |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka. |
| Data uji         | TD-ADD-003                                               |
| Regression       | REG-004                                                  |
| Otomasi          | pim-add-employee-validation.spec.js                      |

**Langkah:**

1. Aktifkan toggle **Create Login Details**.
2. Biarkan semua field kosong (kecuali Employee Id otomatis).
3. Klik **Save**.

**Expected result:**

* Pesan `Required` tampil pada First Name, Last Name, Username, dan Password; Confirm Password menampilkan `Password do not match`.

* Karyawan tidak tersimpan.

### TC-PIM-ADD-004 — Batas karakter First Name, Middle Name, dan Last Name

| Atribut          | Isi                                                      |
| ---------------- | -------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-004                                          |
| Requirement      | REQ-PIM-ADD-004                                          |
| Prioritas / Tipe | Medium / Boundary                                        |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka. |
| Data uji         | TD-ADD-004                                               |
| Regression       | —                                                        |
| Otomasi          | pim-add-employee-validation.spec.js                      |

**Langkah:**

1. Isi First Name, Middle Name, dan Last Name masing-masing dengan 31 karakter `a`.
2. Ulangi dengan 30 karakter.

**Expected result:**

* Untuk 31 karakter, tiap field menampilkan `Should not exceed 30 characters`.

* Untuk 30 karakter tidak ada pesan batas pada field (diterima).

### TC-PIM-ADD-005 — Batas karakter Employee Id

| Atribut          | Isi                                                      |
| ---------------- | -------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-004                                          |
| Requirement      | REQ-PIM-ADD-003, REQ-PIM-ADD-004                         |
| Prioritas / Tipe | Medium / Boundary                                        |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka. |
| Data uji         | TD-ADD-004                                               |
| Regression       | —                                                        |
| Otomasi          | pim-add-employee-validation.spec.js                      |

**Langkah:**

1. Hapus nilai Employee Id otomatis.
2. Isi Employee Id dengan 11 karakter `a`.
3. Ulangi dengan 10.

**Expected result:**

* Employee Id otomatis dapat dihapus dan diisi manual.

* Untuk 11 karakter, pesan `Should not exceed 10 characters` tampil.

* Untuk 10 karakter tidak ada pesan batas (diterima).

### TC-PIM-ADD-006 — Batas karakter Username (Create Login Details aktif)

| Atribut          | Isi                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------ |
| Scenario         | SCN-PIM-ADD-004                                                                      |
| Requirement      | REQ-PIM-ADD-004                                                                      |
| Prioritas / Tipe | Medium / Boundary                                                                    |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka, Create Login Details aktif. |
| Data uji         | TD-ADD-004                                                                           |
| Regression       | —                                                                                    |
| Otomasi          | pim-add-employee-validation.spec.js                                                  |

**Langkah:**

1. Isi Username dengan 41 karakter `a`.
2. Ulangi dengan 40 karakter.

**Expected result:**

* Untuk 41 karakter, pesan `Should not exceed 40 characters` tampil.

* Untuk 40 karakter tidak ada pesan batas (diterima).

### TC-PIM-ADD-007 — Batas karakter Password (Create Login Details aktif)

| Atribut          | Isi                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------ |
| Scenario         | SCN-PIM-ADD-004                                                                      |
| Requirement      | REQ-PIM-ADD-004                                                                      |
| Prioritas / Tipe | Medium / Boundary                                                                    |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka, Create Login Details aktif. |
| Data uji         | TD-ADD-004                                                                           |
| Regression       | —                                                                                    |
| Otomasi          | pim-add-employee-validation.spec.js                                                  |

**Langkah:**

1. Isi Password dengan 65 karakter `a`.
2. Ulangi dengan 64 karakter.

**Expected result:**

* Untuk 65 karakter, pesan `Should not exceed 64 characters` tampil.

* Untuk 64 karakter tidak ada pesan batas (diterima).

### TC-PIM-ADD-008 — Confirm Password berbeda dari Password

| Atribut          | Isi                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-006                                                                                                                                                                                 |
| Requirement      | REQ-PIM-ADD-010                                                                                                                                                                                 |
| Prioritas / Tipe | Medium / Validation                                                                                                                                                                             |
| Prasyarat        | Sudah login sebagai Admin. Halaman Add Employee terbuka, Create Login Details aktif. `sari123` diasumsikan memenuhi kebijakan password sehingga satu-satunya pelanggaran adalah ketidakcocokan. |
| Data uji         | TD-ADD-005                                                                                                                                                                                      |
| Regression       | —                                                                                                                                                                                               |
| Otomasi          | —                                                                                                                                                                                               |

**Langkah:**

1. Isi First Name `Sari` dan Last Name `Lestari`.
2. Isi Username `SariLestari`.
3. Isi Password `sari123` dan Confirm Password `sari321`.
4. Klik **Save**.

**Expected result:**

* Pesan ketidakcocokan password tampil di bawah Confirm Password.

* Karyawan tidak tersimpan: tidak ada perpindahan halaman dan record.

### TC-PIM-ADD-009 — Employee Id terisi otomatis saat form dibuka

| Atribut          | Isi                        |
| ---------------- | -------------------------- |
| Scenario         | SCN-PIM-ADD-005            |
| Requirement      | REQ-PIM-ADD-003            |
| Prioritas / Tipe | Medium / Positive          |
| Prasyarat        | Sudah login sebagai Admin. |
| Data uji         | —                          |
| Regression       | —                          |
| Otomasi          | —                          |

**Langkah:**

1. Buka halaman Add Employee dan catat nilai Employee Id.
2. Buka ulang halaman Add Employee dan catat nilai Employee Id.

**Expected result:**

* Employee Id berisi 4 digit angka; nilai kedua dicatat sebagai observasi, bukan kriteria lulus.

### TC-PIM-ADD-010 — Tambah karyawan dengan Employee Id yang sudah dipakai

| Atribut          | Isi                                                                             |
| ---------------- | ------------------------------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-005                                                                 |
| Requirement      | REQ-PIM-ADD-009                                                                 |
| Prioritas / Tipe | High / Negative                                                                 |
| Prasyarat        | Karyawan dari TC-PIM-ADD-001 sudah tersimpan dan Employee Id aktualnya dicatat. |
| Data uji         | TD-ADD-006 (Employee Id dari TD-ADD-001)                                        |
| Regression       | —                                                                               |
| Otomasi          | —                                                                               |

**Langkah:**

1. Buka halaman Add Employee.
2. Isi First Name `Bima` dan Last Name `Duplikat`.
3. Ganti Employee Id dengan Employee Id karyawan dari TC-PIM-ADD-001.
4. Klik **Save**.

**Expected result:**

* Save ditolak: pesan error yang menyatakan Employee Id sudah dipakai tampil.

### TC-PIM-ADD-011 — Upload foto profil valid

| Atribut          | Isi                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-007                                                                              |
| Requirement      | REQ-PIM-ADD-007                                                                              |
| Prioritas / Tipe | Low / Positive                                                                               |
| Prasyarat        | Sudah login sebagai Admin. Tersedia file jpg, png, dan gif berukuran 1mb  atau di bawah 1MB. |
| Data uji         | TD-ADD-007                                                                                   |
| Regression       | —                                                                                            |
| Otomasi          | —                                                                                            |

**Langkah:**

1. Buka halaman Add Employee.
2. Klik ikon `+` pada area foto dan pilih file jpg, png, dan gif di bawah 1MB.
3. Klik **Save**.

**Expected result:**

* Foto diterima dan tersimpan.

### TC-PIM-ADD-012 — Upload foto tidak valid

| Atribut          | Isi                                                                                |
| ---------------- | ---------------------------------------------------------------------------------- |
| Scenario         | SCN-PIM-ADD-007                                                                    |
| Requirement      | REQ-PIM-ADD-007                                                                    |
| Prioritas / Tipe | Low / Negative                                                                     |
| Prasyarat        | Sudah login sebagai Admin. Tersedia file bertipe jpg, png, dan gif lebih dari 1MB. |
| Data uji         | TD-ADD-007                                                                         |
| Regression       | —                                                                                  |
| Otomasi          | —                                                                                  |

**Langkah:**

1. Buka halaman Add Employee.
2. Klik ikon `+` pada area foto dan pilih file  jpg, png, dan gif di atas 1MB.
3. Klik **Save**

**Expected result:**

* Foto ditolak dan pesan penolakan tampil.

### TC-PIM-ADD-013 — Buka Add Employee dari tombol + Add di Employee List

| Atribut          | Isi                        |
| ---------------- | -------------------------- |
| Scenario         | SCN-PIM-ADD-008            |
| Requirement      | REQ-PIM-ADD-001            |
| Prioritas / Tipe | Medium / Positive          |
| Prasyarat        | Sudah login sebagai Admin. |
| Data uji         | —                          |
| Regression       | —                          |
| Otomasi          | —                          |

**Langkah:**

1. Klik menu **PIM** di sidebar; tab **Employee List** terbuka.
2. Klik tombol **+ Add**.

**Expected result:**

* Halaman Add Employee tampil dengan tab **Add Employee** aktif.

* Form memuat Employee Full Name, Employee Id terisi otomatis, toggle Create Login Details, serta tombol Cancel dan Save.

### TC-PIM-SRC-001 — Cari karyawan berdasarkan Employee Name

| Atribut          | Isi                                                                      |
| ---------------- | ------------------------------------------------------------------------ |
| Scenario         | SCN-PIM-SRC-001                                                          |
| Requirement      | REQ-PIM-SRC-004                                                          |
| Prioritas / Tipe | Critical / Positive                                                      |
| Prasyarat        | Sudah login sebagai Admin. Karyawan dari TC-PIM-ADD-001 sudah tersimpan. |
| Data uji         | TD-ADD-001                                                               |
| Regression       | REG-005                                                                  |
| Otomasi          | pim-search-employee.spec.js                                              |

**Langkah:**

1. Klik menu **PIM**, lalu tab **Employee List**.
2. Ketik `Bima Sakti` pada Employee Name.
3. Klik **Search**.

**Expected result:**

* Hasil pencarian memuat satu baris dengan nama `Bima Sakti` dan Employee Id `0465` yang dicatat pada TC-PIM-ADD-001.

### TC-PIM-SRC-002 — Cari karyawan berdasarkan Employee Id

| Atribut          | Isi                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| Scenario         | SCN-PIM-SRC-001                                                                                            |
| Requirement      | REQ-PIM-SRC-005                                                                                            |
| Prioritas / Tipe | Critical / Positive                                                                                        |
| Prasyarat        | Sudah login sebagai Admin. Karyawan dari TC-PIM-ADD-001 sudah tersimpan dan Employee Id aktualnya dicatat. |
| Data uji         | TD-ADD-001                                                                                                 |
| Regression       | REG-006                                                                                                    |
| Otomasi          | pim-search-employee.spec.js                                                                                |

**Langkah:**

1. Buka tab **Employee List**.
2. Isi Employee Id `0465` Id aktual dari `Bima Sakti`.
3. Klik **Search**.

**Expected result:**

* Hasil pencarian memuat karyawan dengan Id `0465`.

### TC-PIM-SRC-003 — Cari Employee Name yang tidak ada

| Atribut          | Isi                                                       |
| ---------------- | --------------------------------------------------------- |
| Scenario         | SCN-PIM-SRC-002                                           |
| Requirement      | REQ-PIM-SRC-006                                           |
| Prioritas / Tipe | High / Negative                                           |
| Prasyarat        | Sudah login sebagai Admin. Halaman Employee List terbuka. |
| Data uji         | TD-SRC-001                                                |
| Regression       | —                                                         |
| Otomasi          | pim-search-employee.spec.js                               |

**Langkah:**

1. Ketik `Zidan Bisma` pada Employee Name.
2. Klik **Search**.

**Expected result:**

* Pesan tanpa hasil tampil dan tidak ada baris data.

### TC-PIM-SRC-004 — Cari Employee Id yang tidak ada

| Atribut          | Isi                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------- |
| Scenario         | SCN-PIM-SRC-002                                                                             |
| Requirement      | REQ-PIM-SRC-006                                                                             |
| Prioritas / Tipe | High / Negative                                                                             |
| Prasyarat        | Sudah login sebagai Admin. Halaman Employee List terbuka. Employee Id `8888` belum dipakai. |
| Data uji         | TD-SRC-002                                                                                  |
| Regression       | REG-007                                                                                     |
| Otomasi          | pim-search-employee.spec.js                                                                 |

**Langkah:**

1. Isi Employee Id dengan `8888`.
2. Klik **Search**.

**Expected result:**

* Pesan tanpa hasil tampil dan tidak ada baris data.

### TC-PIM-SRC-005 — Klik Search tanpa mengisi filter

| Atribut          | Isi                                                       |
| ---------------- | --------------------------------------------------------- |
| Scenario         | SCN-PIM-SRC-003                                           |
| Requirement      | REQ-PIM-SRC-002, REQ-PIM-SRC-003                          |
| Prioritas / Tipe | Medium / Positive                                         |
| Prasyarat        | Sudah login sebagai Admin. Halaman Employee List terbuka. |
| Data uji         | —                                                         |
| Regression       | —                                                         |
| Otomasi          | —                                                         |

**Langkah:**

1. Catat jumlah record yang tampil.
2. Klik **Search** tanpa mengisi filter.
3. Bandingkan jumlah record sebelum dan sesudah.

**Expected result:**

* Setelah klik Search tanpa filter, jumlah record sama dengan sebelum klik.

### TC-PIM-SRC-006 — Reset setelah mengisi filter

| Atribut          | Isi                                                       |
| ---------------- | --------------------------------------------------------- |
| Scenario         | SCN-PIM-SRC-003                                           |
| Requirement      | REQ-PIM-SRC-003                                           |
| Prioritas / Tipe | Medium / Positive                                         |
| Prasyarat        | Sudah login sebagai Admin. Halaman Employee List terbuka. |
| Data uji         | TD-SRC-001                                                |
| Regression       | —                                                         |
| Otomasi          | —                                                         |

**Langkah:**

1. Ketik `Zidan Bisma` pada Employee Name dan klik **Search**.
2. Klik **Reset**.

**Expected result:**

* Field Employee Name kosong kembali dan jumlah record kembali sama dengan sebelum filter diisi.

### TC-PIM-SRC-007 — Filter Employee List tampil lengkap dengan nilai default

| Atribut          | Isi                        |
| ---------------- | -------------------------- |
| Scenario         | SCN-PIM-SRC-003            |
| Requirement      | REQ-PIM-SRC-001            |
| Prioritas / Tipe | Low / Positive             |
| Prasyarat        | Sudah login sebagai Admin. |
| Data uji         | —                          |
| Regression       | —                          |
| Otomasi          | —                          |

**Langkah:**

1. Klik menu **PIM** di sidebar, lalu tab **Employee List**.
2. Periksa filter dan tombol yang tampil tanpa mengubah nilai apa pun.

**Expected result:**

* Filter Employee Name, Employee Id, Employment Status, Include, Supervisor Name, Job Title, dan Sub Unit tampil, beserta tombol Reset, Search, dan `+ Add`.

### TC-E2E-001 — Login Admin, tambah karyawan, cari berdasarkan Employee Id, verifikasi nama dan Id

| Atribut          | Isi                                                             |
| ---------------- | --------------------------------------------------------------- |
| Scenario         | SCN-E2E-001                                                     |
| Requirement      | REQ-AUTH-001, REQ-PIM-ADD-008, REQ-PIM-SRC-004, REQ-PIM-SRC-005 |
| Prioritas / Tipe | Critical / End-to-End                                           |
| Prasyarat        | Halaman login terbuka.                                          |
| Data uji         | TD-E2E-001                                                      |
| Regression       | REG-008                                                         |
| Otomasi          | e2e-add-then-search.spec.js                                     |

**Langkah:**

1. Login sebagai Admin.
2. Buka PIM, tab **Add Employee**.
3. Isi First Name `Tika` dan Last Name `Putri`; catat Employee Id.
4. Aktifkan toggle **Create Login Details**.
5. Isi Username `TikaPutri`, pilih Status **Enabled**.
6. Isi Password dan Confirm Password dengan `tika123`.
7. Klik **Save**.
8. Buka tab **Employee List**.
9. Isi Employee Id dengan Id yang dicatat dan klik **Search**.
10. Periksa nama dan Employee Id pada baris hasil.

**Expected result:**

* Hasil pencarian memuat satu baris dengan nama dan Employee Id sesuai input.

### TC-E2E-002 — Login sebagai karyawan yang baru dibuat

| Atribut          | Isi                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| Scenario         | SCN-E2E-002                                                                                                   |
| Requirement      | REQ-PIM-ADD-005                                                                                               |
| Prioritas / Tipe | Low / End-to-End                                                                                              |
| Prasyarat        | Karyawan dari TC-E2E-001 tersimpan dengan Status Enabled. Akun baru diasumsikan dapat langsung dipakai login. |
| Data uji         | TD-E2E-001                                                                                                    |
| Regression       | REG-009                                                                                                       |
| Otomasi          | e2e-add-then-search.spec.js                                                                                   |

**Langkah:**

1. Logout dari akun Admin.
2. Login dengan Username `TikaPutri` dan Password `tika123`.

**Expected result:**

* Login berhasil: halaman Dashboard tampil dan nama pengguna karyawan tampil di top bar.
