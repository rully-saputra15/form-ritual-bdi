import {FC} from "react";
import {Box, Text} from "@chakra-ui/react";
import {borderBlackColor} from "../constants/colors";

interface CardOnlyTitleProps {
  title: string;
}

const CardOnlyTitle: FC<CardOnlyTitleProps> = (
  {
    title
  }
) => {
  return(
    <Box boxShadow="lg"
         w="100%"
         bg="white"
         p={4}
         borderWidth={2}
         rounded="lg"
         borderColor={borderBlackColor}>
      <Text>{title}</Text>
    </Box>
  )
};

export default CardOnlyTitle;
