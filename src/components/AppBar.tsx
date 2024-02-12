import { SearchBar } from "./SearchBar"
import { Signin} from "../components/SignIn"
import { YoutubeIcon } from "./Youtubelogo"
export const AppBar = () =>
{
    return <div className="flex flex-row justify-between">
        <div className="pl-2 pt-1">
            <img src="/logo.jpg" className="w-30 h-20"></img>
        </div>
        <div className="pt-5">
            <SearchBar></SearchBar>
        </div>
        <div className="pr-2 pt-5">
            <Signin></Signin>
        </div>
    </div>
}