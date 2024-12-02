import styled from '@emotion/styled'
import { COLOR } from '../styled'
import { css } from '@emotion/react'

export const Header = styled.h1`
  font-size: 28px;
  margin-bottom: 40px;
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

  ${({ theme }) => css`${theme.breakpoints.up('md')} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%, -50%);
  }`} 
`

export const GraphicSectionContainer = styled.div`
  position: relative;
  width: 60%;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`