import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeyloInput } from './heylo-input';

const Story: ComponentMeta<typeof HeyloInput> = {
  component: HeyloInput,
  title: 'HeyloInput',
};
export default Story;

const Template: ComponentStory<typeof HeyloInput> = (args) => (
  <HeyloInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '',
};
