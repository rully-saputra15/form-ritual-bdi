import {FC} from "react";
import {FormControl, FormErrorMessage, FormLabel, Select} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface SelectInputProps {
  label: string;
  type: string;
  isEmpty?: boolean;
  errorMessage?: string;
  placeholder: string;
  options: string[]
  inputHookForm: UseFormRegisterReturn<any>;
}

export const SelectInput: FC<SelectInputProps> = (
  {
    label,
    type,
    isEmpty,
    errorMessage,
    options,
    placeholder,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2} isInvalid={isEmpty}>
        <FormLabel htmlFor={type}>{label}</FormLabel>
        <Select key={label} placeholder={placeholder} {...inputHookForm}>
          {
            options.map((option) => (
              <option>{option}</option>
            ))
          }
        </Select>
        {
          isEmpty && errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )
        }
      </FormControl>
    </motion.div>

  );
};
