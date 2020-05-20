import React from 'react'

const UserItem = (props) =>  {
        const {avatar_url, login, html_url} = props.user
        // static propTypes = {
        //     avatar_url: PropTypes.string.isRequired,
        //     login: PropTypes.string.isRequired,
        //     avatar_url: PropTypes.string.isRequired
        // }
        return (
            <div className="card text-center">
               <img src={avatar_url} alt='user avatar' className='round-img' style={{width: '60px'}}/>
               <h3>{login}</h3>
               <div>
                   <a href={html_url} className='btn btn-dark btn-sm my-1' target='_blank' rel="noopener noreferrer">Stalk Further</a>
               </div>
            </div>
        )
}

export default UserItem
