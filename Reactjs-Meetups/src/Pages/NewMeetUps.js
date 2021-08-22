import NewMeetForm from "../Components/MeetUp/NewMeetUpForm";

import {useHistory} from 'react-router-dom'

function NewMeetUpsPage(){

    const history = useHistory();

    function addMeetUpHandler(meetupData){
        fetch('https://summer-tours-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        ).then(() =>{
            history.replace('/')
        })
    }
    return (
        <div>
            <h1> New meetups</h1>
            <NewMeetForm onAddMeetUp={addMeetUpHandler}/>
        </div>
    )
}

export default NewMeetUpsPage;