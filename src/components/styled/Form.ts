import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface FormProps {
    theme: DefaultTheme;
}

const Form = styled.form<FormProps>`
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
`;

export default Form ;