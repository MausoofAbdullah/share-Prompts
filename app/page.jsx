import Feed from "@components/Feed"

const Home=()=>{
    return(
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover new
            <br className="min-md:hidden"/>
            <span className="orange_gradient text-center">
                AI powered prompts
            </span>
            <p className="desc text-center">
                Share prompts is an AI powered open source prompting tool to create powerful prompts
            </p>
            </h1>
            <Feed/>
        </section>
    )
}

export default Home