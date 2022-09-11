import {FC} from "react";
import {FormControl, FormErrorMessage, FormLabel, Textarea} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface TextAreaInputProps {
  label: string;
  type: string;
  isEmpty?: boolean;
  errorMessage?: string;
  placeholder: string;
  inputHookForm: UseFormRegisterReturn<any>;
}

export const TextAreaInput: FC<TextAreaInputProps> = (
  {
    label,
    type,
    isEmpty,
    errorMessage,
    placeholder,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2} isInvalid={isEmpty}>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <Textarea key={type} placeholder={placeholder} {...inputHookForm} />
        {
          isEmpty && errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )
        }
      </FormControl>
    </motion.div>
  );
};
