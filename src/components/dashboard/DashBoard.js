import React, { Component } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import { mainListItems } from '../sidebar/SideBar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';



const drawerWidth = 240;
const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    cardRoot: {
        minWidth: 150,
        maxWidth: 200,
    },
    cardBullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cardTitle: {
        fontSize: 18,
    },
    cardPos: {
        marginBottom: 12,
    },
    cardLargeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
});

/*const DashBoard = (props) => {
    console.log(props.travelData)
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const bull = <span className={classes.bullet}>•</span>;
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        props.history.push('./login');
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Travel DashBoard
                    </Typography>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        color="inherit">
                        <ExitToAppIcon onClick={handleLogout} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div>
                    <Container maxWidth="lg" className={classes.container}>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <StyledBadge
                                    overlap="circle" anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }} variant="dot">
                                    <Avatar alt="national" src="/img/international.png" />
                                </StyledBadge>
                                <Typography align="right" color="textSecondary" variant="h6" component="h2">
                                    National 15
                                </Typography>
                            </CardContent>
                        </Card>
                        <br></br>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <StyledBadge
                                    overlap="circle" anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }} variant="dot">
                                    <Avatar alt="national" src="/img/domestic.png" />
                                </StyledBadge>
                                <Typography align="right" color="textSecondary" variant="h6" component="h2">
                                    International 30
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </div>
            </main>
        </div >
    );

};

export default DashBoard;
*/
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.setState({ open: false });
    }
    state = {
    };
    handleDrawerOpen() {
        this.setState(() => ({
            open: true
        }));
    };
    handleDrawerClose() {
        this.setState(() => ({
            open: false
        }));
    };

    handleLogout() {
        this.props.history.push('./login');
    };

    render() {
        //const { classes } = this.props.useStyles;
        const classes = useStyles;
        console.log(classes);
        console.log(this.props.travelData);
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.Thiru, this.state.open && useStyles.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => this.handleDrawerOpen()}
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={useStyles.title}>
                            Travel DashBoard
                    </Typography>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            color="inherit">
                            <ExitToAppIcon onClick={() => this.handleLogout()} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(useStyles.drawerPaper, !this.state.open && useStyles.drawerPaperClose),
                    }}
                    open={this.state.open}>
                    <div className={useStyles.toolbarIcon}>
                        <IconButton onClick={() => this.handleDrawerClose()}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                </Drawer>
                <main className={useStyles.content}>
                    <div className={useStyles.appBarSpacer} />
                    <div>
                        <Container maxWidth="lg" className={useStyles.dfgsadf}>

                        </Container>
                    </div>
                </main>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        travelData: state
    };
}

export default connect(mapStateToProps)(DashBoard);