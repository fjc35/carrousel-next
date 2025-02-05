import { useQuery } from 'react-query';

const fetchMedia = async (id: string, accessToken: string) => {
  const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`;

  const res = await fetch(mediaUrl);
  const json = await res.json();

  return {
    permalink: json.permalink,
    mediaUrl: json.media_url,
  };
};

const fetchInstaItems = async (userId: string, accessToken: string) => {
  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;
  const res = await fetch(instaUrl);
  const data = await res.json();

  const fetchedItems = await Promise.all(
    data.data.slice(0, 9).map(async (item: any) => {
      const mediaItem = await fetchMedia(item.id, accessToken);
      return mediaItem;
    })
  );

  return fetchedItems;
};

const InstaGrid = ({ userId, accessToken }: { userId: string; accessToken: string }) => {
  const { data: instaItems, isLoading, error } = useQuery( 
      ['instaItems', userId, accessToken], 
      () => fetchInstaItems(userId, accessToken),
    {
      enabled: !!userId && !!accessToken,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2%' }}>
      {instaItems?.map((item, index) => (
        <img key={index} src={item.mediaUrl} style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }} />
      ))}
    </div>
  );
};

export default InstaGrid;