import React, { FC } from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'
import { dashboard, exit, clipboard, user, send } from '../../../assets/icons'

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
`

const SideNav = styled.nav`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.blue.darker};
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey.light};

  & > ul {
    padding: 0;
    list-style-type: none;

    & li {
      margin-top: 2em;
      text-align: center;

      & > img {
        text-align: center;
      }
    }
  }

  & > ul:first-of-type {
    flex: 1;
    margin-top: 5em;
  }
  & > ul:last-of-type {
    justify-self: flex-end;
  }
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
  height: 100px;
  padding: 0 1em;

  & > h2 {
    margin-bottom: 0;
    font-weight: normal;
  }

  & > p {
    margin: 0;
    color: ${({ theme }) => theme.colors.grey.light};
  }
`

const MessageArea = styled.section`
  background: orange;
  flex: 1;
`
const MessageForm = styled.footer`
  height: 50px;
  display: flex;
  padding: 1.5em;
`

const MessageInput = styled.input`
  flex: 1;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey.lighter};
  padding: 0 1em;
  outline: none;
  font-size: 14px;
  font-family: 'VarelaRound';
  color: ${({ theme }) => theme.colors.grey.darker};
`

const MessageSubmitButton = styled.button`
  background: transparent;
  padding: 0;
  outline: 0;
  border: none;
  margin-left: 1em;

  &:hover {
    cursor: pointer;
  }
`

const Aside = styled.aside`
  background-color: rgba(151, 157, 172, 0.05);
  flex: 1;
`

const MainLayout: FC = () => {
  return (
    <Container>
      <SideNav>
        <Logo />

        <ul>
          <li>
            <img src={dashboard} width={30} height={30} />
            <p>Dashboard</p>
          </li>
          <li>
            <img src={clipboard} width={30} height={30} />
            <p>Tasks</p>
          </li>
        </ul>

        <ul>
          <li>
            <img src={user} width={30} height={30} />
            <p>Profile</p>
          </li>
          <li>
            <img src={exit} width={30} height={30} />
            <p>Logout</p>
          </li>
        </ul>
      </SideNav>
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
            </ContactListBodyItem>
            <ContactListBodyItem>
              <ItemHeader>
                <span>Jenny Thomas</span>
                <span>13:13am</span>
              </ItemHeader>
              <ItemContent>Hello there, I have ...</ItemContent>
            </ContactListBodyItem>
          </ContactListBody>
        </ContactListSection>
        <ChatWindow>
          <ChatHeader>
            <h2>Jenny Thomas</h2>
            <p>Reply to message</p>
          </ChatHeader>
          <MessageArea></MessageArea>
          <MessageForm>
            <MessageInput />
            <MessageSubmitButton>
              <img src={send} width={30} height={30} />
            </MessageSubmitButton>
          </MessageForm>
        </ChatWindow>
        <Aside></Aside>
      </Main>
    </Container>
  )
}

export default MainLayout
