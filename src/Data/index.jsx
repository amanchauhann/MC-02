import { v4 as uuidv4 } from "uuid";
export const data = [
    {
        id: uuidv4(),
        name: "Task 1",
        repeat: "daily",
        goal: "1 time daily",
        time: "morning",
        start_date: "01-01-2023",
        image: "https://example.com/image1.jpg"
    },
    {
        id: uuidv4(),
        name: "Task 2",
        repeat: "weekly",
        goal: "2 times daily",
        time: "afternoon",
        start_date: "15-02-2023",
        image: "https://example.com/image2.jpg"
    },
    {
        id: uuidv4(),
        name: "Task 3",
        repeat: "monthly",
        goal: "3 times daily",
        time: "evening",
        start_date: "10-03-2023",
        image: "https://example.com/image3.jpg"
    },
    {
        id: uuidv4(),
        name: "Task 4",
        repeat: "daily",
        goal: "1 time daily",
        time: "morning",
        start_date: "05-04-2023",
        image: "https://example.com/image4.jpg"
    },
    {
        id: uuidv4(),
        name: "Task 5",
        repeat: "weekly",
        goal: "2 times daily",
        time: "afternoon",
        start_date: "20-05-2023",
        image: "https://example.com/image5.jpg"
    }
];