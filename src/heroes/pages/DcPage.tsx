import { HeroList } from "../components"

export const DcPage = () => {
    return (
        <>
            <h1 className="mt-2">DC Comics</h1>
            <HeroList publisher="DC Comics" />
        </>
    )
}