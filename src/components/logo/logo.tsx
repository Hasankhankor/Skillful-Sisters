import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1, // space between logo and text
        flexDirection: 'row',
      }}
    >
      <Box
        component="img"
        src="/images/homeya.png" // Corrected path, public folder doesn't need '/public'
        alt="logo"
        sx={{
          width: { xs: 40, sm: 50, md: 60 }, // Adjust logo size based on screen width
          height: 'auto',
        }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          '& span': {
            color: variant === 'primary' ? 'primary.main' : 'unset',
          },
        }}
      >
        Skillful <span>Sisters</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
