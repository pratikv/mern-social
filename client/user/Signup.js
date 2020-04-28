import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardActions, CardContent, Typography, TextField, Icon } from "@material-ui/core";
import { create } from "./api-user";
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: "auto",
        textAlign: "center",
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    error: {
        verticalAlign: "center",
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: "auto",
        marginBottom: theme.spacing(1)
    }
}));

export default function Signup() {
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        };


        create(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            }
            else {
                setValues({ ...values, error: '', open: true });
            }
        });
    }

    const classes = useStyles();
    return (<div>
        <Card className={classes.card}>
            <CardContent>
                <Typography typ="headline" component="h2" className={classes.title}>
                    Sign Up
                    </Typography>
                <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal" /><br />
                <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
                <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal" /><br />
                {
                    values.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {values.error}</Typography>)
                }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit} >Submit</Button>
            </CardActions>
        </Card>
        <Dialog open={values.open} disableBackDropClick={true}>
            <DialogTitle>New Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    New account created successfully
                    </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/signin">
                    <Button color="primary" autoFocus="autoFocus" variant="contained">
                        Sign In
                        </Button>
                </Link>
            </DialogActions>
        </Dialog>
    </div>);
}
