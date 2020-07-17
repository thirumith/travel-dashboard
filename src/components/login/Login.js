import React, { useState, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import useStyles from "../styles/LoginStyles";
import { connect } from 'react-redux';
import { addNewTravel } from '../common/Actions';
import { bindActionCreators } from 'redux';
/*
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Login = (props) => {

    // adding travel styles
    const classes = useStyles();

    // travel login validation
    const user = useFormInput('');
    const pwd = useFormInput('');

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        if ((user.value === 'travel' || user.value === 'admin') &&
            (pwd.value === "Travel@123" || pwd.value === "Admin@123")) {
            props.history.push('/dashboard');
        } else {
            setOpen(true);
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={2}>
                <div className={classes.paper}>
                    <Avatar src="/img/signin_1.png" className={classes.large}>
                    </Avatar>
                    <Typography component="h6" color="primary">
                        Already have an account? Sign In
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal" required fullWidth id="username"
                            {...user} label="UserName" name="username" autoComplete="username" autoFocus
                        />
                        <TextField variant="outlined" margin="normal" required
                            fullWidth name="password" label="Password"
                            {...pwd} type="password" id="password" autoComplete="current-password"
                        />
                        <Button type="button" fullWidth variant="contained" color="primary"
                            className={classes.submit} onClick={handleLogin}>
                            Sign In
                        </Button>
                    </form>
                    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Sign In Alert !
                                </Typography>
                                <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List className={classes.errorDialog}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar color="primary">
                                        <ImportContactsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="SuperUser" secondary="suser/Suser@123" />
                                <ListItemText primary="Admin" secondary="admin/Admin@123" />
                            </ListItem>
                        </List>
                    </Dialog>
                </div>
            </Grid>
        </Grid>
    );
};

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
};

export default Login; */

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            city: '',
            travel: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            mobile: this.state.mobile,
            city: this.state.city,
            travel: this.state.travel
        };
        this.props.addNewTravel(data);
        console.log("submitted", data);
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            city: '',
            travel: ''
        });
    }
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div>
                <TextField
                    variant="outlined"
                    margin="normal" required fullWidth id="username"
                    label="UserName" name="firstname" autoComplete="username" autoFocus
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.firstname} />
                <TextField placeholder="LastName"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.lastname} />
                <TextField placeholder="Mobile"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.mobile} />
                <TextField placeholder="email"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.email} />
                <TextField placeholder="city"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.city} />
                <TextField placeholder="travel"
                    onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                    }}
                    value={this.state.travel} />
                <Button onClick={this.handleSubmit}>Submit</Button>
            </div>


        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNewTravel }, dispatch)
}
export default connect(null, mapDispatchToProps)(Login)