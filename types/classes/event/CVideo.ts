/*    Imports    */
import CImage from "../_common/CImage";
// class that stores information about event video
export default class CVideo {
    name?: string;
    description?: string;
    content?: string;

    thumbnail?: CImage;
    url?: string;
    provider?: string;
    recorded: boolean = true;
}
