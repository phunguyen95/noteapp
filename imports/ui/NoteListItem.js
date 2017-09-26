import React from 'react';
import moment from 'moment';
import {Session} from 'meteor/session'
import { createContainer } from 'meteor/react-meteor-data';

 export const NoteListItem =(props)=>{
	return(
		<div onClick={()=>{
			props.Session.set('selectedNoteId',props.note._id)
		}}>
			<h5>{props.note.title||'Untitle'}</h5>  {/*if there is a title, we will print it out, otherwise we will print untitle*/}
			{props.note.selected?'selected':undefined}
			<p>{moment(props.note.updatedAt).format('M/DD/YY')}</p>

		</div>
		)
};
NoteListItem.propsTypes={
	note:React.PropTypes.object.isRequired,
		Session:React.PropTypes.object.isRequired

};

export default createContainer(()=>{
	return{Session};
},NoteListItem);