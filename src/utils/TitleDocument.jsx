import DocumentTitle from "react-document-title";

const TitleDocument = (props) => {
  return (
    <>
      <DocumentTitle title={`${props.title} | ${process.env.REACT_APP_TITLE}`} />
    </>
  );
};

export default TitleDocument;
