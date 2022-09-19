import { Flex, Typography } from "../../styles"
import { Action } from "./style"

export const ActionsGame = ({actions, disabled, onClick}) =>{
    return(
        <Flex>
           {actions.map((actions) =>(
            <Action 
            key={actions.value} 
            disabled={disabled}
            onClick={() => onClick(actions)}
            >

                <Typography size='32px'>{actions.label}</Typography>
            </Action>
           ))}
        </Flex>
    )
}