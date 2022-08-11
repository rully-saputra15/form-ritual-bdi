import PemberkahanNikahPage from "./components/PemberkahanNikahPage";
import {useForm} from "react-hook-form";
import {PemberkahanNikahForm} from "../../interfaces";
import {useCallback} from "react";

const PemberkahanNikahPageContainer = () => {
  const { register, watch, handleSubmit } = useForm<PemberkahanNikahForm>();

  const handleSubmitForm = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <PemberkahanNikahPage form={register}
                          handleSubmit={handleSubmit}
                          handleSubmitForm={handleSubmitForm}/>
  )
}

export default PemberkahanNikahPageContainer;
