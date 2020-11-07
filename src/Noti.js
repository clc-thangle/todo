import {message} from 'antd';
import 'antd/dist/antd.css';
message.config({
  duration: 3,
});

export default {
  success: (text) => {
    return message.success(text);
  }
};