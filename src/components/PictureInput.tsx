import {FC} from "react";
import {FormControl, FormLabel} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import "./PictureInput.css";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface PictureInputProps {
  label: string;
  subLabel: string;
  inputHookForm: UseFormRegisterReturn<any>;
}

export const PictureInput: FC<PictureInputProps> = (
  {
    label,
    subLabel,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2}>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <FormLabel fontWeight="lighter"
                   mt={-2}
                   htmlFor="upload-photo"
                   fontSize="xs"
                   fontStyle="italic">{subLabel}</FormLabel>
        <input type="file"
               id="upload-photo"
               accept=".png, .jpg, .jpeg"
               {...inputHookForm}/>
      </FormControl>
    </motion.div>
  );
};
