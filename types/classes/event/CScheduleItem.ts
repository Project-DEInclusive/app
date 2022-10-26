/*    Imports    */
import CImage from "../_common/CImage";
import CAddress from "../_common/CAddress";
import CTime from "../_common/CTime";
import CSpeaker from "./CSpeaker";

// class that stores information about event schedule
export default class CScheduleItem {
    name?: string;
    description?: string;
    content?: string;
    thumbnail?: CImage;

    time?: CTime;
    place?: CAddress;

    speakers?: CSpeaker[];
}
