import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useData } from "../Context/Context"
import { Link } from "react-router-dom"

const Archives = () => {
    const { archive_data, unArchive_habit, delete_habit } = useData()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
    return (
        <div style={{ padding: "3rem" }}>
            <Link to="/">
                <Button position={"absolute"} right={0} top={0} size={"md"} colorScheme="red" border={"1px solid white"}>HOME</Button>
            </Link>


            {archive_data.length > 0 ? <Flex margin={"auto"} justify={"center"} align={"center"} gap={"2rem"} w={"45rem"} flexWrap={"wrap"} border={"1px solid red"} >
                {
                    archive_data.map(each =>
                        <Box position={"relative"} cursor={"pointer"} flex={1} backgroundImage={`https://robohash.org/a${each.name}`}>
                            <Text onClick={onOpen2} p={"5rem"} border={"1px solid grey"} className="habit" color={"white"} fontSize={"2xl"}>{each.name}</Text>


                            <Modal
                                isCentered
                                onClose={onClose2}
                                isOpen={isOpen2}
                                motionPreset='slideInBottom'
                            >
                                <ModalOverlay bg="transparent" />
                                <ModalContent>
                                    <ModalHeader>HABIT</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Text>Name: <b>{each.name}</b></Text>
                                        <Text>Repeat: <b>{each.repeat}</b></Text>
                                        <Text>Goal: <b>{each.goal}</b></Text>
                                        <Text>time: <b>{each.time}</b></Text>
                                        <Text>Start: <b>{each.start_date}</b></Text>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose2}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            <div className="habit_btn">
                                <button onClick={() => unArchive_habit(each)}>Un-archive</button>
                                {/* <button onClick={() => delete_habit(each.id)}>Delete</button> */}
                            </div>

                        </Box>
                    )
                }
            </Flex> : <p>Nothing here</p>}

        </div>
    )
}

export default Archives