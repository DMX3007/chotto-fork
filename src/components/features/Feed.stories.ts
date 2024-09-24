import type { Meta, StoryObj } from '@storybook/vue3';
 
import Feed from './Feed.vue';
 
const meta: Meta<typeof Feed> = {
  component: Feed,
};
 
export default meta;
type Story = StoryObj<typeof Feed>;

export const Primary: Story = {
  args: {
    objects: [
      { type: "system.date",   messageId: '1', text: 'text', },
      { type: "message.text",  messageId: '2', text: "Привет!", position: 'left', status: 'read', time: '12:30'},
      { type: "message.text",  messageId: '3', text: "Привет!", position: 'right', time: '13:30'},
      { type: "message.image", messageId: '4', url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", time: '14:30', alt: "Example Image", position: 'left'},
      { type: "message.file",  messageId: '5', url: "https://example.com/file.pdf", time: '15:30', filename: "Документ.pdf" },
      { type: "message.text",  messageId: '6', text: "Привет!", direction: 'incoming', time: '16:30', isRead: true},
      { type: "message.image", messageId: '7', url: "https://example.com/image.jpg", time: '17:00', alt: "Example Image", direction: 'outgoing'},
    ],
  },
};


