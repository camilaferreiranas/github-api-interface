import React from "react";
import * as S from "./styled";
import github from '../../assets/github-notfound.png';

const NoSearch = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
      <img src={github} alt="Sem usuário"  />
  
    </S.Wrapper>
  );
};

export default NoSearch;
