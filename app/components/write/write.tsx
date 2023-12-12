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

import React, { useState, useEffect } from "react";

export default function Write({ showModal1, setShowModal1, onPublish }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
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
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const isFormValid = isTitleValid && isDescriptionValid;
  const handlePublish = () => {
    onPublish({ title, description, selectedFile });
    localStorage.setItem("publishedTitle", title);
    localStorage.setItem("publishedDescription", description);
    localStorage.setItem("publishedImage", selectedFile || "");
    setTitle("");
    setDescription("");
    setIsTitleValid(false);
    setIsDescriptionValid(false);
    setTitleTouched(false);
    setDescriptionTouched(false);
    setSelectedFile(null);
    setShowModal1(false);
  };


  // useEffect(() => {
  //   console.log("Title from localStorage:", localStorage.getItem("publishedTitle"));
  //   console.log("Description from localStorage:", localStorage.getItem("publishedDescription"));
  //   console.log("Image from localStorage:", localStorage.getItem("publishedImage"));
  
  //   const Title = localStorage.getItem("publishedTitle") || "";
  //   const Description = localStorage.getItem("publishedDescription") || "";
  //   const Image = localStorage.getItem("publishedImage") || "";
  
   
  // }, []);

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
                <div>
                  <input type="file" onChange={handleFileChange} required />
                </div>
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
              onPress={handlePublish}
            >
              <ButtonText>Publish</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
