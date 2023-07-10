import { Button, Container, Stack, Typography, makeStyles } from '@mui/material';
import MuiButton from '../components/MuiButton';
import MuiTextField from '../components/MuiTextField';

/* const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
}) */

function Create() {
  return (
    <Container>
      <Typography variant='h6'component='h2' color='textSecondary' gutterBottom m={2}>Create</Typography>
      <Stack spacing={1} direction='row'>
        <Button variant='text' color='secondary'>Button</Button>
        <Button variant='outlined' color='secondary'>Button</Button>
        <Button variant='contained' color='secondary'>Button</Button>
      </Stack>
      <MuiButton />
      <MuiTextField />
    </Container>
  )
}

export default Create;
