# flow-hoc-issue
Issue with Flow and higher order components (HOC)

In this repository we demonstrate an issue regarding higher order components and flow type.

Specifically, we have a component that has a required prop - let's call it `requiredProp`. 
When we wrap this component with a higher order component (HOC), we expect the wrapped component to preserve the "requiredness" of `requiredProp`.

We test this behavior on 3 HOC: (1) `react-redux`'s `connect`, (2) `@material-ui`'s `withStyles`, and (3) a custom HOC. Indeed, this behavior is preserved.

However, when we wrap a component with any combination of these 3 HOCs, the "requiredness" of `requiredProp` goes away.

Specifically, when we wrap our component with `connect`, then `withStyles`, we get an error.
When we wrap our component with `withStyles`, then `connect`, flow no longer returns an error if `requiredProp` is not provided, which is not correct.
Lastly, when we wrap our custom component with `connect`, then `withStyles`, and finally with our custom HOC, flow also no longer returns an error if `requiredProp` is not provided.

All of the code is provided for replicating this behavior is provided in this repo in the `flow_hoc_issue/src` directory.

  - `my-example-hoc.js` - Our custom HOC
  - `only-connect.js` - A component with a required `requiredProp` that is wrapped with `react-redux`'s `connect`
  - `only-with-styles.js` - A component with a required `requiredProp` that is wrapped with `@material-ui`'s `withStyles`
  - `only-my-example.js` - A component with a required `requiredProp` that is wrapped with our custom HOC.
  - `connect-then-with-styles.js` - A component with a required `requiredProp` that is wrapped with `connect`, then `withStyles`
  - `with-styles-then-connect.js` - A component with a required `requiredProp` that is wrapped with `withStyles`, then `connect`
  - `my-example-then-connect-then-with-styles.js` - A component with a required `requiredProp` that is wrapped with `connect`, then `withStyles`, then our custom HOC

  - `main.js` - A file that imports all the above components

