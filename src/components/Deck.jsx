import styled from 'styled-components'
import setaPlay from '../assets/seta_play.png'
import setaVirar from '../assets/seta_virar.png'
import iconeCerto from '../assets/icone_certo.png'
import iconeErro from '../assets/icone_erro.png'
import iconeQuase from '../assets/icone_quase.png'
import React from 'react'

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

const cardState = [];
const setCardState = [];
const answerState = [];
const setAnswerState = [];

export default function Deck() {
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
    }
    
    function clickAlmost(i){
        setCardState[i]("concluded");
        setAnswerState[i]("almost");
    }
    
    function clickZap(i){
        setCardState[i]("concluded");
        setAnswerState[i]("zap");
    }

    return (
        <>
            {cards.map((card, index) => {
                if(cardState[index] === "closed"){
                    return (
                    <CardClosed key={index}>
                        <h1>Pergunta {index+1}</h1>
                        <img src={setaPlay} alt='seta-play' onClick={() => clickPlay(index)}/>
                    </CardClosed>
                    )
                } else if(cardState[index] === "open"){
                    return(
                    <CardOpen key={index}>
                	    <h1>{card.question}</h1>
                	    <img src={setaVirar} alt='seta-virar' onClick={() => clickTurn(index)}/>
           	        </CardOpen>
                    )
                } else if(cardState[index] === "answer"){
                    return (
                        <CardOpen key={index}>
                            <h1>{card.answer}</h1>
                            <ButtonContainer>
                                    <Button color={notRemeberColor} onClick={() => clickNot(index)}>Não lembrei</Button>
                                    <Button color={almostNotColor} onClick={() => clickAlmost(index)}>Quase não lembrei</Button>
                                    <Button color={zapColor} onClick={() => clickZap(index)}>Zap!</Button>
                            </ButtonContainer>
                        </CardOpen>
                    )
                } else if(cardState[index] === "concluded" && answerState[index] === "not"){
                    return (
                        <CardConcluded key={index} color={notRemeberColor}>
                            <h1>Pergunta {index+1}</h1>
                            <img src={iconeErro} alt='seta-play' />
                        </CardConcluded>
                    )
                } else if(cardState[index] === "concluded" && answerState[index] === "almost"){
                    return (
                        <CardConcluded key={index} color={almostNotColor}>
                            <h1>Pergunta {index+1}</h1>
                            <img src={iconeQuase} alt='seta-play' />
                        </CardConcluded>
                    )
                } else if(cardState[index] === "concluded" && answerState[index] === "zap"){
                    return (
                        <CardConcluded key={index} color={zapColor}>
                            <h1>Pergunta {index+1}</h1>
                            <img src={iconeCerto} alt='seta-play' />
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
`;

const CardOpen = styled.div`
    background-color: white;
    width:  300px;
    height: 130px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    position:relative;

    flex: 0 0 auto;

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
    position: absolute;
    bottom: 15px;
    left: 15px;

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
`;