import Link from 'next/link'
import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { headerFont } from 'utils/fonts'
import { mostlyBlack } from 'utils/colors'
import { mobile } from 'utils/media'

const Wrapper = styled.a`
  padding: ${rem(20)} ${rem(30)};
  display: block;
  box-sizing: border-box;

  text-decoration: none;
  background: transparent;
  color: ${mostlyBlack};
  transition: background 100ms ease-out;

  ${mobile(css`
    font-size: ${rem(13)};
    padding: ${rem(15)} ${rem(20)};
  `)}

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.04);
  }

  &:focus {
    outline: 4px solid #888;
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${headerFont};
  font-weight: 700;
  font-size: 1.6em;
`

const Meta = styled.span`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: ${rem(1)};
`

const Post = ({ url = '/' }) => (
  <Link href={url}>
    <Wrapper href={url}>
      <Title>How to config Webpack and Babel for React 16</Title>
      <Meta>written 32 days ago</Meta>
    </Wrapper>
  </Link>
)

export default Post
