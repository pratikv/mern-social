import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Typography } from "@material-ui/core";
import { ArrowForward, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { list } from "./api-user";

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
}));

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        list(signal).then(data => {
            if (data && data.error) {
                console.error(data.error);
            } else {
                setUsers(data);
            }
        })
        return function cleanup() {
            abortController.abort();
        }
    }, []);

    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={4}>
            <Typography type="title" className={classes.title}>
                All Users
                </Typography>
            <List dense>
                {users.map((item, i) => {
                    return <Link to={"/user/" + item._id} key={i}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                })
                }
            </List>
        </Paper>
    )
};
