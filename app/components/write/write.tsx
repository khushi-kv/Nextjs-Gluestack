import {
  Box,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Modal,
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
  AlertCircleIcon,
  Input,
  InputField,
} from "@gluestack-ui/themed";

import React, { useState } from "react";

export default function Write({ showModal1, setShowModal1 }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const ref = React.useRef(null);
  const handleTitleChange = (event: any) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    setIsTitleValid(newTitle.length >= 3);
    setTitleTouched(true);
  };

  const handleDescriptionChange = (event: any) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    setIsDescriptionValid(newDescription.length >= 30);
    setDescriptionTouched(true);
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const isFormValid = isTitleValid && isDescriptionValid;
  return (
    <Center h={800}>
      <Modal
        isOpen={showModal1}
        onClose={() => setShowModal1(false)}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Write Blog.</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Box h="$72">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={!isFormValid}
                isReadOnly={false}
                isRequired={true}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Title</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                  />
                </Input>
                <FormControlHelper>
                  <FormControlHelperText>
                    Must be at least 3 characters.
                  </FormControlHelperText>
                </FormControlHelper>
                {titleTouched && !isTitleValid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 3 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                )}
                <FormControlLabel mb="$1">
                  <FormControlLabelText>Description</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                  />
                </Input>
                <FormControlHelper>
                  <FormControlHelperText>
                    Must be at least 30 characters.
                  </FormControlHelperText>
                </FormControlHelper>
                {descriptionTouched && !isDescriptionValid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 30 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                )}
                <input
                  type="file"
                  onChange={handleFileChange}
                  required
                  style={{
                    marginTop: "20px",
                  }}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => setShowModal1(false)}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              isDisabled={!isFormValid}
              onPress={() => {
                setShowModal1(false);
                
              }}
            >
              <ButtonText>Publish</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
