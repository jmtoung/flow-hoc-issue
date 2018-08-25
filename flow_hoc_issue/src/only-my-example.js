// @flow
import * as React from "react";
import myExampleHoc from "./my-example-hoc";

type Props = {
  requiredProp: string,
}

class MyExample extends React.Component<Props> {
  render = () => {
    return null;
  }
}

export default myExampleHoc(MyExample);