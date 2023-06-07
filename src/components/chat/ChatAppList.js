// import React from "react";
// import "../../assets/scss/chat.scss";
// import axiosConfig from "../../axiosConfig";
// class ChatAppList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userChatList: [],
//       index: "",
//     };
//   }
//   componentDidMount() {
//     let userId = JSON.parse(localStorage.getItem("user_id"));

//     console.log(userId);
//     axiosConfig
//       .get(`/user/getroomid/${userId}`)
//       .then(response => {
//         console.log(response.data?.data);
//         if (response.data?.status === true) {
//           this.setState({
//             userChatList: response.data?.data,
//             roomid: response.data.data?.roomid,
//           });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   render() {
//     const { userChatList, index } = this.state;

//     return (
//       <ul>
//         {userChatList.length
//           ? userChatList.map((user, Index) => {
//               {
//                 /* if (user?.astroid?.status === "Online") { */
//               }
//               return (
//                 <li
//                   key={user?._id}
//                   className="astrolistmain"
//                   style={{
//                     backgroundColor: `${index === Index ? "#ef9014" : "white"}`,
//                   }}
//                 >
//                   <div
//                     className="list-main"
//                     onClick={() => {
//                       this.props.getChatRoomId(user, Index);
//                       this.setState({ index: Index });
//                     }}
//                   >
//                     <div className="imglf">
//                       <img
//                         src={user.astroid?.img}
//                         className="app-img"
//                         alt="astroimg"
//                       />
//                     </div>
//                     <div
//                       onClick={() => this.props.getChatRoomId(user)}
//                       className="lst-con"
//                     >
//                       <h5 onClick={() => this.props.getChatRoomId(user)}>
//                         {user.astroid?.fullname}
//                       </h5>
//                       <p onClick={() => this.props.getChatRoomId(user)}>
//                         {user.msg}
//                       </p>
//                     </div>
//                   </div>
//                 </li>
//               );
//               {
//                 /* } */
//               }
//             })
//           : null}
//       </ul>
//     );
//   }
// }

// export default ChatAppList;
import React from "react";
import "../../assets/scss/chat.scss";
import axiosConfig from "../../axiosConfig";
import Buyimg from "../../../src/assets/img/boy-img.png";
class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChatList: [],
      Activeastro: {},
      index: "",
    };
  }
  componentDidMount() {
    const astroId = localStorage.getItem("astroId");
    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch(err => {
        console.log(err);
      });
    let userId = JSON.parse(localStorage.getItem("user_id"));

    console.log(userId);
    axiosConfig
      .get(`/user/getroomid/${userId}`)
      .then(response => {
        console.log(response.data?.data);
        if (response.data.status === true) {
          this.setState({
            userChatList: response.data?.data,
            roomid: response.data.data?.roomid,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { userChatList, index } = this.state;

    return (
      <>
        {this.state.Activeastro !== "" ? (
          <>
            <div
              style={{
                backgroundColor: "#ddd",
                height: "40px",
                borderRadius: "8px",
              }}
              className="container existingchat"
            >
              <h4 className="existingchatnew">
                <b>Current Astro</b>
              </h4>
            </div>
            <ul
            //  onClick={this.handlechat}
            >
              <li
                className="astrolistmain"
                onClick={() => {
                  this.props.getChatRoom(this.state.Activeastro, false);
                  this.setState({ index: "" });
                }}
                style={{
                  backgroundColor: `${
                    this.props.data === false ? "#ef9014" : "white"
                  }`,
                }}
              >
                <div
                  className="list-main"
                  // onClick={() => {
                  //   this.props.getChatRoom(user, Index);
                  //   this.setState({ index: Index });
                  // }}
                >
                  <div className="imglf">
                    <img
                      src={
                        this.state.Activeastro?.img
                          ? this.state.Activeastro?.img
                          : Buyimg
                      }
                      className="app-img"
                      alt="astroimg"
                    />
                  </div>
                  <div
                    // onClick={() => this.props.getChatRoomId(user)}
                    className="lst-con"
                  >
                    <h5
                    // onClick={() => this.props.getChatRoomId(user)}
                    >
                      {this.state.Activeastro?.fullname}
                    </h5>
                    <p
                    // onClick={() => this.props.getChatRoomId(user)}
                    ></p>
                  </div>
                </div>
              </li>
            </ul>
          </>
        ) : null}

        <div
          style={{ backgroundColor: "#ddd", height: "40px" }}
          className="container existingchat"
        >
          <h4 className="existingchatnew">
            {" "}
            <b>Existing Chat</b>{" "}
          </h4>
        </div>
        <ul>
          {userChatList.length
            ? userChatList.map((user, Index) => {
                return (
                  <li
                    className="astrolistmain"
                    style={{
                      backgroundColor: `${
                        index === Index ? "#ef9014" : "white"
                      }`,
                    }}
                  >
                    <div
                      key={user?._id}
                      className="list-main"
                      onClick={() => {
                        this.props.getChatRoomId(user, Index);
                        this.setState({ index: Index });
                      }}
                    >
                      <div className="imglf">
                        <img
                          src={user.astroid?.img ? user.astroid?.img : Buyimg}
                          className="app-img"
                          alt="astroimg"
                        />
                      </div>
                      <div
                        onClick={() => this.props.getChatRoomId(user)}
                        className="lst-con"
                      >
                        <h5 onClick={() => this.props.getChatRoomId(user)}>
                          {user.astroid?.fullname
                            ? user.astroid?.fullname
                            : "No Name"}
                        </h5>
                        <p onClick={() => this.props.getChatRoomId(user)}>
                          {user.msg}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </>
    );
  }
}

export default ChatAppList;
