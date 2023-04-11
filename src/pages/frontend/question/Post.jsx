import { deleteQuestion, patchQuestion } from "../../../redux/actions/questionActions";
import { Avatar, List, Button, Modal, Space } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "../../../utils/configuredDayJs";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { createContext } from "react";

const Post = (props) => {
  const dispatch = useDispatch();

  const [modal, contextHolder] = Modal.useModal();
  const ReachableContext = createContext(null);
  const profileInfo = useSelector((state) => state.account?.info);

  const handleOnClickViewPost = (questionId, views) => {
    dispatch(patchQuestion(questionId, { views }));
  };

  const handleOnClickDeletePost = (questionId) => {
    return () => {
      modal.confirm({
        title: "ยืนยันการลบกระทู้",
        onOk() {
          dispatch(deleteQuestion(questionId));
        },
      });
    };
  };

  return (
    <List>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{props.data.alias}</h2>
        <small className="text-sm text-gray-700">{dayjs().to(dayjs(props.data.created_at))}</small>
      </div>
      <div className="flex items-center justify-end">
        <small className="text-sm text-gray-700 mr-2">
          <VisibilityIcon /> {props.data.views}
        </small>
        <small className="text-sm text-gray-700">
          <CommentIcon /> {props.data.count_comment}
        </small>
      </div>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar size={64} src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />}
          title={<p className="text-sm px-0 lg:text-lg lg:px-10">{props.data.title}</p>}
          description={<div dangerouslySetInnerHTML={{ __html: props.data.description }} className="mt-3 text-gray-700 whitespace-pre-wrap text-sm px-0 lg:text-lg lg:px-10"></div>}
        />
        <div>
          <NavLink onClick={() => handleOnClickViewPost(props.data.id, +props.data.views + 1)} to={`${props.data.id}`}>
            <Button type="dashed">แสดงความคิดเห็น</Button>
          </NavLink>

          {profileInfo?.role === "admin" && (
            <ReachableContext.Provider>
              <Space>
                <Button type="primary" danger onClick={handleOnClickDeletePost(props.data.id)}>
                  ลบ
                </Button>
              </Space>
              {contextHolder}
            </ReachableContext.Provider>
          )}
        </div>
      </List.Item>
    </List>
  );
};

export default Post;
