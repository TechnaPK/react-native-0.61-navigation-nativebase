import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

let DetailsScreen = ({ route, navigation }) => {

    const { title } = route.params;
    return (
        <Container>
            <Content padder>
                <Text>
                    {title}
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

export default DetailsScreen