import {FC} from "react";
import {FormControl, FormLabel, Select} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface SelectInputProps {
  label: string;
  type: string;
  placeholder: string;
  options: string[]
  inputHookForm: UseFormRegisterReturn<any>;
}

export const SelectInput: FC<SelectInputProps> = (
  {
    label,
    type,
    options,
    placeholder,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2}>
        <FormLabel htmlFor={type}>{label}</FormLabel>
        <Select key={type} placeholder={placeholder} {...inputHookForm}>
          {
            options.map((option) => (
              <option>{option}</option>
            ))
          }
        </Select>
      </FormControl>
    </motion.div>

  );
};
