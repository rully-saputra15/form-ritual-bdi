import GojukaiPage from "./components/GojukaiPage";
import {useForm} from "react-hook-form";
import {GojukaiForm} from "../../interfaces";
import {useCallback, useEffect, useState} from "react";
import {RadioProps} from "@chakra-ui/react";

const GojukaiPageContainer = () => {
  const { register, watch, handleSubmit } = useForm<GojukaiForm>();
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

  const handleSubmitForm = useCallback((data: any) => {
    console.log(data);
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
