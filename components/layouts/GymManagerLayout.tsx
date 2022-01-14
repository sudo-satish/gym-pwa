import {
  Box,
  Heading,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  BoxProps,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineMenu, MdQrCodeScanner } from "react-icons/md";
import QRScanner from "../QRScanner/QRScanner";

export const MotionBox = motion<BoxProps>(Flex);

const GymManagerLayout = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: showQR,
    onOpen: onShowQR,
    onClose: hideQR,
    onToggle: onToggleQR,
  } = useDisclosure();
  return (
    <>
      <Flex justifyContent="end" bg="tomato" alignItems="center">
        <Flex bg="tomato" w="100%" p={4} color="white" alignItems="center">
          <IconButton
            onClick={onOpen}
            aria-label="Open Menu"
            icon={<MdOutlineMenu />}
            color="white"
            fontSize="30px"
            bg="transparent"
          />
          <Heading as="h2" ml="3" fontWeight="bold" fontSize="20px">
            Hype GYM
          </Heading>
        </Flex>
        <IconButton
          onClick={onToggleQR}
          alignSelf="right"
          aria-label="Open Menu"
          icon={<MdQrCodeScanner />}
          color="white"
          fontSize="30px"
          mr="4"
          bg="transparent"
          _hover={{ bg: "", borderColor: "" }}
        />
      </Flex>
      <AnimatePresence>
        {showQR && (
          <MotionBox
            justifyContent="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <QRScanner />
          </MotionBox>
        )}
      </AnimatePresence>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>Drawer</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {children}
    </>
  );
};

export default GymManagerLayout;
