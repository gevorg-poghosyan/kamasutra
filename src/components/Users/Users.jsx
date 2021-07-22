import React from 'react';
import styles from'./Users.module.css';
import userPhoto from '../../assets/images/user.jpg'

const Users = (props) =>{
    debugger;
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSaze);
    let pages = [];
    let pagesContainer = Math.ceil(pagesCount/10);
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    } 

    for(let j=0; j<=pagesContainer; j++){
        pages.unshift(pages.splice(j,10))
    }
    pages.reverse();
    pages.pop();
    console.log(pages,884)
   return  (
        <div>
            <div>
                {pages.map(p => {
                   return p.map(num=>{
                        return <button className={props.currentPage === num && styles.selectedPage}
                onClick={(e)=> props.onPageChanged(num)}>{num}</button>
                   })
                 
                    })
                }
            </div>
         {
             props.users.map(u => <div key = {u.id}>
                 <span>
                     <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/></div>
                     <div>
                         {u.followed 
                         ? <button onClick = { () =>{props.unfollow(u.id)} }>unfollow</button> 
                         : <button onClick = { () =>{props.follow(u.id)} }>follow</button>}
                     </div>
                 </span>
                 <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                 </span>
                 <span>
                     <div>{'u.location.country'}</div>
                     <div>{'u.location.city'}</div>
                 </span>
             </div>)
           }
       </div>)
   

}

export default Users;