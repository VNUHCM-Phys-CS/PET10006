import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Schedule from './schedule';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Lập trình hướng&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              đối tượng
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            PET10006 - Giới thiệu về lập trình hướng đối tượng và lập trình C++ <br /> <br/>
            Nội dung bao gồm các kiến thức về lập trình hướng đối tượng như: khái niệm về lập trình hướng đối tượng, ngôn ngữ lập trình hướng đối tượng. Môn học cung cấp các kiến thức về đối tượng và lớp, toán tử trên lớp, kỹ thuật kế thừa, khuôn hình, các kênh nhập xuất, xử lý lỗi.
          </Typography>
        </Stack>
        <Schedule activeStep={7}/>
      </Container>
    </Box>
  );
}
