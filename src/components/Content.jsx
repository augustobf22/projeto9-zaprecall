import styled from 'styled-components'
import Deck from './Deck'

export default function Content() {
    return (
        <DivContent>
            <Deck />
        </DivContent>
    )
}

const DivContent = styled.div`
    width: 100%;
    height: 500px;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    //hide scrollbar for all browsers
    -ms-overflow-style: none;  
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;