import styled from "styled-components";
import qrCodeImg from "./Img/image-qr-code.png";

function QrDiv() {
  return (
    <Div>
      <Imagem src={qrCodeImg} />
      <Subtitle>
        Improve your front-end <br /> skills by building projects
      </Subtitle>
      <Paragraph>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Paragraph>
    </Div>
  );
}

const Div = styled.div`
  /* width: 20%; */
  width: 300px;
  height: 480px;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 3px 8px 12px 3px #d3d3d3;
  display: flex;
  flex-direction: column;
`;

const Imagem = styled.img`
  width: 90%;
  margin: 5% auto;
  border-radius: 10px;
`;

const Subtitle = styled.h3`
  color: hsl(218, 44%, 22%);
  text-align: center;
  font-size: 20px;
`;

const Paragraph = styled.p`
font-size: 15px;
text-align: center;
color: hsl(220, 15%, 55%);
max-width: 87%;
margin: 0 auto;
`

export default QrDiv;
