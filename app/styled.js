import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export const COLOR = {
  SUCCESS: '#49A569',
  TEXT_BLACK: '#101828',
  BORDER_GRAY: '#F9F9F9',
  GRAY_100: '#BBC2C0',
  GRAY_300: '#939494',
  GREEN_300: '#2B5F44',
  GREEN_500: '#243831',
}

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

const getButtonStyles = (action = 'primary') => {
  switch (action) {
    case BUTTON_VARIANT.PRIMARY:
      return {
        backgroundColor: COLOR.SUCCESS,
        color: 'white',
      }
    case BUTTON_VARIANT.SECONDARY:
      return {
        borderColor: COLOR.SUCCESS,
        color: COLOR.SUCCESS,
      }
  }
}

const StyledButton = styled(Button)`
  border-radius: 8px;
  border: 1px solid ${COLOR.SUCCESS};
`

export const ActionButton = ({ variant = 'primary', ...restProps }) => {
  const buttonStyles = getButtonStyles(variant)

  return <StyledButton sx={{ color: buttonStyles.color, backgroundColor: buttonStyles.backgroundColor }} {...restProps} />
}

export const StyledTextField = styled(TextField)`
  border-radius: 8px;
  border: 1px solid ${COLOR.BORDER_GRAY};
`