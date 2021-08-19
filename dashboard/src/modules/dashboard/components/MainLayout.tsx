import React, { FC } from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'
import {
  DashboardIcon,
  ClipboardIcon,
  UserIcon,
  ExitIcon,
  SendIcon,
} from '../../../assets/icons'

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
  padding-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey.light};
`

const Menu = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
  &:first-of-type {
    flex: 1;
    margin-top: 5em;
  }
  &:last-of-type {
    justify-self: flex-end;
  }
`

const MenuItem = styled.li<{ active?: boolean }>`
  margin-top: 2em;
  text-align: center;
  position: relative;

  ${({ theme, active }) =>
    active &&
    `
      color: ${theme.colors.white};
      &::before {
          position: absolute;
          left: 0;
          content: '*';
          height: 100%;
          width: 4px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          background-color: ${theme.colors.white};
      }
    `}
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
  flex: 1;
  padding: 0 2em;
  overflow: auto;
`

const MessageBubble = styled.div`
  max-width: 40%;
  padding: 1em;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: ${({ theme }) => theme.colors.grey.lighter};
  border-top-right-radius: 15px;
  font-size: 12px;
  margin-top: 1em;
`

const Message = styled.div<{ right?: boolean }>`
  display: flex;
  width: 100%;

  ${({ theme, right }) =>
    right &&
    `
    justify-content: flex-end;    

    & > div {
        background-color: ${theme.colors.blue.default};
        border-top-right-radius: 0;
        border-top-left-radius: 15px;
        color: ${theme.colors.white};
    }
  `}
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

const MessageSubmitButton = styled.button<{ disabled?: boolean }>`
  background: transparent;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey.default : theme.colors.blue.dark};
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

        <Menu>
          <MenuItem>
            <DashboardIcon size={25} />
            <p>Dashboard</p>
          </MenuItem>
          <MenuItem active>
            <ClipboardIcon size={30} />
            <p>Tasks</p>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem>
            <UserIcon size={30} />
            <p>Profile</p>
          </MenuItem>
          <MenuItem>
            <ExitIcon size={25} />
            <p>Logout</p>
          </MenuItem>
        </Menu>
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
          <MessageArea>
            <Message>
              <MessageBubble>
                Howdy, is there something I can help you with today?
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>Just let me know</MessageBubble>
            </Message>
            <Message right>
              <MessageBubble>
                Hello Samuel, I would like to make an enquiry about what we spoke about
                the last time. My stuff isn’t working and coming at all. I need a new
                machine
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>
                Howdy, is there something I can help you with today?
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>Just let me know</MessageBubble>
            </Message>
            <Message right>
              <MessageBubble>
                Hello Samuel, I would like to make an enquiry about what we spoke about
                the last time. My stuff isn’t working and coming at all. I need a new
                machine
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>
                Howdy, is there something I can help you with today?
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>Just let me know</MessageBubble>
            </Message>
            <Message right>
              <MessageBubble>
                Hello Samuel, I would like to make an enquiry about what we spoke about
                the last time. My stuff isn’t working and coming at all. I need a new
                machine
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>
                Howdy, is there something I can help you with today?
              </MessageBubble>
            </Message>
            <Message>
              <MessageBubble>Just let me know</MessageBubble>
            </Message>
            <Message right>
              <MessageBubble>
                Hello Samuel, I would like to make an enquiry about what we spoke about
                the last time. My stuff isn’t working and coming at all. I need a new
                machine
              </MessageBubble>
            </Message>
          </MessageArea>
          <MessageForm>
            <MessageInput />
            <MessageSubmitButton>
              <SendIcon size={30} />
            </MessageSubmitButton>
          </MessageForm>
        </ChatWindow>
        <Aside></Aside>
      </Main>
    </Container>
  )
}

export default MainLayout
