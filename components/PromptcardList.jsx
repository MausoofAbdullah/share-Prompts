import Promptcard from "./Promptcard"

const PromptcardList=({data,handletagClick})=>{
    
    return(
        <div className="mt-16 prompt_layout">
            {
                data.map((post)=>{
                    return <Promptcard key={post._id} post={post} handletagClick={handletagClick} />
                })
            }
        </div>
    )
}

export default PromptcardList