/* eslint-disable react/no-children-prop */
import type { ButtonProps } from '@react-types/button'
import { Box, Button, Flex, styled } from '@uvodohq/planum'

const StyledFooter = styled('div', {
  p: '$32',
  pb: 0,
  dflex: 'center',
  justifyContent: 'space-between',
})

export interface FooterProps {
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  onSubmit?: () => void
  onCancel?: () => void
  onRemoveLink?: () => void
  isEditLink: boolean
}

export const DialogFooter = (props: FooterProps) => {
  const {
    okButtonProps,
    cancelButtonProps,
    onSubmit,
    onCancel,
    isEditLink,
    onRemoveLink,
  } = props

  return (
    <StyledFooter>
      <Box>
        {isEditLink ? (
          <Button variant={'secondaryDanger'} onClick={onRemoveLink}>
            Remove link
          </Button>
        ) : null}
      </Box>
      <Flex css={{ gap: 16 }}>
        <Button
          onClick={onCancel}
          variant="secondary"
          children="Cancel"
          {...cancelButtonProps}
        />

        <Button onClick={onSubmit} children="Save" {...okButtonProps} />
      </Flex>
    </StyledFooter>
  )
}
