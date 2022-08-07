import {FC} from "react";
import {FormControl, FormLabel, Stack, RadioGroup, Radio, RadioProps} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface RadioInputProps {
  label: string;
  options: RadioProps[];
  inputHookForm: UseFormRegisterReturn<any>;
}

export const RadioInput: FC<RadioInputProps> = (
  {
    label,
    options,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2}>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            {
              options.map((option) => (
                <Radio value={option.value} {...inputHookForm}>{option.value}</Radio>
              ))
            }
          </Stack>
        </RadioGroup>
      </FormControl>
    </motion.div>
  );
};
