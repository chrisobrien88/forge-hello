import ForgeUI, { render, Fragment, Text, IssuePanel, Button } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Button text="Click me" onClick={() => console.log('Button clicked!')} />
      <Text>Hello world!</Text>
      
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
