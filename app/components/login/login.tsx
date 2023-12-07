import { Box,   Input, InputField, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent,  Modal,
    Button,
    Center,
    CloseIcon,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlHelper,
    FormControlHelperText,
    FormControlLabel,
    FormControlLabelText,
    Heading,
    Icon,
    ModalFooter,
    ModalHeader,
    ButtonText,
    AlertCircleIcon,} from "@gluestack-ui/themed";
import React,{useState} from "react";

export default function Login({showModal,setShowModal,onLogin}:any) {
    const [username, setUsername] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const ref = React.useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const storeUsernameLocally = (username: string) => {
    localStorage.setItem("username", username);
  };
  const handleUsernameChange = (event: any) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setIsUsernameValid(newUsername.length >= 3);
  };
  const isFormValid = username.trim() !== "" && isUsernameValid;
 const redirectToDashboard = () => {
    if (isFormValid) {
        onLogin(username);
      setIsLoggedIn(true);
      storeUsernameLocally(username);
      
    }
  };
  return (
    <Center h={300}>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Join Medium.</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Box h="$32">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={!isUsernameValid}
                isReadOnly={false}
                isRequired={true}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Username</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="username"
                  />
                </Input>
                <FormControlHelper>
                  <FormControlHelperText>
                    Must be at least 3 characters.
                  </FormControlHelperText>
                </FormControlHelper>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    At least 3 characters are required.
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => setShowModal(false)}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              isDisabled={!isFormValid}
              onPress={() => {
                setShowModal(false);
                redirectToDashboard();
              }}
            >
              <ButtonText>LogIn</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
