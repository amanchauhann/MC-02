import { Box, Flex, Text } from "@chakra-ui/react";

const Habit = ({ name }) => {
    <>
        <Box flex={1}>
            <Text p={"5rem"} border={"1px solid grey"} className="habit" color={"white"} fontSize={"2xl"}>{name}</Text>
        </Box>
        {/* <Text color={"white"} fontSize={"2xl"}>Drink water</Text> */}
        {/* <Flex border={"1px solid red"} w={"40rem"} margin={"auto"} flexWrap={"wrap"}>
            <Box flex={1} border={"1px solid yellow"} p={"5rem"} backgroundImage={"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"}>
                <Text color={"white"} fontSize={"2xl"}>Drink water</Text>
            </Box>
        </Flex> */}
    </>
}

export default Habit;