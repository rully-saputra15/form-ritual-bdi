import {FC} from "react";
import {VStack, Text, Heading} from "@chakra-ui/react";
import CardOnlyTitle from "../../../components/CardOnlyTitle";

interface DashboardPageProps {

}

const DashboardPage: FC<DashboardPageProps> = () => {
  return (
    <VStack alignItems="flex-start" m={3} spacing={3}>
      <Heading fontSize="4xl">List Form</Heading>
      <Text>Berikut berisi form-form ritual</Text>
      <Text>Anda hanya perlu <b>menekan salah satu item dibawah</b> dan akan <b>secara otomatis dicopy</b> pada smartphone Anda.</Text>
      <Text mt={3}>Silahkan kirim link tersebut kepada umat yang membutuhkan.</Text>
      <CardOnlyTitle title="Gojukai" />
      <CardOnlyTitle title="Pemberkahan Nikah" />
    </VStack>
  );
};

export default DashboardPage;
