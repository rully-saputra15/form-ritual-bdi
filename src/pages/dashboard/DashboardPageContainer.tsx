import DashboardPage from "./components/DashboardPage";
import {useCallback} from "react";
import {useToast} from "@chakra-ui/react";

const DashboardPageContainer = () => {
  const successToast = useToast();

  const copyLinkToClipBoard = useCallback((formType : string) => {
    const link = window.location.protocol + "//" + window.location.host + "/" + formType;
    navigator.clipboard.writeText(link)
      .then(() => {
        successToast({
          title: 'Sukses',
          description: `Link form berhasil dicopy!`,
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: "bottom"
        })
      });
  },[])

  return (
    <>
      <DashboardPage copyLinkToClipBoard={copyLinkToClipBoard}/>
    </>
  );
};

export default DashboardPageContainer;
