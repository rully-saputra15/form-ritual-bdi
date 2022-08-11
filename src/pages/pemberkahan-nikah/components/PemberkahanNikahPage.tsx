import {Button, Heading, Image, VStack} from "@chakra-ui/react";
import {FC} from "react";
import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {GojukaiForm, PemberkahanNikahForm} from "../../../interfaces";
import LogoMnsbdi from "../../../assets/logo-mnsbdi.png";
import {itemFormVariant, mainFormVariant} from "../../../constants/animation";
import {motion} from "framer-motion";
import {NormalInput} from "../../../components/Normalnput";
import {SelectInput} from "../../../components/SelectInput";
import {citizenship, district} from "../../../constants/data";
import {TextAreaInput} from "../../../components/TextAreaInput";
import {PictureInput} from "../../../components/PictureInput";

interface PemberkahanNikahPage {
  form: UseFormRegister<PemberkahanNikahForm>;
  handleSubmit: UseFormHandleSubmit<PemberkahanNikahForm>;
  handleSubmitForm: (data: any) => void;
}

const PemberkahanNikahPage: FC<PemberkahanNikahPage> = (
  {
    form,
    handleSubmit,
    handleSubmitForm
  }
) => {
  return (
    <VStack spacing="15px" mx={8}>
      <Image src={LogoMnsbdi} alt="logo" boxSize="150px"/>
      <Heading size="lg">Form Pemberkahan Nikah</Heading>
      <motion.form style={{ width: "100%" }} variants={mainFormVariant}
                   initial="hidden" animate="visible"
                   onSubmit={handleSubmit(handleSubmitForm)}>
        <motion.div variants={itemFormVariant}>
          <Heading size="md" textAlign="left" my={2}>Data Mempelai Pria</Heading>
        </motion.div>
        <NormalInput label="Nama Lengkap"
                     type="text"
                     placeholder="Contoh: Jane Doe"
                     inputHookForm={form("husband.name")}/>
        <NormalInput label="Tempat Lahir"
                     type="text"
                     placeholder="Contoh: Jakarta"
                     inputHookForm={form("husband.placeOfBirth")}/>
        <NormalInput label="Tanggal Lahir"
                     type="date"
                     placeholder="Contoh: 01/01/1998"
                     inputHookForm={form("husband.dateOfBirth")}/>
        <SelectInput label="Warga Negara"
                     type="citizenship"
                     options={citizenship}
                     placeholder="Contoh: WNI"
                     inputHookForm={form("husband.citizenship")}/>
        <NormalInput label="Agama - Sekte"
                     type="text"
                     placeholder="Contoh: Buddha"
                     inputHookForm={form("husband.religion")}/>
        <NormalInput label="Pekerjaan"
                     type="text"
                     placeholder="Contoh: Karyawan"
                     inputHookForm={form("husband.job")}/>
        <TextAreaInput label="Alamat Lengkap"
                       type="area"
                       placeholder="Contoh: Jl. Padang no 25"
                       inputHookForm={form("husband.address")}/>
        <SelectInput label="Daerah/Sentra/Cetya"
                     type="district"
                     options={district}
                     placeholder="Contoh: Aceh"
                     inputHookForm={form("husband.district")}/>
        <motion.div variants={itemFormVariant}>
          <Heading size="md" textAlign="left" my={4}>Data Mempelai Wanita</Heading>
        </motion.div>
        <NormalInput label="Nama Lengkap"
                     type="text"
                     placeholder="Contoh: Jane Doe"
                     inputHookForm={form("wife.name")}/>
        <NormalInput label="Tempat Lahir"
                     type="text"
                     placeholder="Contoh: Jakarta"
                     inputHookForm={form("wife.placeOfBirth")}/>
        <NormalInput label="Tanggal Lahir"
                     type="date"
                     placeholder="Contoh: 01/01/1998"
                     inputHookForm={form("wife.dateOfBirth")}/>
        <SelectInput label="Warga Negara"
                     type="citizenship"
                     options={citizenship}
                     placeholder="Contoh: WNI"
                     inputHookForm={form("wife.citizenship")}/>
        <NormalInput label="Agama - Sekte"
                     type="text"
                     placeholder="Contoh: Buddha"
                     inputHookForm={form("wife.religion")}/>
        <NormalInput label="Pekerjaan"
                     type="text"
                     placeholder="Contoh: Karyawan"
                     inputHookForm={form("wife.job")}/>
        <TextAreaInput label="Alamat Lengkap"
                       type="area"
                       placeholder="Contoh: Jl. Padang no 25"
                       inputHookForm={form("wife.address")}/>
        <SelectInput label="Daerah/Sentra/Cetya"
                     type="district"
                     options={district}
                     placeholder="Contoh: Aceh"
                     inputHookForm={form("wife.district")}/>
        <PictureInput label="Foto Berdua"
                      subLabel="Ukuran 6x4"
                      inputHookForm={form("photoProfile")}/>
        <motion.div variants={itemFormVariant}>
          <Heading size="md" textAlign="left" my={4}>
            Jadwal dan Tempat Upacara Pemberkahan Nikah yang Diajukan
          </Heading>
        </motion.div>
        <NormalInput label="Tanggal"
                     type="date"
                     placeholder="Contoh: 01/01/1998"
                     inputHookForm={form("dateOfMarried")}/>
        <NormalInput label="Jam"
                     type="time"
                     placeholder="Contoh: 15:00"
                     inputHookForm={form("timeOfMarried")}/>
        <NormalInput label="Tempat Upacara"
                     type="text"
                     placeholder="Contoh: Kuil Hoseiji"
                     inputHookForm={form("ceremonyPlace")}/>
        <motion.div variants={itemFormVariant}>
          <Button type="submit"
                  variant="solid"
                  size="lg"
                  w="100%"
                  my={2}
                  bg="gray.900"
                  color="whiteAlpha.900">
            Submit
          </Button>
        </motion.div>
      </motion.form>
    </VStack>
  );
};

export default PemberkahanNikahPage;
