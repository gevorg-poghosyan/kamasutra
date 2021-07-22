import React from 'react';
import {connect} from 'react-redux';
import { follow,  setCurrentPage,  setTotalUsersCount,  unfollow } from '../../redux/users-reducer';
import { setUsers } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from  'axios';

class UsersContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSaze}`)
        .then(response => {
                        this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSaze}`)
        .then(response => {
                 this.props.setUsers(response.data.items)
        });

    }


render(){
    return <Users totalUsersCount = {this.props.totalUsersCount}
    pageSaze = {this.props.pageSaze}
    currentPage = {this.props.currentPage}
    onPageChanged = {this.onPageChanged}
    users = {this.props.users}
    follow = {this.props.follow}
    unfollow = {this.props.unfollow}/>
   
}
}

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSaze: state.usersPage.pageSaze,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCouunt) => {
//             dispatch(setTotalUsersCountAC(totalCouunt))
//         }
        
//     }
// }

export default connect(mapStateToProps,
    {
    follow, unfollow,
    setUsers, setCurrentPage,
    setTotalUsersCount
    })(UsersContainer);