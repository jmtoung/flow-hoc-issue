// @flow
import * as React from "react";
import OnlyConnect from "./only-connect";
import OnlyMyExample from "./only-my-example";
import OnlyWithStyles from "./only-with-styles";

class Example extends React.Component<{}> {
  render = () => {
    return(
      <React.Fragment>

        // Component with only `connect` HOC applied - WORKS!
        <OnlyConnect/>

        // Component with only `myExampleHoc` applied - WORKS!
        <OnlyMyExample/>

        // Component with only `withStyles` HOC applied - WORKS!
        <OnlyWithStyles/>


      </React.Fragment>
    )
  }
}
