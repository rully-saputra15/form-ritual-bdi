import {FC} from "react";
import {FormControl, FormLabel,Textarea} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface TextAreaInputProps {
  label: string;
  type: string;
  placeholder: string;
  inputHookForm: UseFormRegisterReturn<any>;
}

export const TextAreaInput: FC<TextAreaInputProps> = (
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
        <Textarea key={type} placeholder={placeholder} {...inputHookForm} />
      </FormControl>
    </motion.div>
  );
};
