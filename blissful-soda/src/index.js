import React from 'react';

import Photo from './components/Photo';
import Logo from './components/Logo';
//TouchableOpacity fica um pouco apagado e depois volta // // // precisa receber o que é a ser renderizao
//}{ } [ ]

const Main = () => {
  return (
    <>
      <Logo />
    <Photo count={0} file={require("./assets/imagens/pato1.jpg")} />
      <Photo count={0} file={require("./assets/imagens/pato2.jpg")} />
    </>
  );
};

export default Main;
