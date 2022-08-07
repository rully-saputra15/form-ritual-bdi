import {FC} from "react";
import {FormControl, FormLabel, Input} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface NormalnputProps {
  label: string;
  type: string;
  placeholder: string;
  inputHookForm: UseFormRegisterReturn<any>;
}

export const NormalInput: FC<NormalnputProps> = (
  {
    label,
    type,
    placeholder,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2}>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <Input key={type} type={type} placeholder={placeholder} {...inputHookForm} />
      </FormControl>
    </motion.div>
  );
};
