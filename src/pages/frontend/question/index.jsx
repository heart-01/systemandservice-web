import { connect } from "react-redux";
import { loadQuestionAll } from "../../../redux/actions/questionActions";
import { useLoadQuestion } from "../../../hooks/question/hookLoadQuestion";
import LoadingIndicator from "../../../utils/LoadingIndicator";
import TitleDocument from "../../../utils/TitleDocument";
import HeaderPost from "./HeaderPost";
import Post from "./Post";

const Index = (props) => {
  const { questionAll, handleOnClickMenuOrder, handleOnLoadQuestionSearch } = useLoadQuestion({ loadQuestionAll: props.loadQuestionAll, questionAll: props.questionAll });

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          {!questionAll && <LoadingIndicator />}
          {questionAll?.success === true && (
            <>
              <HeaderPost handleOnLoadQuestionSearch={handleOnLoadQuestionSearch} handleOnClickMenuOrder={handleOnClickMenuOrder} />
              {questionAll?.data.map((item) => (
                <div key={item.id} className="mt-10 px-0 lg:px-10 py-0 lg:py-5 bg-white shadow-lg rounded-lg">
                  <Post data={item} />
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    questionAll: state.question.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestionAll: (order, search) => dispatch(loadQuestionAll(order, search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
