import Seo from "@/components/Seo";
import { useRouter } from "next/router"

export default function MovieDetail({params}) {
    const [title, id] = params || [];

    console.log(params)
    return (
        <div>
            <Seo title={title} />
        <h4>{title}</h4>
        </div>
    )
}

export function getServerSideProps({params: {params}}) {
    console.log(params)
    return {
        props: {
            params
        }
    }
}