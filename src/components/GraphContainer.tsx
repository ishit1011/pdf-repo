export default function Graphs({ currGraph }: { currGraph: string }){
    return(
        <div style={{ border: '2px solid black', padding: '10px', borderRadius: '8px' }}>
            {currGraph == null && (
                <div>Select from filter</div>
            )}
            {currGraph == '1' && (
                <div>This tells about influencer post by FORMAT(video/reel/photo)</div>
            )}
            {currGraph == '2' && (
                <div>This tells about influencer post by TOPIC</div>
            )}
            {currGraph == '3' && (
                <div>This tells about influencer post by DAY(Monday,Tuesday,Thursday)</div>
            )}
        </div>
    )
}