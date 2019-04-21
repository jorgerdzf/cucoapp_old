import React from "react";
import { Image } from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Thumbnail,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Icon,
  Text,
  Right
} from "native-base";
import { staticdata } from '../services/dummies/homedata';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props){
    super(props);
    this.state = {
      data : staticdata
    }
  }

  render() {

    var cards = [];
    for(let i=0; i < this.state.data.length; i++){
      cards.push(
        <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: this.state.data[i].artistImageUrl}} />
            <Body>
              <Text>{this.state.data[i].artistName}</Text>
              <Text note>{this.state.data[i].artistLocation}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: this.state.data[i].productImageUrl}} style={{ flex: 1, width: '100%', height: 200 }}/>
            <Text style={{ marginTop: 20 }}>
              {this.state.data[i].productDescription}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="star" />
              <Text>{this.state.data[i].artistRating + ' starts'}</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent textStyle={{color: '#87838B'}}
             onPress={() => this.props.navigation.navigate("ProfileDetail")}
            >
              <Text>Detalle</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
      )
    }

    return (
      <Container>
        <Content>        
         {cards}
        </Content>
        <Footer>
          <FooterTab>
            <Button 
              onPress={() => this.props.navigation.navigate("Home")}
              >
                <Icon name="home" />
            </Button>
            <Button
            onPress={() => this.props.navigation.navigate("Profile")}>
                <Icon name="person" />
            </Button>
            <Button
            onPress={() => this.props.navigation.navigate("Preferences")}>
                <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
