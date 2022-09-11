import {GojukaiForm} from "../interfaces";
import http from "./http";
import utils from "./utils";

const api = {
  createGojukaiForm(data: GojukaiForm) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append("data", JSON.stringify({
      nama: data.name,
      alamat: data.address,
      daerah: data.district,
      cetya: data.cetya,
      jenis_kelamin: data.gender,
      nomor_telepon: data.phoneNumber,
      tempat_lahir: data.placeOfBirth,
      tanggal_lahir: data.dateOfBirth,
      status_perkawinan: data.status,
      pekerjaan: data.job,
      kewarganegaraan: data.citizenship,
      pendidikan_terakhir: data.education,
      aktif_sejak_tahun: data.activeFrom,
      nama_anggota_terdekat: data.anotherMember.name,
      hubungan: data.anotherMember.relationship,
      anggota_terdekat_aktif_sejak: data.anotherMember.activeFrom,
      sudah_gojukai: data.anotherMember.gojukaiStatus === "Sudah" ? 1 : 0,
      tahun_gojukai: data.anotherMember.gojukaiYear,
      sudah_okatagi: data.anotherMember.okatagiStatus === "Sudah" ? 1 : 0,
      tahun_okatagi: data.anotherMember.okatagiYear,
      foto_diri_attachment: data.profilePicture
    }))
    return utils.apiHandler(http.post("api/method/ritual_form_bdi.api.create_gojukai_form", urlSearchParams
    ,{
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
    }));
  }
};

export default api;
