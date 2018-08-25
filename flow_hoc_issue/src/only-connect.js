// @flow
import * as React from "react";
import { connect } from "react-redux";

type Props = {
  requiredProp: string,
}

class ConnectHoc extends React.Component<Props> {
  render = () => {
    return null;
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(ConnectHoc);