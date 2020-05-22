import React from 'react'

const Alert = ({ alert }) => {
    return (
       alert!==null && (
           <div className={`alert alert-${alert.type}`}>
               <i class="far fa-comment-alt-exclamation" />  {alert.msg}
            </div>
       )
    )
}
export default Alert