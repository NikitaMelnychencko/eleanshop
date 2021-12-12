import { getRefs } from './refs';
//count messages
  
export  function countMessagesAmount() {
    const adviserMessages = getRefs().helpChatModal.querySelectorAll('.adviser-message');
    let amount = 0;
    adviserMessages.forEach(message => {
      amount += 1;
    });
    if (amount > 0) {
      getRefs().chatMessagesAmount.textContent = `${amount}`;
    }
  }