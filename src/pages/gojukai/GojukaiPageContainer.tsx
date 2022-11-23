import GojukaiPage from "./components/GojukaiPage";
import {useForm} from "react-hook-form";
import {GojukaiForm} from "../../interfaces";
import {useCallback, useEffect, useState} from "react";
import {RadioProps, useToast} from "@chakra-ui/react";
import {useMutation} from "@tanstack/react-query";
import api from "../../utils/api";

const GojukaiPageContainer = () => {
  const { register, formState: { errors }, watch, handleSubmit } = useForm<GojukaiForm>();
  const toast = useToast();

  const [showGojukaiYearInput, setShowGojukaiYearInput] =
    useState(false);

  const [showOkatagiYearInput, setShowOkatagiYearInput] =
    useState(false);

  useEffect(() => {
    const gojukaiStatus = watch("anotherMember.gojukaiStatus");
    setShowGojukaiYearInput(gojukaiStatus === "Sudah");
  }, [watch("anotherMember.gojukaiStatus")]);

  useEffect(() => {
    const gojukaiStatus = watch("anotherMember.okatagiStatus");
    setShowOkatagiYearInput(gojukaiStatus === "Sudah");
  }, [watch("anotherMember.okatagiStatus")]);

  const { mutate: createGojukaiForm } = useMutation(
    (data: GojukaiForm) =>
      api.createGojukaiForm(data), {
      onSuccess: (res) => {
        console.log(res);
      }
    }
  );
  const handleSubmitForm = useCallback((data: any) => {
    const reader = new FileReader();
    if (data.profilePicture[0].size > 2000000) {
      toast({
        title: "File foto yang anda upload lebih dari 2 MB",
        description: "Mohon mengupload foto dengan ukuran yang lebih kecil",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true
      });
      return;
    }
    reader.readAsDataURL(data.profilePicture[0]);

    reader.onload = () => {
      data.profilePicture = reader.result;
      createGojukaiForm(data);
    };
  }, []);

  const gender: string[] = ["Laki-Laki", "Perempuan"];
  const status: string[] = ["Belum Menikah", "Menikah"];
  const education: string[] = ["SD", "SMP", "SMA", "S1", "S2", "S3"];
  const relationship: string[] = ["Anak", "Saudara", "Orang Tua", "Teman", "Suami", "Istri"];
  const radioAcceptedOptions: RadioProps[] = [
    {
      value: "Sudah"
    },
    {
      value: "Belum"
    }
  ];
  return (
    <GojukaiPage form={register}
                 errors={errors}
                 showGojukaiYearInput={showGojukaiYearInput}
                 showOkatagiYearInput={showOkatagiYearInput}
                 genderData={gender}
                 statusData={status}
                 educationData={education}
                 relationshipData={relationship}
                 radioAcceptedOptionsData={radioAcceptedOptions}
                 handleSubmit={handleSubmit}
                 handleSubmitForm={handleSubmitForm}/>
  );
};

export default GojukaiPageContainer;
