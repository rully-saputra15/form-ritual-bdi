import {GojukaiForm} from "../interfaces";
import http from "./http";
import utils from "./utils";

const api = {
  createGojukaiForm(data: GojukaiForm) {
    return utils.apiHandler(http.post("api/method/ritual_form_bdi.api.create_gojukai_form", {
      nama: data.name,
      alamat: data.address,
      daerah: data.district,
      cetya: data.district,
      "jenis_kelamin": "Laki-Laki",
      "nomor_telepon": "08119421588",
      "tempat_lahir": "Palembang",
      "tanggal_lahir": "1998-01-15",
      "status_perkawinan": "Belum Menikah",
      "pekerjaan": "Pegawai swasta",
      "kewarganegaraan": "WNI",
      "pendidikan_terakhir": "S1",
      "aktif_sejak_tahun":"1998",
      "nama_anggota_terdekat":"Regina",
      "hubungan": "Saudara",
      "anggota_terdekat_aktif_sejak":"2002",
      "sudah_gojukai": 1,
      "tahun_gojukai":"2002",
      "sudah_okatagi": 0,
      "tahun_okatagi":"",
    }))
  }
}
