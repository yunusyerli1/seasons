import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    
    return(
        <div className = "ui container comments">
            <ApprovalCard> 
                <CommentDetail author ="Sam" timeAgo = "Today at 4:45PM" content = "Nice blog!" avatar = {faker.image.avatar()}/>                  
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author ="Alex" timeAgo = "Today at 2:20PM" content = "What a great article" avatar = {faker.image.avatar()}/> 
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author ="Jane"timeAgo = "Yesterday at 6:45PM" content = "woow amazing!" avatar = {faker.image.avatar()}/>
            </ApprovalCard>


            
            
        </div>

    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);