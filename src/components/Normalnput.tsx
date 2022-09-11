import {FC} from "react";
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface NormalnputProps {
  label: string;
  type: string;
  isEmpty?: boolean;
  errorMessage?: string;
  placeholder: string;
  inputHookForm: UseFormRegisterReturn<any>;
}

export const NormalInput: FC<NormalnputProps> = (
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
        <Input key={type}
               type={type}
               placeholder={placeholder} {...inputHookForm} />
        {
          isEmpty && errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )
        }
      </FormControl>
    </motion.div>
  );
};
