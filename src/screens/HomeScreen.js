import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';

let HomeScreen = ({ navigation }) => {
    const todos = [
        { title: "Offer Prayer", icon: "bulb", color: 'green' },
        { title: "Morning Walk", icon: "bicycle", color: 'pink' },
        { title: "Breakfast", icon: "pizza", color: 'yellow' },
    ]
    return (
        <Container>
            <Content padder>
                {todos.map((todo, i) => {
                    return <Card key={i}>
                        <CardItem button onPress={() => {
                            navigation.navigate('Details', todo);
                        }}>
                            <Icon active name={todo.icon} style={{ color: todo.color }} />
                            <Text>{todo.title}</Text>
                            <Right>

                            </Right>
                        </CardItem>
                    </Card>
                })}
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

export default HomeScreen