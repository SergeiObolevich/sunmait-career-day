import * as React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import * as authActions from 'redux/modules/auth/authActions';
import Header from 'components/common/Header';

const styles = () => ({
  header: {
    padding: 15,
  },
});

interface IStyleProps {  
  header: string;
}

interface ILoginPageProps {
  classes: IStyleProps;
  loginAsEmployee: authActions.LoginAsEmployee;
  loginAsUnitManager: authActions.LoginAsUnitManager;
}

interface IState {}

class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  public render() {
    const {classes} = this.props;
    return (
      <div>
        <Grid item md={12} className={classes.header}>
          <Header title="Login" />
        </Grid>

        <Grid container justify="center" alignItems="center" spacing={8}>
          <Grid item>
            <Button
              id="login-as-employee-btn"
              raised
              onClick={() => this.props.loginAsEmployee()}
            >
              Login as employee
            </Button>
          </Grid>

          <Grid item>
            <Button
              id="login-as-unit-manager-btn"
              raised
              onClick={() => this.props.loginAsUnitManager()}
            >
              Login as unit manager
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage)