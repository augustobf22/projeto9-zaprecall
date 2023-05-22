import styled from 'styled-components'

export default function Footer(props) {
    return (
        <DivFooter data-test="footer">
            <h1>{props.counter}/{props.cardsArray.length} CONCLUÍDOS</h1>
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

    position: fixed;
    bottom: 0px;
    left: 0px;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #333333;
    }
`;