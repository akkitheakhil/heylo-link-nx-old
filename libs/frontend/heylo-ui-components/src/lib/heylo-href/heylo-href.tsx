import Link from 'next/link';
import styles from './heylo-href.module.scss';

/* eslint-disable-next-line */
export interface HeyloHrefProps {
  text: string;
  href: string;
  fontSize?: string;
}

export function HeyloHref({ text, href, fontSize }: HeyloHrefProps) {
  return (
    <Link style={{ fontSize: fontSize }} href={href} className={styles['heylo-href']} target={ '_blank'}>
      {text}
    </Link>
  );
}

export default HeyloHref;
