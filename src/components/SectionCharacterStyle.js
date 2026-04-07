import styled from "styled-components";

export const StyledCharacterSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 60px 0;
    background-color: var(--color-l-black);
    h2{
        font-size: 40px;
        font-weight: bold;
        color: var(--neutral-white);
        
        span{
            color: var(--color-primary);
        }
    }
`