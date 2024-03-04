import styled from "styled-components";

export const Container=styled.div`
display:flex;
flex-direction:row;
border:1px solid;
width:90%;
height:90%;
justify-content:start;
margin-left:40px;
margin-top:20px;

`;


export const Image=styled.img`
height:60px;
width:60px;

`;

export const Description=styled.p` 
font-family:Sans-serif;
font-size:15px;
color:white;
width:300px;
text-align:start;
padding-left:50px;

`;
export const IconViews=styled.div`
display:flex;
flex-direction:row;
margin-top:10px;
width:20%;
justify-content:end;
padding-left:60px;
`;

export const Icon=styled.img`
height:8px;
width:12px;
color:#959595;
margin-top:10px;

`;

export const Views=styled.p`
font-family:roboto;
font-size:9px;
color:#959595;
padding-left:10px;
`;