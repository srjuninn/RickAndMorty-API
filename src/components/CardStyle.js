import styled from "styled-components";

export const StyledCard = styled.div`
/* estilização do nosso card */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
    padding: 30px 20px;
    max-width: 300px;
    /* text-align: center; */

    h3{
        font-size: 22px;
        font-weight: bold;
        color: var(--neutral-white);
    }
    background-color: var(--color-g-black);
    box-shadow: 0px 4px 12px rgba(0, 0, 255, 0.2);
    border-radius: 20px;

    img {
        width: 250px;
        height: 210px;
        border-radius: 10px;
    }
    .charactersDescription{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;


        ul{
            li{
                display: flex;
                align-items: center;
                gap: 10px;

                font-size: 18px;
                color: var(--neutral-white);
            }
        }
    }
`