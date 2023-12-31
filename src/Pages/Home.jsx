import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react"

import { useData } from "../Context/Context"
import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const { habits_data, user_form, set_user_form, add_habit, delete_habit, archive_habit } = useData()
    // console.log(habits_data[0])


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'

        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    const add_handler = (e) => {
        e.preventDefault()
        add_habit(user_form)

    }

    const edit_habit = (editHabit) => {
        set_user_form(editHabit)
        onOpen1()
    }

    return (
        <div>
            {/* =======HEADER======= */}
            <Heading>HABITS TRACKER</Heading>
            <Button colorScheme="red" width={"250px"} onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen1()
            }}>Add Habits</Button>
            <Link to="/archives">
                <Button position={"absolute"} right={0} top={0} size={"md"} colorScheme="red" border={"1px solid white"}>Archives💼</Button>
            </Link>

            {/* ======MODAL====== */}

            <Modal isCentered isOpen={isOpen1} onClose={onClose1} size="lg">
                {overlay}
                <ModalContent background={"grey"} borderRadius={10} border={"1px solid black"}>
                    <ModalHeader>NEW HABIT</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={add_handler}>
                        <ModalBody>

                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input required type='text' onChange={(e) => set_user_form(prev => ({ ...prev, name: e.target.value }))} value={user_form.name} />
                                <Flex justify={"space-between"} gap={2}>
                                    <Box flex={1}>
                                        <FormLabel>Repeat</FormLabel>
                                        <Select required defaultValue={user_form.repeat} placeholder='Repeat' onChange={(e) => set_user_form(prev => ({ ...prev, repeat: e.target.value }))}>
                                            <option value={"daily"}>Daily</option>
                                            <option value={"weekly"}>Weekly</option>
                                            <option value={"monthly"}>Monthly</option>
                                        </Select>
                                    </Box>
                                    <Box flex={1}>
                                        <FormLabel>Goal</FormLabel>
                                        <Select defaultValue={user_form.goal} required placeholder='Goal' onChange={(e) => set_user_form(prev => ({ ...prev, goal: e.target.value }))}>
                                            <option value={"1 time daily"}>1 time daily</option>
                                            <option value={"twice daily"}>Twice daily</option>
                                            <option value={"thrice daily"}>Thrice daily</option>
                                        </Select>
                                    </Box>
                                </Flex>


                                <Flex justify={"space-between"} gap={2}>
                                    <Box flex={1}>
                                        <FormLabel>Time of day</FormLabel>
                                        <Select defaultValue={user_form.time} required placeholder='Time of day' onChange={(e) => set_user_form(prev => ({ ...prev, time: e.target.value }))}>
                                            <option value={"anytime"}>Anytime</option>
                                            <option value={"morning"}>Morning</option>
                                            <option value={"night"}>Night</option>
                                        </Select>
                                    </Box>

                                    <Box flex={1}>
                                        <FormLabel>Start Date</FormLabel>
                                        <Select defaultValue={user_form.start} required placeholder='Start date' onChange={(e) => set_user_form(prev => ({ ...prev, start: e.target.value }))}>
                                            <option value={"today"}>Today</option>
                                            <option value={"tommorow"}>Tommorow</option>
                                            <option value={"next week"}>Next week</option>
                                        </Select>
                                    </Box>
                                </Flex>



                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" w={"8rem"} colorScheme={"red"} onClick={onClose1}>Add</Button>
                            <Button w={"8rem"} onClick={onClose1} m={"1rem"}>Close</Button>
                        </ModalFooter>

                    </form>
                </ModalContent>
            </Modal >

            {/* ======HABITS======= */}
            <Flex margin={"auto"} marginTop={"5rem"} justify={"center"} align={"center"} gap={"2rem"} w={"45rem"} flexWrap={"wrap"} border={"1px solid red"} >
                {
                    habits_data.map(each =>
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
                                <button onClick={() => archive_habit(each)}>archive</button>
                                <button onClick={() => delete_habit(each.id)}>Delete</button>
                                <button onClick={() => edit_habit(each)}>Edit</button>
                            </div>

                        </Box>
                    )
                }
            </Flex>
            {/* <Flex border={"1px solid red"} w={"40rem"} margin={"auto"} flexWrap={"wrap"}> */}
            {/* <Box flex={1} border={"1px solid yellow"} p={"5rem"} backgroundImage={"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"}> */}

            {/* </Box> */}
            {/* </Flex> */}
        </div>


    )
}

export default Home