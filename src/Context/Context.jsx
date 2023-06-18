import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../Data";

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [habits_data, set_habits_data] = useState([])
    const [archive_data, set_archive_data] = useState([])
    const [user_form, set_user_form] = useState({
        name: "",
        repeat: "",
        goal: "",
        time: "",
        start: ""
    })

    useEffect(() => {
        set_habits_data(data)
    }, [])
    // console.log("ooooooo", habits_data)

    const add_habit = (new_habit) => {
        set_habits_data(prev => [...prev, new_habit])
        set_user_form({
            name: "",
            repeat: "",
            goal: "",
            time: "",
            start: ""
        })
    }

    const delete_habit = (delete_id) => {
        set_habits_data(prev => prev.filter(({ id }) => id !== delete_id))
    }

    const archive_habit = (archive_habit) => {
        set_archive_data(prev => [...prev, archive_habit])
        delete_habit(archive_habit.id)
    }
    console.log("archive", archive_data)


    const unArchive_habit = (unArchive_habit) => {
        set_archive_data(prev => prev.filter(({ id }) => id !== unArchive_habit.id))
        add_habit(unArchive_habit)
    }

    return (
        <DataContext.Provider value={{ habits_data, user_form, set_user_form, add_habit, delete_habit, archive_habit, archive_data, unArchive_habit }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)