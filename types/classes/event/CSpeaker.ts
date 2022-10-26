/*    Imports    */
import CLink from "../_common/CLink";
import CImage from "../_common/CImage";

// class that stores information about event speaker
export default class CSpeaker {
    name?: string;
    description?: string;
    content?: string;

    position?: string;
    thumbnail?: CImage;
    social?: CLink[];
}
