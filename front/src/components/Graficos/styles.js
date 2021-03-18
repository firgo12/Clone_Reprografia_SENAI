import styled from 'styled-components';

export const Container = styled.div`
    
    flex: 1;

    .grafico1{
        width: 800px;
        height: 500px;
    }


    @media screen and (max-width:1600px){
        &{
            flex-direction: column;
            align-items: center;
            justify-content:center;
            margin-top: 20px;
    }
        .grafico2{
            margin-top: 155px;
        }
    }
`;
