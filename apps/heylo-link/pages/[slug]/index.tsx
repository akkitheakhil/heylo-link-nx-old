import { useQuery } from '@tanstack/react-query';
import { getShortLink } from '../../services/short-url.services';
import { useRouter } from 'next/router';
import { HeyloScreenLoader } from '@heylo-link/frontend/heylo-ui-components';
import { addHttpPrefix, isDataNotEmpty } from '@heylo-link/common/heylo-utilities';

function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  useQuery({
    enabled: isDataNotEmpty(slug),
    queryKey: ["slug", slug],
    retry: false,
    queryFn: () => getShortLink(slug as string),
    onSuccess: shortLink => {
      console.log(shortLink)
      if(shortLink.url) {
        window.location.href = addHttpPrefix(shortLink.url);
      }
    },
    onError: () => {
      window.location.href = '/404';
    }
  });

  return < > { <HeyloScreenLoader /> } </>
}

export default SlugPage;
