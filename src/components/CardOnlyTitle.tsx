import {FC} from "react";
import {Box, Text} from "@chakra-ui/react";
import {borderBlackColor} from "../constants/colors";
import {motion} from "framer-motion";

interface CardOnlyTitleProps {
  title: string;
  handleClick: () => void;
}

const CardOnlyTitle: FC<CardOnlyTitleProps> = (
  {
    title,
    handleClick
  }
) => {
  return (
    <motion.div whileTap={{ scale: 1.1 }}
                style={{ width: "100%"}}
                onClick={() => handleClick()}
    >
      <Box boxShadow="lg"
           bg="white"
           p={4}
           borderWidth={2}
           rounded="lg"
           borderColor={borderBlackColor}>
        <Text>{title}</Text>
      </Box>
    </motion.div>
  );
};

export default CardOnlyTitle;
