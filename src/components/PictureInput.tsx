import {FC} from "react";
import {FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/react";
import {UseFormRegisterReturn} from "react-hook-form";
import "./PictureInput.css";
import {motion} from "framer-motion";
import {itemFormVariant} from "../constants/animation";

interface PictureInputProps {
  label: string;
  subLabel: string;
  isEmpty?: boolean;
  errorMessage?: string;
  inputHookForm: UseFormRegisterReturn<any>;
}

export const PictureInput: FC<PictureInputProps> = (
  {
    label,
    isEmpty,
    errorMessage,
    subLabel,
    inputHookForm
  }
) => {
  return (
    <motion.div variants={itemFormVariant}>
      <FormControl my={2} isInvalid={isEmpty}>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <FormLabel fontWeight="lighter"
                   mt={-2}
                   htmlFor="upload-photo"
                   fontSize="xs"
                   fontStyle="italic">{subLabel}</FormLabel>
        <input type="file"
               id="upload-photo"
               accept=".png, .jpg, .jpeg"
               size={3000}
               {...inputHookForm}/>
        {
          isEmpty && errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )
        }
      </FormControl>
    </motion.div>
  );
};
