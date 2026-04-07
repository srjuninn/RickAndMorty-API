import styled from "styled-components"

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0 75px 0;
    gap: 190px;
    background-color: var(--color-black);
    aside{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 25px;
        width: 590px;
    
        h1{
            font-size: 40px;
            font-weight: 700;
            color: var(--neutral-white);
            span{
                color: var(--color-primary);
            }
        }

        p{
            font-size: 20px;
            font-weight: normal;
            color: var(--neutral-white);
        }
        .buttonWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;

            button:nth-child(1) {
                background-color: var(--color-primary);
                padding: 15px 20px;
                border-radius: 10px;
                
                a {
                    
                    color: var(--neutral-white);
                }
            }
            
            button:nth-child(2) {
                padding: 15px 20px;
                border: 1px solid var(--color-primary);
                border-radius: 10px;
                
                a{
                    color: var(--color-primary);

                }
            }
            
        }
    }
`