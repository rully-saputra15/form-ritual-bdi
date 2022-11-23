import {Button, Heading, Image, RadioProps, VStack} from "@chakra-ui/react";
import {FC} from "react";
import {DeepRequired, FieldErrorsImpl, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {GojukaiForm} from "../../../interfaces";
import LogoMnsbdi from "../../../assets/logo-mnsbdi.png";
import {NormalInput} from "../../../components/Normalnput";
import {SelectInput} from "../../../components/SelectInput";
import {TextAreaInput} from "../../../components/TextAreaInput";
import {PictureInput} from "../../../components/PictureInput";
import {RadioInput} from "../../../components/RadioInput";
import {motion} from "framer-motion";
import {itemFormVariant, mainFormVariant} from "../../../constants/animation";
import {citizenship, district} from "../../../constants/data";

interface GojukaiPageProps {
  form: UseFormRegister<GojukaiForm>;
  errors: FieldErrorsImpl<DeepRequired<GojukaiForm>>
  showGojukaiYearInput: boolean;
  showOkatagiYearInput: boolean;
  genderData: string[];
  statusData: string[];
  educationData: string[];
  relationshipData: string[];
  radioAcceptedOptionsData: RadioProps[];
  handleSubmit: UseFormHandleSubmit<GojukaiForm>;
  handleSubmitForm: (data: any) => void;
}

const GojukaiPage: FC<GojukaiPageProps> = (
  {
    form,
    errors,
    showGojukaiYearInput,
    showOkatagiYearInput,
    genderData,
    statusData,
    educationData,
    relationshipData,
    radioAcceptedOptionsData,
    handleSubmit,
    handleSubmitForm
  }
) => {
  return (
    <VStack spacing="15px" mx={8}>
      <Image src={LogoMnsbdi} alt="logo" boxSize="150px"/>
      <Heading size="lg">Form Pengajuan Gojukai</Heading>
      <motion.form style={{ width: "100%" }}
                   variants={mainFormVariant}
                   initial="hidden"
                   animate="visible"
                   onSubmit={handleSubmit(handleSubmitForm)}>
        <NormalInput label="Nama Jelas Pemohon"
                     type="text"
                     isEmpty={errors.name?.type === "required"}
                     errorMessage="Nama pengaju perlu diisi"
                     placeholder="Jane Doe"
                     inputHookForm={form("name",{required: true})}/>
        <SelectInput label="Daerah"
                     type="district"
                     isEmpty={errors.district?.type === "required"}
                     errorMessage="Daerah perlu diisi"
                     placeholder="Daerah"
                     options={district}
                     inputHookForm={form("district", {required: true})}/>
        <NormalInput label="Sentra/Cetya"
                     type="text"
                     isEmpty={errors.cetya?.type === "required"}
                     errorMessage="Bagian cetya perlu diisi"
                     placeholder="Contoh: Ekayana"
                     inputHookForm={form("cetya", {required: true})}/>
        <SelectInput label="Jenis Kelamin"
                     type="gender"
                     placeholder="-"
                     isEmpty={errors.gender?.type === "required"}
                     errorMessage="Jenis kelamin perlu diisi"
                     options={genderData}
                     inputHookForm={form("gender", {required: true})}/>
        <NormalInput label="Nomor Telepon"
                     type="text"
                     isEmpty={errors.phoneNumber?.type === "required"}
                     errorMessage="Nomor telepon perlu diisi"
                     placeholder="Contoh: 08111123123"
                     inputHookForm={form("phoneNumber", {required: true})}/>
        <NormalInput label="Tempat Lahir"
                     type="text"
                     isEmpty={errors.placeOfBirth?.type === "required"}
                     errorMessage="Tempat lahir perlu diisi"
                     placeholder="Contoh: DKI Jakarta"
                     inputHookForm={form("placeOfBirth", {required: true})}/>
        <NormalInput label="Tanggal Lahir"
                     type="date"
                     isEmpty={errors.dateOfBirth?.type === "required"}
                     errorMessage="Tanggal lahir perlu diisi"
                     placeholder="dd-mm-yyyy"
                     inputHookForm={form("dateOfBirth", {required: true})}/>
        <SelectInput label="Status Perkawinan"
                     type="status"
                     isEmpty={errors.status?.type === "required"}
                     errorMessage="Status perkawinan perlu diisi"
                     options={statusData}
                     placeholder="Contoh: Belum Menikah"
                     inputHookForm={form("status", {required: true})}/>
        <TextAreaInput label="Alamat Lengkap"
                       type="area"
                       isEmpty={errors.address?.type === "required"}
                       errorMessage="Alamat perlu diisi"
                       placeholder="Contoh: Jl. Padang no 25"
                       inputHookForm={form("address", {required: true})}/>
        <NormalInput label="Pekerjaan"
                     type="text"
                     isEmpty={errors.job?.type === "required"}
                     errorMessage="Pekerjaan perlu diisi"
                     placeholder="Contoh: Pegawai"
                     inputHookForm={form("job", {required: true})}/>
        <SelectInput label="Kewarganegaraan"
                     type="citizenship"
                     isEmpty={errors.citizenship?.type === "required"}
                     errorMessage="Kewarganegaraan perlu diisi"
                     options={citizenship}
                     placeholder="Contoh: WNI"
                     inputHookForm={form("citizenship", {required: true})}/>
        <SelectInput label="Pendidikan Terakhir"
                     type="education"
                     isEmpty={errors.education?.type === "required"}
                     errorMessage="Pendidikan terakhir perlu diisi"
                     options={educationData}
                     placeholder="Contoh: SMA"
                     inputHookForm={form("education", {required: true})}/>
        <NormalInput label="Aktif Sejak Tahun"
                     type="number"
                     isEmpty={errors.activeFrom?.type === "required"}
                     errorMessage="Tahun aktif perlu diisi"
                     placeholder="Contoh: 1998"
                     inputHookForm={form("activeFrom", {required: true})}/>
        <PictureInput label="Foto Diri"
                      subLabel="Ukuran 3x4"
                      isEmpty={errors.profilePicture?.type === "required"}
                      errorMessage="Foto diri harus di upload"
                      inputHookForm={form("profilePicture", {required: true})}/>
        <motion.div variants={itemFormVariant}>
          <Heading size="md" textAlign="left" my={2}>Anggota Terdekat</Heading>
        </motion.div>
        <NormalInput label="Nama"
                     type="text"
                     isEmpty={errors.anotherMember?.name?.type === "required"}
                     errorMessage="Nama anggota terdekat harus diisi"
                     placeholder="Contoh: Jane Doe"
                     inputHookForm={form("anotherMember.name", {required: true})}/>
        <SelectInput label="Hubungan"
                     type="relationship"
                     isEmpty={errors.anotherMember?.relationship?.type === "required"}
                     errorMessage="Hubungan dengan anggota terdekat harus diisi"
                     options={relationshipData}
                     placeholder="Contoh: Orang Tua"
                     inputHookForm={form("anotherMember.relationship", {required: true})}/>
        <NormalInput label="Aktif sejak tahun (anggota terdekat)"
                     type="number"
                     isEmpty={errors.anotherMember?.activeFrom?.type === "required"}
                     errorMessage="Tahun aktif dari anggota terdekat harus diisi"
                     placeholder="Contoh: 1998"
                     inputHookForm={form("anotherMember.activeFrom", {required: true})}/>
        <RadioInput label="Pemberkahan Gojukai"
                    options={radioAcceptedOptionsData}
                    isEmpty={errors.anotherMember?.gojukaiStatus?.type === "required"}
                    errorMessage="Status gojukai perlu diisi"
                    inputHookForm={form("anotherMember.gojukaiStatus", {required: true})}/>
        {
          showGojukaiYearInput && (
            <NormalInput label="Tahun Pemberkahan Gojukai"
                         type="number"
                         isEmpty={showGojukaiYearInput}
                         errorMessage="Tahun Gojukai perlu diisi"
                         placeholder="Contoh: 1998"
                         inputHookForm={form("anotherMember.gojukaiYear", {required: showGojukaiYearInput})}/>
          )
        }
        <RadioInput label="Terima Okatagi Gohonzon"
                    options={radioAcceptedOptionsData}
                    isEmpty={errors.anotherMember?.okatagiStatus?.type === "required"}
                    errorMessage="Status Okatagi Gohonzon perlu diisi"
                    inputHookForm={form("anotherMember.okatagiStatus", {required: true})}/>
        {
          showOkatagiYearInput && (
            <NormalInput label="Tahun Terima Okatagi Gohonzon"
                         type="number"
                         isEmpty={showOkatagiYearInput}
                         errorMessage="Tahun Terima Okatagi Gohonzon perlu diisi"
                         placeholder="Contoh: 1998"
                         inputHookForm={form("anotherMember.okatagiYear", {required: showOkatagiYearInput})}/>
          )
        }
        <motion.div variants={itemFormVariant}>
          <Button type="submit"
                  variant="solid"
                  size="lg"
                  w="100%"
                  my={2}
                  colorScheme="blackAlpha">
            Submit
          </Button>
        </motion.div>
      </motion.form>
    </VStack>
  );
};

export default GojukaiPage;
