import { AiOutlineLoading3Quarters } from "react-icons/ai";
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
            {data ? (<>
                {numberWithCommas(data.views)}
            </>) : (<>
                <AiOutlineLoading3Quarters className="animate-spin w-3 h-3" />
            </>)}
        </>
    )
}

function numberWithCommas(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default PostViews;