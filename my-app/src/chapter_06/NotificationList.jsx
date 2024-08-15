import React from "react";
import Notification from "./Notification";

const reservedNotifications =[
  {
    id:1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id:2,
    message: "점심 식사 시간입니다.",
  },
  {
    id:3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;



class NotificationList extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      notifications:[],//앞으로 사용할 데이터를 초기화
    }
  }

  componentDidMount(){
    const {notifications}=this.state;
    timer = setInterval(()=>{
      if (notifications.length < reservedNotifications.length){
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,//메세지배열에넣고 업데이트하는것
          
        })
      }else{
        this.setState({
          notifications:[]
        })//알림추가가 모드 끝나면 비우기.컴포넌트언마운트
        clearInterval(timer);
      }
    },1000)
  }

  componentWillUnmount(){
    if(timer){
      clearInterval(timer);//기존 타이머가 존재할 경우 제거
    }
  }

  render(){
    return(
      <div>
        {this.state.notifications.map((notification)=>{
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />)
        })}
      </div>
    )
  }
}


export default NotificationList;