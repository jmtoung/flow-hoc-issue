// @flow
import * as React from "react";
import { connect } from "react-redux";

type InjectedProps = {
  injectedProp: void | boolean,
}

export default function myExampleHoc<
  Props: {},
  WrappedComponent: React.ComponentType<Props>>(
  Component: WrappedComponent): React.ComponentType<$Diff<React.ElementConfig<WrappedComponent>, InjectedProps>> {

  type MapStateProps = {
    authenticated: boolean,
  }

  type MyExampleHocProps = {
    ...$Exact<Props>,
    ...$Exact<MapStateProps>,
  }

  class MyExampleHoc extends React.Component<MyExampleHocProps> {
    render = () => {
      const { authenticated, ...restProps } = this.props;

      return <Component
        injectedProps={true}
        {...restProps}
        />;
    }
  }

  const mapStateToProps = (state) => ({
    authenticated: false
  });

  return connect(mapStateToProps, null)(MyExampleHoc);
}