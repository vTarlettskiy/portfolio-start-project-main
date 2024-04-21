import styled from "styled-components";

const Contacts = styled.section`
    height: auto;
`

const Form = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: bolder;
`

type FieldPropsType = {
    height?: string
}

const Field = styled.input<FieldPropsType>`
    margin-bottom: 24px;
    border: 1px solid #E8ECF4;
    border-radius: 8px;
    min-height: 40px;
    height: ${props => props.height || '40px'};
    resize: none;
`

export const S = {
    Contacts,
    Form,
    Label,
    Field
}