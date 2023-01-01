import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface RowProps {
    theme: DefaultTheme;
}

const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default Row ;