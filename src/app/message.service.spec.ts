import {MessageService} from "./message.service";
describe('message service', ()=> {

  // initial state
  it('should have no messages to start', ()=> {
    let message_service = new MessageService();
    // expect(message_service.messages == []);
    // expect(message_service.messages.length == 0);
    // correct---->!
    expect(message_service.messages.length).toEqual(0);
  });

  it('should add a message when add is called', ()=> {
    let message_service = new MessageService();
    let message_length = message_service.messages.length;

    message_service.add('new message');
    expect(message_service.messages.length).toEqual(message_length + 1);

  });
});
