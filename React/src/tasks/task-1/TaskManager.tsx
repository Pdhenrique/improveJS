// import { useState } from "react"

import { StyledContainer } from "./styled"

export const TaskManager = () => {
    
    // const [ tasks, setTasks ] = useState([]) 
    
    return (
        <StyledContainer>
            <h1>Task Manager</h1>
            <form>
                <input type='text' placeholder="task name" />
                <input type='submit' value='Send'/>
            </form>
        </StyledContainer>
    )
}