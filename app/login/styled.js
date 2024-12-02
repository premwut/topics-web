import styled from '@emotion/styled'
import { COLOR } from '../styled'
import { css } from '@emotion/react'

export const Header = styled.h1`
  font-size: 28px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  background-color: ${COLOR.GREEN_300};

  ${({ theme }) => css`${theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
  }`} 
`

export const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 900px) {
    width: 40%;
    height: 100vh;
  }
`

export const GraphicSectionContainer = styled.div`
  position: relative;
  text-align: center;

  @media screen and (min-width: 900px) {
    width: 60%;
    height: 100vh;
  }

  @media screen and (max-width: 900px) {
    min-height: 350px;
    max-height: 600px;
  }
`

export const ImageContainer = styled.div`
  @media screen and (min-width: 900px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  max-height: 200px;
  margin: auto;

  @media screen and (min-width: 900px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
`