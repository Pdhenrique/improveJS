import { useState } from "react"
import { Button } from './components/Button'
import { Task } from './components/Task'
import { TaskCard } from './components/taskCard'

import { StyledContainer, StyledForm, TaskContainer } from "./styled"

export const TaskManager = () => {

    const [ tasks, setTasks ] = useState([
        {
            name: 'task 1',
            status: 'completed'
        },
        {
            name: 'task 2',
            status: 'in progress'
        }
    ]) 

    return (
        <StyledContainer>
            <h1>Task Manager</h1>
            <StyledForm>
                <Task />
                <Button/>
            </StyledForm>
            <TaskContainer>
                {tasks.map}
            </TaskContainer>

        </StyledContainer>
    )
}
