import styles from '../styles/index.module.scss';
import {
  HeyloButton,
  HeyloHref,
  HeyloInput,
  HeyloLoader,
  HeyloLogo,
  HeyloSnackbar,
} from '@heylo-link/frontend/heylo-ui-components';
import { createNewShortLink } from '../lib/api-services';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();

  const [hasCopied, setCopied] = useState(false);


  function handleJoin() {
    router.push('/register');
  }
  const urlLink = useRef<HTMLInputElement>();
  const { isLoading, data, error, mutate } = useMutation({
    mutationFn: createNewShortLink,
  });

  function handleCreateLink() {
    const inputVal = urlLink.current.value;
    if (inputVal) {
      mutate(inputVal);
    }
  }

  function handleCopyText() {
    if (data.slug) {
      setCopied(true);
      const url = `${process.env.NEXT_PUBLIC_APP_HOST}${data.slug}`;
      navigator.clipboard.writeText(url);
    }
  }

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <HeyloLogo text="Heylo Link" />
          <HeyloHref
            fontSize="24px"
            href="/register"
            text="Register"
            target={'_self'}
          />
        </div>
        <div className={styles['main-content']}>
          <h1 className={styles['title']}> Short URLs and Landing pages </h1>
          <div className={styles['form-container']}>
            <HeyloInput
              input={{
                placeholder: 'URL to short | e.g: https://heylo.link',
                ref: urlLink,
              }}
            ></HeyloInput>

            <HeyloButton
              onClick={handleCreateLink}
              color="PRIMARY"
              label="GENERATE"
              height={'60px'}
            />
          </div>

          {isLoading && (
            <div className={styles['loading-indicator']}>
              <HeyloLoader />
            </div>
          )}

          {data?.slug && (
            <div className={styles['terminal']} onClick={handleCopyText}>
              <pre>{`${process.env.NEXT_PUBLIC_APP_HOST}${data.slug}`}</pre>
            </div>
          )}

          {error && (
            <div className={styles['terminal']}>
              <pre> Please enter a valid URL </pre>
            </div>
          )}

          <h3 className={styles['sub-title']}>
            Want to create custom short URLs and personal landing page?
          </h3>
          <div className={styles['action']}>
            <HeyloButton
              width="248px"
              color="SECONDARY"
              label="Join now"
              height={'60px'}
              onClick={handleJoin}
            />
          </div>
        </div>
      </div>
      <HeyloSnackbar
        duration={5000}
        message="Short URL copied to clipboard!"
        isOpen={hasCopied}
        onClose={() => setCopied(false)}
      />
    </>
  );
}

export default Index;
