import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Meteor } from "meteor/meteor";
import { NoteListEmptyItem } from "./NoteListEmptyItem";

import { NoteList } from "./NoteList";
import {notes} from '../fixtures/fixture';

if (Meteor.isClient) {
	describe("NoteList", function() {
		it("should render NoteListItem for each note", function() {
			const wrapper = mount(<NoteList notes={notes} />);
			expect(wrapper.find("NoteListItem").length).toBe(2);
			expect(wrapper.find("NoteListEmptyItem").length).toBe(0);
		});
		it("should render NoteListEmptyItem if zero note", function() {
			const wrapper = mount(<NoteList notes={[]} />);
			expect(wrapper.find("NoteListEmptyItem").length).toBe(1);
			expect(wrapper.find("NoteListItem").length).toBe(0);

		});
		// 	it('should call set on click',function(){
		// 	//render notelistitem using either notes and session'
		// 	const wrapper=mount(<NoteListItem note={notes[0]} Session={Session}/>);
		// 	//find div and simulate click envent
		// 	wrapper.find('div').simulate('click');

		// 	//expect session.set to have been called with some argument
		// 	expect(Session.set).toHaveBeenCalledWith('selectedNoteId',notes[0]._id);
		// })

	});

}