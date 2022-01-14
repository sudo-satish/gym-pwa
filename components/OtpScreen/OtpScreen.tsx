import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  PinInput,
  PinInputField,
  HStack,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Box,
  Flex,
  useToken,
} from "@chakra-ui/react";

const OtpScreen = () => {
  const [orange300] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["orange.300"]
    // a single fallback or fallback array matching the length of the previous arg
  );
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve("");
      }, 3000);
    });
  }

  return (
    <Flex
      bg="orange.300"
      h="100vh"
      display="flex"
      justifyContent="end"
      direction="column"
    >
      <Box
        bg="white"
        h="40vh"
        borderLeft="3"
        borderTopLeftRadius={"30%"}
        boxShadow={`0 0 0 500px ${orange300}`}
      >
        <VStack p="5">
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="phone" textAlign="right" color="orange.300">
              Phone
            </FormLabel>
            <Input
              id="phone"
              type="text"
              {...register("phone", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormHelperText>We will send an OTP to your phone.</FormHelperText>
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          {/* <HStack>
            <PinInput otp onChange={(otp) => setValue("otp", otp)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack> */}
          <Button
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            color="orange.300"
            shadow="2xl"
          >
            Send OTP
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};
export default OtpScreen;
