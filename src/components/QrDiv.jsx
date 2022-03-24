import styled from "styled-components";

function QrDiv() {
  const urls = [
    "https://www.linkedin.com/in/jhonatta-silva-dev/",
    "https://github.com/Jhonattasilva2",
    "https://www.instagram.com/jhonatta.dev/",
    "https://www.facebook.com/jhonatta.ferreira.9/",
  ];

  const randomUrl = () => {
    return urls[Math.floor(Math.random() * urls.length)];
  };

  let url = `https://qrtag.net/api/qr_transparent_6.svg?url=${randomUrl()}`;

  return (
    <Div>
      <Imagem src={url} alt="qrtag" />
      <Subtitle>
        Scan the code above <br /> to get a social media link
      </Subtitle>
      <Paragraph>
        Scan the QR code to visit a social media profile of an excellent Frontend Developer
      </Paragraph>
    </Div>
  );
}

const Div = styled.div`
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
  background-color: hsl(212, 45%, 89%);
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
`;

export default QrDiv;
