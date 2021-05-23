import { v4 as uuidv4 } from "uuid";
import { julien, aline, laetitia, sophie } from "../assets/index";
const data = () => {
  return [
    {
      id: uuidv4(),

      name: "Chaudasse du Reich",
      url: { sophie },
    },
    {
      id: uuidv4(),
      name: "Ju Li1",
      url: { julien },
    },
    {
      id: uuidv4(),

      name: "Laeti Rouxi Du 67 <3",
      url: { laetitia },
    },
    {
      id: uuidv4(),
      name: "Aline Carusso",
      url: { aline },
    },
  ];
};

export default data;
