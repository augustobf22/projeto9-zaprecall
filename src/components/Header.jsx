import logo from '../assets/logo.png'
import styled from 'styled-components'

export default function Header() {
    return (
        <DivHeader>
            <img src={logo} alt='logo' />
            <h1>ZapRecall</h1>
        </DivHeader>
    )
}

const DivHeader = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;


    img{
        width: 50px;
    }

    h1{
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color: white;
        padding-left: 20px;
    }
`;