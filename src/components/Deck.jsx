import styled from 'styled-components'
import setaPlay from '../assets/seta_play.png'
import setaVirar from '../assets/seta_virar.png'
import iconeCerto from '../assets/icone_certo.png'
import iconeErro from '../assets/icone_erro.png'
import iconeQuase from '../assets/icone_quase.png'
import React from 'react'

const cardState = [];
const setCardState = [];
const answerState = [];
const setAnswerState = [];

export default function Deck(props) {
    const cards = props.cardsArray;

    for(let i=0;i<cards.length;i++){
        [cardState[i], setCardState[i]] = React.useState("closed");
        [answerState[i], setAnswerState[i]] = React.useState('');
    }

    const notRemeberColor = "#FF3030";
    const almostNotColor = "#FF922E";
    const zapColor = "#2FBE34";

    function clickPlay(i){
        setCardState[i]("open");
    }
    
    function clickTurn(i){
        setCardState[i]("answer");
    }
    
    function clickNot(i){
        setCardState[i]("concluded");
        setAnswerState[i]("not");
        let c = props.counter;
        c++;
        props.setCounter(c);
    }
    
    function clickAlmost(i){
        setCardState[i]("concluded");
        setAnswerState[i]("almost");
        let c = props.counter;
        c++;
        props.setCounter(c);
    }
    
    function clickZap(i){
        setCardState[i]("concluded");
        setAnswerState[i]("zap");
        let c = props.counter;
        c++;
        props.setCounter(c);
    }

    return (
        <>
            {cards.map((card, index) => {
                if(cardState[index] === "closed"){
                    return (
                        <CardClosed key={index} data-test="flashcard">
                            <h1 data-test="flashcard-text">Pergunta {index+1}</h1>
                            <img src={setaPlay} alt='seta-play' onClick={() => clickPlay(index)} data-test="play-btn"/>
                        </CardClosed>
                    )
                } else if(cardState[index] === "open"){
                    return(
                        <CardOpen key={index} data-test="flashcard">
                            <h1 data-test="flashcard-text">{card.question}</h1>
                            <img src={setaVirar} alt='seta-virar' onClick={() => clickTurn(index)} data-test="turn-btn"/>
                        </CardOpen>
                    )
                } else if(cardState[index] === "answer"){
                    return (
                        <CardOpen key={index} data-test="flashcard">
                            <h1 data-test="flashcard-text">{card.answer}</h1>
                            <ButtonContainer>
                                    <Button color={notRemeberColor} onClick={() => clickNot(index)} data-test="no-btn">Não lembrei</Button>
                                    <Button color={almostNotColor} onClick={() => clickAlmost(index)} data-test="partial-btn">Quase não lembrei</Button>
                                    <Button color={zapColor} onClick={() => clickZap(index)} data-test="zap-btn">Zap!</Button>
                            </ButtonContainer>
                        </CardOpen>
                    )
                } else if(cardState[index] === "concluded" && answerState[index] === "not"){
                    return (
                        <CardConcluded key={index} color={notRemeberColor} data-test="flashcard">
                            <h1 data-test="flashcard-text">Pergunta {index+1}</h1>
                            <img src={iconeErro} alt='seta-play' data-test="no-icon"/>
                        </CardConcluded>
                    )
                } else if(cardState[index] === "concluded" && answerState[index] === "almost"){
                    return (
                        <CardConcluded key={index} color={almostNotColor} data-test="flashcard">
                            <h1 data-test="flashcard-text">Pergunta {index+1}</h1>
                            <img src={iconeQuase} alt='seta-play' data-test="partial-icon"/>
                        </CardConcluded>
                    )
                } else if(cardState[index] === "concluded" && answerState[index] === "zap"){
                    return (
                        <CardConcluded key={index} color={zapColor} data-test="flashcard">
                            <h1 data-test="flashcard-text">Pergunta {index+1}</h1>
                            <img src={iconeCerto} alt='seta-play' data-test="zap-icon"/>
                        </CardConcluded>
                    )
                }
                })
            }
        </>
    )
}

const CardClosed = styled.div`
    background-color: white;
    width:  300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    flex: 0 0 auto;

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
    img:hover{
        cursor: pointer;
    }
`;

const CardOpen = styled.div`
    background-color: #FFFFD4;
    width:  300px;
    height: auto;
    min-height: 130px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    //position:relative;

    flex: 0 0 auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #333333;

        float:left;
        margin: 15px 0px 0px 15px;
    }

    img{
        width: 30px;

        float: right;
        margin: 0px 15px 15px auto;
    }
    img:hover{
        cursor: pointer;
    }
`;

const CardConcluded = styled.div`
    background-color: white;
    width:  300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    flex: 0 0 auto;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.color};

        margin-left: 15px;

        text-decoration-line: line-through;
    }

    img{
        width: 20px;
        margin-right: 15px;
    }
`;

const ButtonContainer = styled.div`
    float: left;
    margin: 15px;

    display: flex;
`;

const Button = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border:none;
    margin-right: 8px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;

    background-color: ${props => props.color};

    &:hover{
        cursor: pointer;
    }
`;