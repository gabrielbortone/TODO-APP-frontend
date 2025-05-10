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
  background-color: #1F2937;
  font-size: 0.750rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #374151;
  border-radius: 3px;
`;

export const AddButton = styled(Button)`
  background-color: #22C55E;
  :hover {
    background-color: #16A34A;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #EF4444;
  :hover {
    background-color: #DC2626;
  }
`;

export const CompleteButton = styled(Button)`
  border: 2px solid #374151;
  background-color: #22C55E;
  :hover {
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