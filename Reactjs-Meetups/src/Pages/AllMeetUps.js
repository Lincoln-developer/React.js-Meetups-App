
import MeetupList from '../Components/MeetUp/MeetupList';

import { useState } from 'react';

import { useEffect } from 'react';

function AllMeetUpsPage(){
    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetUps] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://summer-tours-default-rtdb.firebaseio.com/meetups.json'
            )
            .then(response => {
               return  response.json()
            })
            .then(data => {
                const meetups = [];
                for(const key in data){
                    const meetup = {
                        id:key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetUps(meetups)
            })
    }, [])

        if(isLoading){
            return(
                <section>
                    <p>loading....</p>
                </section>
            )
        }
    return (
        <div>
            <h1>All meetups page</h1>
            <MeetupList meetups={loadedMeetups}/>
        </div>
    )
}

export default AllMeetUpsPage;