import useSWR from 'swr';

interface Props {
    slug: string;
}

// eslint-disable-next-line no-undef
const fetcher = async (input: RequestInfo) => {
    const res: Response = await fetch(input);
    return await res.json();
};
const PostViews = (props: Props) => {
    const { data } = useSWR(`/api/posts/get_views?slug=${props.slug}`, fetcher);
    return (
        <>
            {data ? (<>{data.views}</>) : (<>0</>)}
        </>
    )
}

export default PostViews;