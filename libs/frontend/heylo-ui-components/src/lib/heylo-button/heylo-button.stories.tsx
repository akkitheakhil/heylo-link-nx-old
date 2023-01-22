import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeyloButton } from './heylo-button';
import '../../styles/colors.scss';

const Story: ComponentMeta<typeof HeyloButton> = {
  component: HeyloButton,
  title: 'HeyloButton',
};
export default Story;

const Template: ComponentStory<typeof HeyloButton> = (
  args = { height: '60px' }
) => <HeyloButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: '',
  label: '',
};
