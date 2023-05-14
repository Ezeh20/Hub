import { GoHome } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlineLiveTv } from "react-icons/md";
import { BiUser } from "react-icons/bi";

const menuDataFixed = [
    {
        id: 1,
        text: 'Home',
        icon: <GoHome />,
        to: `/`
    },
    {
        id: 2,
        text: 'Movie',
        icon: <RiLiveLine />,
        to: `/movie`
    },
    {
        id: 3,
        text: 'Tv',
        icon: <MdOutlineLiveTv />,
        to: `/tv`
    },
    {
        id: 4,
        text: 'People',
        icon: <BiUser />,
        to: `/people`
    }
]

export default menuDataFixed

//GoHome