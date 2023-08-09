import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from "react";

const Campus = (props) => {
  return(
    <Text>O campus {props.nome} foi fundado em {props.anoFundacao}.</Text>
  );
}

const InstitutoFederal = (props) => {
  return(
    <Text>{props.sigla} - {props.uf}</Text>
  );
}

const App1 = () => {
  return(
    <View style={styles.app1}>
    <InstitutoFederal sigla="IFAL" uf="AL"> </InstitutoFederal>
    <Campus nome="Maceio" anoFundacao={1909}> </Campus>
    <Campus nome="Rio Largo" anoFundacao={2014}> </Campus>
    <Campus nome="Satuba" anoFundacao={1905}> </Campus>
    <InstitutoFederal sigla="IFPE" uf="PE"> </InstitutoFederal>
    <Campus nome="Palmares" anoFundacao={2014}> </Campus>
    <Campus nome="Garanhuns" anoFundacao={2010}> </Campus>
    </View>
  );
}

const styles = StyleSheet.create({
    app1: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app2:{
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App2 = () => {
  const [cliques, setCliques] = useState(0);

  return(
    <View style={styles.app2}>
    <Button title="OK" onPress={() => {
      setCliques(cliques + 1);
    }}/>

    <Text>Quantidade de cliques: {cliques}</Text>
    </View>
  );
}

export default App2;


