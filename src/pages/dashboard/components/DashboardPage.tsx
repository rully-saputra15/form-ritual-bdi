import {FC} from "react";
import {VStack, Text, Heading, Button} from "@chakra-ui/react";
import CardOnlyTitle from "../../../components/CardOnlyTitle";

interface DashboardPageProps {
  copyLinkToClipBoard: (formType: string) => void;
}

const DashboardPage: FC<DashboardPageProps> = (
  {
    copyLinkToClipBoard
  }
) => {
  return (
    <VStack alignItems="flex-start" m={3} spacing={3}>
      <Heading fontSize="4xl">List Form</Heading>
      <Text>Berikut berisi form-form ritual</Text>
      <Text>Anda hanya perlu <b>menekan salah satu item dibawah</b> dan link akan <b>secara otomatis dicopy</b> pada smartphone Anda.</Text>
      <Text mt={3}>Silahkan kirim link tersebut kepada umat yang membutuhkan.</Text>
      <CardOnlyTitle title="Gojukai" handleClick={() => copyLinkToClipBoard("gojukai")}/>
      <div onClick={() => copyLinkToClipBoard("gojukai")}>Te</div>
      <CardOnlyTitle title="Pemberkahan Nikah" handleClick={() => copyLinkToClipBoard("pemberkahan-nikah")}/>
    </VStack>
  );
};

export default DashboardPage;
