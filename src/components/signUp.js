import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import School from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useSignUpForm from './hooks';
import axios from 'axios'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Programming University
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const API_URL = "http://localhost:3002/api";

export default function SignUp() {
  const classes = useStyles();
  const enroll = async () => {
    const { firstName, lastName, email, cohort, registrationNumber } = inputs;
    await axios.post(`${API_URL}/enroll`, { firstName, lastName, email, cohort, registrationNumber });
    console.log(`Student Created! 
      Name: ${firstName} ${lastName}
      Email: ${email}
      Cohort: ${cohort}`);
  }

  const initialValues = { firstName: '', lastName: '', email: '', registrationNumber: '', cohort: '' };
  const { inputs, handleInputChange, handleSubmit, valid, error } = useSignUpForm(initialValues, enroll);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <School />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome and enroll for a programming course
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="registrationNumber"
                label="Registration Number"
                id="registration-number"
                autoComplete="registration-number"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                value={inputs.cohort}
                onChange={handleInputChange}
                displayEmpty
                fullWidth
                inputProps={{ 'aria-label': 'Without label' }}
                name="cohort"
                required
              >
                <MenuItem value="" disabled>Select Cohort</MenuItem>
                <MenuItem value={"morning"}>Morning</MenuItem>
                <MenuItem value={"afternoon"}>Afternoon</MenuItem>
                <MenuItem value={"evening"}>Evening</MenuItem>
              </Select>

            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={!valid}
          >
            ENROLL
          </Button>
          <Typography color="error">{error}</Typography>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}