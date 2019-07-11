// @flow
import * as React from "react";
import OnlyConnect from "./only-connect";
import OnlyMyExample from "./only-my-example";
import OnlyWithStyles from "./only-with-styles";
import ConnectThenWithStyles from "./connect-then-with-styles";
import WithStylesThenConnect from "./with-styles-then-connect";
import MyExampleThenConnectThenWithStyles from "./my-example-then-connect-then-with-styles";

class Example extends React.Component<{}> {
  render = () => {
    return(
      <React.Fragment>

        // Component with only `connect` HOC applied.
        // Here, if `requiredProp` is not given, flow will correctly complain :)
        <OnlyConnect
          requiredProp="Hi"/>

        // Component with only `myExampleHoc` applied.
        // Here, if `requiredProp` is not given, flow will correctly complain :)
        <OnlyMyExample
          requiredProp="Hi"/>

        // Component with only `withStyles` HOC applied.
        // Here, if `requiredProp` is not given, flow will correctly complain :)
        <OnlyWithStyles
          requiredProp="Hi"/>

        // Component with `connect` then `withStyles`.
        // Here we get the following error:
{/*
        Cannot create ConnectThenWithStyles element because props [1] is incompatible with empty [2].

        main.js
        27│           requiredProp="Hi"/>
        28│
        29│         // Component with `connect` then `withStyles`.
    [1] 30│         <ConnectThenWithStyles/>
        31│
        32│         // Component with `withStyles` then `connect`
        33│         <WithStylesThenConnect/>

        ../flow-typed/npm/react-redux_v5.x.x.js
    [2] 73│     CP: $Diff<OmitDispatch<ElementConfig<Com>>, RSP>,
*/}
        <ConnectThenWithStyles/>

        // Component with `withStyles` then `connect`.
        // Here we do not get any error, but this not ideal because we should get a warning about `requiredProp`.
        <WithStylesThenConnect/>

        // Lastly, chaining `connect` with `withStyles`, then `myExampleHoc`.
        // Here we do not get any error, but this not ideal because we should get a warning about `requiredProp`.
        <MyExampleThenConnectThenWithStyles/>

      </React.Fragment>
    )
  }
}
