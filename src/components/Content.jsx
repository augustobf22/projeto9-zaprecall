import styled from 'styled-components'
import setaPlay from '../assets/seta_play.png'
import setaVirar from '../assets/seta_virar.png'

export default function Content() {
    return (
        <DivContent>
            <CardFace>
                <h1>Pergunta 1</h1>
                <img src={setaPlay} alt='seta-play' />
            </CardFace>
            <CardBack>
                <h1>O que é JSX?</h1>
                <img src={setaVirar} alt='seta-virar' />
            </CardBack>
        </DivContent>
    )
}

const DivContent = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CardFace = styled.div`
    background-color: white;
    width:  300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: #333333;

        margin-left: 15px;
    }

    img{
        width: 20px;
        margin-right: 15px;
    }
`;

const CardBack = styled.div`
    background-color: white;
    width:  300px;
    height: 130px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    position:relative;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #333333;

        position: absolute;
        top: 15px;
        left: 15px;
    }

    img{
        width: 30px;
        margin-right: 15px;

        position:absolute;
        bottom: 5px;
        right: 5px;
    }
`;