import React, { FC } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
`

const SideNav = styled.nav`
  width: 70px;
  background-color: ${({ theme }) => theme.colors.blue.darker};
`

const Main = styled.main`
  display: flex;
  flex-grow: 1;
`

const ContactListSection = styled.section`
  flex: 1;
  min-width: 300px;
`

const ContactListTitle = styled.div`
  padding-left: 1em;
`

const ItemHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5em;

  & > span:first-of-type {
    flex-grow: 1;
  }

  & > span:last-of-type {
    margin-right: 1em;
    color: ${({ theme }) => theme.colors.grey.light};
  }
`

const ItemContent = styled.div`
  color: ${({ theme }) => theme.colors.grey.light};
`

const ContactListBody = styled.ul`
  margin-top: 4em;
  list-style-type: none;
  padding-left: 0;
  width: 100%;
`

const ContactListBodyItem = styled.li<{ active?: boolean }>`
  padding: 1em 1em;
  display: block;
  position: relative;
  ${({ active }) =>
    active &&
    `
        background-color: rgba(151, 157, 172, .10);
    `}

  &:hover {
    background-color: rgba(151, 157, 172, 0.05);
    cursor: pointer;
  }
`

const UnreadBadge = styled.div`
  position: absolute;
  right: 1.5em;
  bottom: 1.5em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red.dark};
  width: 10px;
  height: 10px;
`

const Title = styled.h1`
  margin-bottom: 0;
  font-weight: normal;
  font-size: 36px;
`

const SubTitle = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.grey.light};
`

const ChatWindow = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`

const ChatHeader = styled.header`
  background: green;
  height: 100px;
`

const MessageArea = styled.section`
  background: orange;
  flex: 1;
`
const MessageForm = styled.footer`
  background: red;
  height: 100px;
`

const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.grey.light};
  flex: 1;
`

const MainLayout: FC = () => {
  return (
    <Container>
      <SideNav />
      <Main>
        <ContactListSection>
          <ContactListTitle>
            <Title>Tasks</Title>
            <SubTitle>2 new tasks</SubTitle>
          </ContactListTitle>

          <ContactListBody>
            <ContactListBodyItem active>
              <ItemHeader>
                <span>Jenny Thomas</span>
                <span>13:13am</span>
              </ItemHeader>
              <ItemContent>Hello there, I have ...</ItemContent>
              <UnreadBadge />
            </ContactListBodyItem>
            <ContactListBodyItem>
              <ItemHeader>
                <span>Jenny Thomas</span>
                <span>13:13am</span>
              </ItemHeader>
              <ItemContent>Hello there, I have ...</ItemContent>
              <UnreadBadge />
            </ContactListBodyItem>
            <ContactListBodyItem>
              <ItemHeader>
                <span>Jenny Thomas</span>
                <span>13:13am</span>
              </ItemHeader>
              <ItemContent>Hello there, I have ...</ItemContent>
              <UnreadBadge />
            </ContactListBodyItem>
          </ContactListBody>
        </ContactListSection>
        <ChatWindow>
          <ChatHeader></ChatHeader>
          <MessageArea></MessageArea>
          <MessageForm></MessageForm>
        </ChatWindow>
        <Aside></Aside>
      </Main>
    </Container>
  )
}

export default MainLayout
