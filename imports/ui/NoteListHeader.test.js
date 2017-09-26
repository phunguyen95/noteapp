import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { notes } from '../fixtures/fixture';

import { NoteListHeader } from './NoteListHeader';

if (Meteor.isClient) {
  describe('NoteListHeader', function () {
  	let meteorCall;
  	let Session;
  	beforeEach(function(){
  		meteorCall=expect.createSpy();
  		Session={
  			set:expect.createSpy()
  		}
  	});

    it('should call meteorCall on click', function () {
      const wrapper = mount(<NoteListHeader meteorCall={meteorCall} Session={Session}/>);

      wrapper.find('button').simulate('click');
      meteorCall.calls[0].arguments[1](undefined,notes[0]._id);
      expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert'); //dựa theo hàm meteorcall ben notelistheader, notes.insert là tham số đầu tiên => calls]0]
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId',notes[0]._id);
    });
      it('should not set Session for failed insert', function () {
      const wrapper = mount(<NoteListHeader meteorCall={meteorCall} Session={Session}/>);

      wrapper.find('button').simulate('click');
      meteorCall.calls[0].arguments[1]({},undefined);
      expect(meteorCall.calls[0].arguments[0]).toBe('notes.insert'); //dựa theo hàm meteorcall ben notelistheader, notes.insert là tham số đầu tiên => calls]0]
      expect(Session.set).toNotHaveBeenCalled();
    });



  });
}
