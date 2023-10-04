// import { useState } from "react"
import { Button } from './components/Button'

import { StyledContainer, StyledForm } from "./styled"

export const TaskManager = () => {
    
    // const [ tasks, setTasks ] = useState([]) 
    
    return (
        <StyledContainer>
            <h1>Task Manager</h1>
            <StyledForm>
                <input type='text' placeholder="task name" />
                <Button/>
            </StyledForm>
        </StyledContainer>
    )
}
