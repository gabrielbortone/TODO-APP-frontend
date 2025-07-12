import { useState } from "react";
import { Button, FormField, Label, TextBox, Title } from "../../Components/DefaultComponents";
import { LoginForm, LoginFormContainer } from "../../Components/LoginForm";
import { useAccount } from "../../Contexts/AccountContext";

export default function Login(){
    const {setLogin} = useAccount();
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <LoginFormContainer>
            <Title>Login</Title>
            <LoginForm>
                <FormField>
                    <Label>User name</Label>
                    <TextBox value={userName} onChange={ e=> {
                        const {value} = e.target
                        if(value){
                            setUserName(value)
                        }
                    }}/>
                </FormField>
                 <FormField>
                    <Label>Password</Label>
                    <TextBox type="password" value={password} onChange={ e=> {
                        const {value} = e.target
                        if(value){
                            setPassword(value)
                        }
                    }}/>
                </FormField>
                <Button disabled={false}>
                    Login
                </Button>
            </LoginForm>
        </LoginFormContainer>
    )
}