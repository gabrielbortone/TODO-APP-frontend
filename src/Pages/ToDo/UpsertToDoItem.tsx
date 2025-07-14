import { useParams } from "react-router-dom";
import { FormField, Label, TextArea, TextBox, Title } from "../../Components/DefaultComponents";
import { AddOrUpdateToDoItemFormContainer } from "../../Components/UpsertTodoItem";
import { useState } from "react";
import DatePicker from "../../Components/DatePicker";


export function UpsertToDoItem() {
    const { id } = useParams();
    const isUpdate = id !== undefined && id.length > 0;
    const [ title, setTitle ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');
    const [ dueDate, setDueDate ] = useState<Date | undefined>(undefined);
    const [ isCompleted, setIsCompleted] = useState<Boolean>(false);

    return (
      <AddOrUpdateToDoItemFormContainer>
        <Title>{isUpdate ? 'Update' : 'Add'} new To Do Item</Title>
        <FormField>
            <Label>Title</Label>
            <TextBox value={title} onChange={ e=> {
                const {value} = e.target
                if(value){
                    setTitle(value)
                }
            }}/>
        </FormField>
        <FormField>
            <Label>Title</Label>
            <TextArea value={description} onChange={ e=> {
                const {value} = e.target
                if(value){
                    setDescription(value)
                }
            }}></TextArea>
        </FormField>
         <FormField>
            <Label>Title</Label>
            <TextBox value={title} onChange={ e=> {
                const {value} = e.target
                if(value){
                    setTitle(value)
                }
            }}/>
        </FormField>
        <FormField>
            <Label>Due Date</Label>
            <DatePicker 
              selectedDate={dueDate}
              onDateSelect={ (date)=> setDueDate(date) }
            />
        </FormField>
      </AddOrUpdateToDoItemFormContainer>
    )
  }