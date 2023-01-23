import { HeyloButton } from '@heylo-link/frontend/heylo-ui-components';
import { useRouter } from 'next/router';
import styles from '../../styles/register.module.scss';

export default function RegisterPage() {
  const router = useRouter();

  function handleGoHome() {
    router.push('/');
  }

  return (
    <div className={styles['container']}>
      <h1>
        Thank you for your interest in our app! We appreciate your excitement
        and are working hard to make it available to you as soon as possible.
        Unfortunately, the app is not yet live and we ask that you check back
        later to join. We apologize for any inconvenience and look forward to
        welcoming you as a user soon!
      </h1>

      <HeyloButton color="PRIMARY"  width="300px" height="60px" label="HOME" onClick={handleGoHome} />
    </div>
  );
}
