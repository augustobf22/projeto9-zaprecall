import styled from 'styled-components'

export default function Footer() {
    return (
        <DivFooter>
            <h1>0/4 CONCLUÍDOS</h1>
        </DivFooter>
    )
}

const DivFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #333333;
    }
`;