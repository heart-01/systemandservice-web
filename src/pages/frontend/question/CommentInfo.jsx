import { Card } from "antd"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const CommentInfo = (props) => {
  return (
    <Card type="inner" title={`ความคิดเห็นที่ ${props.index}`} extra={<div><AccountCircleOutlinedIcon /> {props.data.alias}</div>} bordered={true}>
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} className="mt-3 text-gray-700 whitespace-pre-wrap text-sm px-0 lg:text-lg lg:px-10"></div>
    </Card>
  )
}

export default CommentInfo