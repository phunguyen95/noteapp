import React from 'react';
import moment from 'moment';

 const NoteListItem =(props)=>{
	return(
		<div>
			<h5>{props.note.title||'Untitle'}</h5>  {/*if there is a title, we will print it out, otherwise we will print untitle*/}
			<p>{moment(props.note.updatedAt).format('M/DD/YY')}</p>

		</div>
		)
};
NoteListItem.propsTypes={
	note:React.PropTypes.object.isRequired 
};

export default NoteListItem;