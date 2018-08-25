// @flow
import * as React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import type { WithStyles } from "@material-ui/core/styles";

const styles = {
  container: { width: "100%" }
};

type Props = {
  requiredProp: string,
  ...$Exact<WithStyles>,
}

class WithStylesThenConnect extends React.Component<Props> {
  render = () => {
    return null;
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(withStyles(styles)(WithStylesThenConnect));