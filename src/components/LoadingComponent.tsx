import {motion} from "framer-motion";
import {Center, Image, VStack} from "@chakra-ui/react";
import LogoMnsbdi from "../assets/logo-mnsbdi.png";

const LoadingComponent = () => {
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <motion.div variants={variant}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}>
      <VStack justifyContent="center" alignItems="center" h="100vh">
        <Image src={LogoMnsbdi} boxSize="3xs" alt="loading"/>
      </VStack>
    </motion.div>
  );
};

export default LoadingComponent;
