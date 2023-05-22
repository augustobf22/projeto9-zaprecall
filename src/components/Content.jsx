import styled from 'styled-components'
import Deck from './Deck'

export default function Content(props) {
    return (
        <DivContent>
            <Deck counter={props.counter} setCounter={props.setCounter} cardsArray={props.cardsArray}/>
        </DivContent>
    )
}

const DivContent = styled.div`
    width: 100%;
    height: 100%;
    min-height: 500px;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 70px;

    //hide scrollbar for all browsers
    -ms-overflow-style: none;  
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;