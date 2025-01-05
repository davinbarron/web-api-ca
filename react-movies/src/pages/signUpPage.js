import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    } else if (!validPassword) {
      setError("Password must be at least 8 characters long, contain at least one letter, one number, and one special character.");
    } else {
      setError("Passwords do not match")
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <Container component="main" maxWidth="xs">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
            {error && <Typography color="error">{error}</Typography>}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={e => setUserName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="passwordAgain"
                    label="Password Again"
                    type="password"
                    id="passwordAgain"
                    autoComplete="current-password"
                    onChange={e => setPasswordAgain(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={register}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    </Container>
  );
};

export default SignUpPage;