import { AiFillHome, AiOutlineTeam, AiTwotoneFolderOpen, AiFillCalendar, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoDiamond } from "react-icons/io5";

export const sidebarList = [
  {
    icon: <AiFillHome />,
    title: "Home"
  },
  {
    icon: <AiOutlineTeam />,
    title: "Team"
  },
  {
    icon: <AiTwotoneFolderOpen />,
    title: "Projects"
  },
  {
    icon: <AiFillCalendar />,
    title: "Calendar"
  },
  {
    icon: <HiClipboardDocumentList />,
    title: "Documents"
  }
]

export const icons = [<AiFillFacebook />, <AiOutlineTwitter />, <AiFillLinkedin />, <IoDiamond />]
