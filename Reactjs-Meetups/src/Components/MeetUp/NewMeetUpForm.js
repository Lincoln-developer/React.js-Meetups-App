import Card from "./ui/Card";
import classes from './MeetupForm.module.css';
import {useRef} from 'react';
function NewMeetForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function SubmitHandler(event){
        event.preventDefault();
        const enteredtitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
            titel:enteredtitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription

        }
        props.onAddMeetUp(meetUpData);
    }
    return(
        <Card>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" id='title' required ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' id='address' required ref={addressInputRef}/>
                </div>
                <div className={classes.control}>   
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea type='text'rows='5' id='description'required ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button >Add meetup</button>
                </div>
            </form>
        </Card>   
    )
}
export default NewMeetForm;