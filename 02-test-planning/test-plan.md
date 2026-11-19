# Test Plan

## 1. Tujuan

Memverifikasi alur "tambah karyawan di PIM lalu temukan melalui Employee List" pada demo OrangeHRM, mencakup kasus positif, negatif, validasi input, dan penanganan error.

## 2. Lingkup

| Dalam lingkup                                                                                                                                                                                                                                                | Di luar lingkup                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login Admin (prasyarat), PIM > Add Employee (data minimal, upload foto, Create Login Details, validasi, Employee Id), PIM > Employee List (cari berdasarkan Employee Name dan Employee Id, tanpa hasil, Reset, tampilan filter), login sebagai karyawan baru | Modul lain (Leave, Time, Recruitment, Performance, Claim, Buzz, Directory), Admin > User Management, edit dan hapus karyawan, import CSV, filter Employment Status/Include/Supervisor/Job Title/Sub Unit (selain tampilan), performa, keamanan, kompatibilitas lintas browser |

Rincian: 26 test case

## 3. Pendekatan dan jenis pengujian

| Jenis                                                  | Cara dipakai                                                                   | Test case / dokumen                                                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Smoke                                                  | Dijalankan pertama; jika gagal, eksekusi dihentikan dan environment dilaporkan | TC-AUTH-001, TC-PIM-SRC-007                                                                                  |
| Functional dan positif                                 | Alur utama tambah dan cari karyawan                                            | TC-PIM-ADD-001, TC-PIM-ADD-002, TC-PIM-SRC-001, TC-PIM-SRC-002                                               |
| Negatif dan validasi                                   | Kredensial salah, field wajib, Employee Id duplikat, tanpa hasil               | TC-AUTH-002 s.d. TC-AUTH-004, TC-PIM-ADD-003, TC-PIM-ADD-008, TC-PIM-ADD-010, TC-PIM-SRC-003, TC-PIM-SRC-004 |
| Boundary (equivalence partitioning dan boundary value) | Panjang karakter: nilai batas dan batas+1 dari pesan yang teramati             | TC-PIM-ADD-004 s.d. TC-PIM-ADD-007                                                                           |
| End-to-End                                             | Login → tambah → cari → verifikasi                                             | TC-E2E-001, TC-E2E-002                                                                                       |
| Regression dan retest                                  | Subset REG-001 s.d. REG-009 pada CYC-02; retest FAIL sebagai eksekusi ulang    | [retest-regression.md](../07-retest-regression/retest-regression.md)                                         |
| Otomasi                                                | Playwright untuk alur yang stabil; judul test memuat TC-ID                     | [10-automation](../10-automation/)                                                                           |

## 4. Environment

Demo publik pihak ketiga; versi dan kondisi dicatat pada setiap sesi. Detail dan hal yang tidak diketahui: [environment.md](environment.md). Tools: TestRail (test case dan eksekusi),Playwright JavaScript (otomasi).

## 5. Data uji

Mengikuti [test-data.md](../04-test-cases/test-data.md). Data bersifat fiktif dan tanpa data pribadi.

## 6. Prioritas test case

| Prioritas | Arti                              |
| --------- | --------------------------------- |
| Critical  | Menghalangi alur utama jika gagal |
| High      | Validasi atau penolakan penting   |
| Medium    | Batas dan perilaku pendukung      |
| Low       | Opsional atau kasus tepi          |

Prioritas menyatakan urutan dan kepentingan test case. Severity defect (dampak temuan) didefinisikan terpisah di [bug-report.md](../06-bug-report/bug-report.md#definisi-severity).

## 7. Status eksekusi dan aturan penilaian

| Status    | Arti                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `PASS`    | Semua expected result terpenuhi, dengan bukti                                        |
| `FAIL`    | Hasil aktual tidak sesuai expected; penyebab dicatat sebagai `BUG-nnn` atau `DI-nnn` |
| `BLOCKED` | Tidak dapat dijalankan karena prasyarat atau lingkungan; alasan dicatat              |
| `NOT RUN` | Belum dijalankan                                                                     |

## 8. Kriteria

| Jenis          | Kriteria                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Selesai CYC-01 | Seluruh test case inti berstatus PASS, FAIL, atau BLOCKED beserta bukti; setiap FAIL punya `BUG-nnn` atau `DI-nnn`                        |
| Selesai CYC-02 | Subset REG dibekukan dan dijalankan; test case FAIL karena defect sudah diretest                                                          |
| Selesai proyek | Laporan dan RTM terisi dari data nyata dan sama dengan execution log; validasi dokumen `0 masalah`                                        |
| Penangguhan    | TC-AUTH-001 FAIL atau demo tidak dapat diakses: eksekusi dihentikan, test case lain yang membutuhkan login ditandai BLOCKED dengan alasan |

## 9. Urutan eksekusi dan dependensi

Dependensi data antar test case:

| Test case      | Bergantung pada | Syarat                                                 |
| -------------- | --------------- | ------------------------------------------------------ |
| TC-PIM-SRC-001 | TC-PIM-ADD-001  | Record `Bima Sakti` harus tersimpan                    |
| TC-PIM-SRC-002 | TC-PIM-ADD-001  | Employee Id aktual harus tercatat                      |
| TC-PIM-ADD-010 | TC-PIM-ADD-001  | Employee Id aktual harus tercatat                      |
| TC-E2E-002     | TC-E2E-001      | Akun `TikaPutri` harus tersimpan dengan Status Enabled |

Jika test case prasyarat tidak PASS, test case yang bergantung berstatus BLOCKED dengan alasan tersebut. Urutan CYC-01 yang disarankan:

| Urutan | Test case                                                                                                      |
| ------ | -------------------------------------------------------------------------------------------------------------- |
| 1      | TC-AUTH-001                                                                                                    |
| 2      | TC-PIM-SRC-007                                                                                                 |
| 3      | TC-AUTH-002, TC-AUTH-003, TC-AUTH-004                                                                          |
| 4      | TC-PIM-ADD-009, TC-PIM-ADD-013                                                                                 |
| 5      | TC-PIM-ADD-001                                                                                                 |
| 6      | TC-PIM-SRC-001, TC-PIM-SRC-002, TC-PIM-ADD-010                                                                 |
| 7      | TC-PIM-ADD-002, TC-PIM-ADD-003, TC-PIM-ADD-004, TC-PIM-ADD-005, TC-PIM-ADD-006, TC-PIM-ADD-007, TC-PIM-ADD-008 |
| 8      | TC-PIM-SRC-003, TC-PIM-SRC-004, TC-PIM-SRC-005, TC-PIM-SRC-006                                                 |
| 9      | TC-E2E-001                                                                                                     |
| 10     | Opsional: TC-PIM-ADD-011, TC-PIM-ADD-012, TC-E2E-002                                                           |

CYC-02 memakai data uji yang sama dengan CYC-01 ([test-data.md](../04-test-cases/test-data.md)); penanganan record dari CYC-01 (dipakai ulang atau dihapus) dicatat pada kolom Catatan execution log.

## 10. Risiko

| Risiko                                        | Dampak                                  | Mitigasi                                                                        |
| --------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| Demo di-reset atau dimodifikasi pengguna lain | Data uji dan hasil pencarian berubah    | Data unik per cycle, ambil bukti saat eksekusi, bandingkan sebelum dan sesudah. |
| Versi aplikasi berubah antar sesi             | Hasil CYC-01 dan CYC-02 tidak sebanding | Catat versi footer tiap sesi.                                                   |
| Notifikasi cepat hilang                       | Bukti Save tidak terambil               | Rekam layar atau ambil screenshot segera setelah Save                           |
| Uji batas meninggalkan record sampah          | Data demo publik tercemar               | Catat Employee Id record yang terlanjur tersimpan pada execution log            |
| Defect tidak dapat diperbaiki                 | Retest klasik tidak mungkin             | Lihat batasan di retest-regression.md                                           |
| Server demo publik                            | Beban berlebih                          | Otomasi memakai 1 worker, tidak dijalankan berulang-ulang                       |

## 11. Peran dan deliverable

Proyek perorangan: satu penguji memegang seluruh tahap dari desain sampai laporan. Pengganti review antar peran adalah traceability di [RTM](../08-test-report/rtm.md).

Deliverable: requirement, test plan, environment, scenario, test case, test data, charter eksploratori, execution log beserta bukti, bug report, retest dan regression, RTM, laporan ringkasan, dan proyek otomasi.

## 12. Jadwal

Urutan kerja: CYC-01 → defect → otomasi → CYC-02 → laporan akhir.
