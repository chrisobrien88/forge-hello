import ForgeUI, {
  render,
  Fragment,
  Text,
  Button,
  IssuePanel,
  useProductContext,
  useState,
} from "@forge/ui";
import api, { route } from "@forge/api";

const fetchCommentsForIssue = async (issueIdOrKey) => {
  const res = await api
    .asUser()
    .requestJira(route`/rest/api/3/issue/${issueIdOrKey}/comment`);
  const data = await res.json();
  return data.comments;
};

const App = () => {
  const context = useProductContext();
  const [count, setCount] = useState(0);

  const [comments] = useState(
    async () => await fetchCommentsForIssue(context.platformContext.issueKey)
  );

  console.log(`Number of comments on this issue: ${comments.length}`);
  return (
    <Fragment>
      <Text>Hello there</Text>
      <Text>Number of comments on this issue: {comments.length}</Text>
      <Text>Number of times clicked: {count}</Text>
      <Button text="click me please" onClick={()=> {setCount(count + 1); console.log("clicked: ", count, " times")}}></Button>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
