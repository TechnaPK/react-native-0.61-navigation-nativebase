import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

let SettingsScreen = ({navigation}) => {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>{ navigation.openDrawer(); }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Settings</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );

}

export default SettingsScreen