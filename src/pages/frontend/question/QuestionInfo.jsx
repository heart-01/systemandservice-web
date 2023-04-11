import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadQuestionById, loadCommentByQuestionId } from "../../../redux/actions/questionActions";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "../../../utils/configuredDayJs";
import TitleDocument from "../../../utils/TitleDocument";
import LoadingIndicator from "../../../utils/LoadingIndicator";
import { Avatar, List, PageHeader } from "antd";
import CommentForm from "./CommentForm";
import CommentInfo from "./CommentInfo";

const QuestionInfo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionId } = useParams();

  const token = localStorage.getItem("token");
  const questionInfo = useSelector((state) => state.question.info);
  const commentByQuestionId = useSelector((state) => state.question.commentByQuestionId);

  useEffect(() => {
    dispatch(loadQuestionById(questionId));
    dispatch(loadCommentByQuestionId(questionId));
  }, [dispatch, questionId, commentByQuestionId]);

  return (
    <>
      <TitleDocument title={props.title} />

      {!questionInfo && <LoadingIndicator />}
      {questionInfo?.success === true && (
        <>
          <section className="text-gray-600 mb-12">
            <div className="container px-5 pt-20 mx-auto">
              <div className="mb-10">
                <PageHeader className="border" onBack={() => navigate("/question")} title="รายละเอียดกระทู้" subTitle={questionInfo?.data.title} />
              </div>

              <List className="border">
                <div className="flex items-center justify-between mt-5 mx-5">
                  <h2 className="text-lg font-semibold text-gray-900">{questionInfo?.data.alias}</h2>
                  <small className="text-sm text-gray-700">{dayjs().to(dayjs(questionInfo?.data.created_at))}</small>
                </div>
                <List.Item className="mb-5 mx-5">
                  <List.Item.Meta
                    avatar={<Avatar size={64} src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />}
                    title={<p className="text-sm px-0 lg:text-lg lg:px-10">{questionInfo?.data.title}</p>}
                    description={<div dangerouslySetInnerHTML={{ __html: questionInfo?.data.description }} className="mt-3 text-gray-700 whitespace-pre-wrap text-sm px-0 lg:text-lg lg:px-10"></div>}
                  />
                </List.Item>
              </List>

              {commentByQuestionId?.data.map((item, index) => (
                <div key={item.id} className="mt-5">
                  <CommentInfo index={index + 1} data={item} />
                </div>
              ))}

              {token && (
                <div className="px-0 lg:px-96 mt-5">
                  <CommentForm count_comment={questionInfo?.data.count_comment} questionId={questionInfo?.data.id} />
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default QuestionInfo;
