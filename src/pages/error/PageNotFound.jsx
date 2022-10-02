import { Button, Result } from "antd";
import DocumentTitle from "react-document-title";
import { NavLink } from "react-router-dom";

const PageNotFound = () => (
  <>
    <DocumentTitle title={`Page not found | ${process.env.REACT_APP_TITLE}`} />
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <NavLink to="/">
          <Button type="primary">Back Home</Button>
        </NavLink>
      }
    />
  </>
);

export default PageNotFound;
