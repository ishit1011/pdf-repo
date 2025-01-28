import PostFormat from "./graphs/formatGraph"
import PostDay from "./graphs/dayGraph"
import PostTopic from "./graphs/topicGraph"
// import { dummyData } from "@/types/chartTypes"

export default function Graphs({ currGraph }: { currGraph: string }){
    return(
        <div style={{ border: '2px solid black', padding: '10px', borderRadius: '8px' }}>
            {currGraph == null && (
                <div>Select from filter</div>
            )}
            {currGraph == '1' && (
                <PostFormat />
            )}
            {currGraph == '2' && (
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <PostTopic />
                </div> 
            )}
            {currGraph == '3' && (
                <PostDay/>
            )}
        </div>
    )
}