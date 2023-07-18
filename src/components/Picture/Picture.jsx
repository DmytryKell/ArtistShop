import { Image } from "../Picture/Image";
import { useState } from "react"; 
import { pictures } from "../../Assets/picture/pictures";

export function Picture() {
  const [currentPicture, setcurrentPicture] = useState(pictures[0]);
//   console.log(currentPicture.url);

  return (
    <>
      <Image {...{currentPicture}}/>
    </>
  );
}
