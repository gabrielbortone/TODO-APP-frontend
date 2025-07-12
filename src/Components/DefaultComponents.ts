import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Roboto Slab", serif;
  font-size: 1.5rem;
  line-height: 1.3;
  color: #22C55E;
  font-weight: 700;
`;

export const TodoItemTitle = styled.h6`
  font-family: "Roboto Slab", serif;
  font-size: 1.125rem;
  line-height: 1.4;
  color: #E5E7EB;
  font-weight: 500;
`;

export const TodoItemTitleCompleted = styled.h6`
  font-family: "Roboto Slab", serif;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #6B7280;
  font-weight: 500;
`;

export const TodoItemText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #E5E7EB;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #16A34A;
  font-size: 0.8rem;
  line-height: 1.2;
  padding: 0.65rem 1rem;
  color: #E5E7EB;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color:#22C55E ;
    color: #6B7280;
  }
`;

export const AddButton = styled(Button)`
  background-color: #22C55E;
  &:hover {
    background-color: #16A34A;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #EF4444;
  &:hover {
    background-color: #DC2626;
  }
`;

export const CompleteButton = styled(Button)`
  border: 2px solid #374151;
  background-color: #22C55E;
  &:hover {
    background-color: #16A34A;
  }
`;

export const DefaultWrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 75%;
  padding: 1rem;
`;

export const Label = styled.label`
  font-family: "Roboto Slab", serif;
  font-size: 1rem;
  line-height: 1.4;
  color: #E5E7EB;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
`;

export const RequiredLabel = styled(Label)`
  color: #22C55E;
  font-weight: 600;
  
  &::after {
    content: " *";
    color: #EF4444;
  }
`;

export const ErrorLabel = styled(Label)`
  color: #EF4444;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const TextBox = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  color: #E5E7EB;
  background-color: #1F2937;
  border: 0.5px solid #22C55E;
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #22C55E;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }
  
  &::placeholder {
    color: #6B7280;
    font-style: italic;
  }
`;

export const TextArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #E5E7EB;
  background-color: #1F2937;
  border: 2px solid #374151;
  border-radius: 3px;
  padding: 0.75rem 1rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #22C55E;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }
  
  &::placeholder {
    color: #6B7280;
    font-style: italic;
  }
`;

export const ErrorTextBox = styled(TextBox)`
  border-color: #EF4444;
  
  &:focus {
    border-color: #EF4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
`;

export const DisabledTextBox = styled(TextBox)`
  background-color: #374151;
  color: #6B7280;
  cursor: not-allowed;
  
  &:focus {
    border-color: #374151;
    box-shadow: none;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const FormFieldInline = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Select = styled.select`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #E5E7EB;
  background-color: #1F2937;
  border: 2px solid #374151;
  border-radius: 3px;
  padding: 0.75rem 1rem;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #22C55E;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
  }
  
  option {
    background-color: #1F2937;
    color: #E5E7EB;
  }
`;