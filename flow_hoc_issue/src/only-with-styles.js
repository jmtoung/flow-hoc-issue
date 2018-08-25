// @flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import type { WithStyles } from "@material-ui/core/styles";

const styles = {
  container: { width: "100%" }
};

type Props = {
  requiredProp: string,
  ...$Exact<WithStyles>,
}

class WithStylesHoc extends React.Component<Props> {
  render = () => {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.container}>
      </Grid>
    );
  }
}

export default withStyles(styles)(WithStylesHoc);