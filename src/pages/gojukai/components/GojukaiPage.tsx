import {Button, Heading, Image, RadioProps, VStack} from "@chakra-ui/react";
import {FC} from "react";
import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
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
                     placeholder="Jane Doe"
                     inputHookForm={form("name")}/>
        <SelectInput label="Daerah"
                     type="district"
                     placeholder="Daerah"
                     options={district}
                     inputHookForm={form("district")}/>
        <NormalInput label="Sentra/Cetya"
                     type="text"
                     placeholder="Contoh: Ekayana"
                     inputHookForm={form("cetya")}/>
        <SelectInput label="Jenis Kelamin"
                     type="gender"
                     placeholder="-"
                     options={genderData}
                     inputHookForm={form("gender")}/>
        <NormalInput label="Nomor Telepon"
                     type="text"
                     placeholder="Contoh: 08111123123"
                     inputHookForm={form("phoneNumber")}/>
        <NormalInput label="Tempat Lahir"
                     type="text"
                     placeholder="Contoh: DKI Jakarta"
                     inputHookForm={form("placeOfBirth")}/>
        <NormalInput label="Tanggal Lahir"
                     type="date"
                     placeholder="dd-mm-yyyy"
                     inputHookForm={form("dateOfBirth")}/>
        <SelectInput label="Status Perkawinan"
                     type="status"
                     options={statusData}
                     placeholder="Contoh: Belum Menikah"
                     inputHookForm={form("status")}/>
        <TextAreaInput label="Alamat Lengkap"
                       type="area"
                       placeholder="Contoh: Jl. Padang no 25"
                       inputHookForm={form("address")}/>
        <NormalInput label="Pekerjaan"
                     type="text"
                     placeholder="Contoh: Pegawai"
                     inputHookForm={form("job")}/>
        <SelectInput label="Kewarganegaraan"
                     type="citizenship"
                     options={citizenship}
                     placeholder="Contoh: WNI"
                     inputHookForm={form("citizenship")}/>
        <SelectInput label="Pendidikan Terakhir"
                     type="education"
                     options={educationData}
                     placeholder="Contoh: SMA"
                     inputHookForm={form("education")}/>
        <NormalInput label="Aktif Sejak Tahun"
                     type="number"
                     placeholder="Contoh: 1998"
                     inputHookForm={form("activeFrom")}/>
        <PictureInput label="Foto Diri"
                      subLabel="Ukuran 3x4"
                      inputHookForm={form("profilePicture")}/>
        <motion.div variants={itemFormVariant}>
          <Heading size="md" textAlign="left" my={2}>Anggota Terdekat</Heading>
        </motion.div>
        <NormalInput label="Nama"
                     type="text"
                     placeholder="Contoh: Jane Doe"
                     inputHookForm={form("anotherMember.name")}/>
        <SelectInput label="Hubungan"
                     type="relationship"
                     options={relationshipData}
                     placeholder="Contoh: Orang Tua"
                     inputHookForm={form("anotherMember.relationship")}/>
        <NormalInput label="Aktif sejak tahun (anggota terdekat)"
                     type="number"
                     placeholder="Contoh: 1998"
                     inputHookForm={form("anotherMember.activeFrom")}/>
        <RadioInput label="Pemberkahan Gojukai"
                    options={radioAcceptedOptionsData}
                    inputHookForm={form("anotherMember.gojukaiStatus")}/>
        {
          showGojukaiYearInput && (
            <NormalInput label="Tahun Pemberkahan Gojukai"
                         type="number"
                         placeholder="Contoh: 1998"
                         inputHookForm={form("anotherMember.gojukaiYear")}/>
          )
        }
        <RadioInput label="Terima Okatagi Gohonzon"
                    options={radioAcceptedOptionsData}
                    inputHookForm={form("anotherMember.okatagiStatus")}/>
        {
          showOkatagiYearInput && (
            <NormalInput label="Tahun Terima Okatagi Gohonzon"
                         type="number"
                         placeholder="Contoh: 1998"
                         inputHookForm={form("anotherMember.okatagiYear")}/>
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
