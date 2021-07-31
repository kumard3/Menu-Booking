import React from 'react';
import { CoinIcon } from '../../assets/CoinIcon';
import {
  Card,
  TopInfo,
  TitleWrapper,
  Title,
  SubTitle,
  IconBox,
  Price,
  Note,
  Text,
  Link,
} from './style/StickerCard.style';

const StickerCard = ({
//   title,
//   subtitle,
//   icon,
//   price,
//   indicator,
//   indicatorText,
//   note,
//   link,
//   linkText,
}) => {
  return (
    <Card>
      <TopInfo>
        <TitleWrapper>
          <Title>Reveniew Generated</Title>
          <SubTitle> 30 days</SubTitle>
        </TitleWrapper>

        <IconBox><CoinIcon/></IconBox>
      </TopInfo>

      <Price>300</Price>
   
          <Text style={{ color: '#03D3B5' }}>
        
            <Note> yooyloo</Note>
          </Text>
    
          <Text style={{ color: '#FC6687' }}>
      
            <Note> yooyloo</Note>
          </Text>
     

    </Card>
  );
};

export default StickerCard;
