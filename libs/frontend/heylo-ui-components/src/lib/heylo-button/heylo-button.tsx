import styles from './heylo-button.module.scss';
/* eslint-disable-next-line */
export interface HeyloButtonProps {
  height: string;
  label?: string;
  color: 'PRIMARY' | 'SECONDARY';
  width?: string;
  onClick?: (e: any) => void;
}

export function HeyloButton(
  props: HeyloButtonProps = { height: '48px', color: 'PRIMARY' }
) {
  return (
    <button
      onClick={props.onClick}
      style={{ height: props.height, width: props.width }}
      className={[
        styles['container'],
        styles[props.color.toLocaleLowerCase()],
        styles['effect'],
      ].join(' ')}
    >
      {props.label ?? 'BUTTON'}
    </button>
  );
}

export default HeyloButton;
