import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Meteor } from "meteor/meteor";
import { NoteListEmptyItem } from "./NoteListEmptyItem";

import { NoteList } from "./NoteList";
const notes = [
	{
		id: "123bc",
		title: "test title",
		body: "",
		updatedAt: 0,
		userId: "userId1"
	},
	{
		id: "noteid2",
		title: "test title",
		body: "",
		updatedAt: 0,
		userId: "userid2"
	}
];
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
	});
}