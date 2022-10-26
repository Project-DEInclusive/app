/*    Imports    */
import CAddress from "../_common/CAddress";
import CImage from "../_common/CImage";
import CLink from "../_common/CLink";
import CScheduleItem from "./CScheduleItem";
import CVideo from "./CVideo";
import CTime from "../_common/CTime";
import CRegistration from "../_common/CRegistration";
import CSpeaker from "./CSpeaker";

import EApprovalState from "../../enum/_common/EApprovalState";

// class that stores information about event
export default class CEvent {
    _id?: string;
    name?: string;
    description?: string;
    content?: string;

    category?: string;

    time?: CTime;
    place?: CAddress;
    thumbnail?: CImage;

    schedule?: CScheduleItem[];
    social?: CLink[];
    videos?: CVideo[];
    speakers?: CSpeaker[];
    tags?: string[];

    registration?: CRegistration;

    status: EApprovalState = EApprovalState.default;
    featured: boolean = false;
    owner?: string;

    draft: boolean = false;
    deleted: boolean = false;
    createdAt: string = new Date().toISOString();
    updatedAt: string = new Date().toISOString();

    isOver(): boolean {
        if (!this.time) return false;
        return new Date(this.time.endtime).getTime() < new Date().getTime();
    }
    isResgisationOpen(): boolean {
        if (!this.registration) return false;
        if (this.registration.open && (this.registration.hasstarttime || this.registration.hasendtime)) {
            if (this.registration.hasstarttime && this.registration.time) {
                if (new Date(this.registration.time.starttime).getTime() > new Date().getTime()) return false;
            }
            if (this.registration.hasendtime && this.registration.time) {
                if (new Date(this.registration.time.endtime).getTime() < new Date().getTime()) return false;
            }
            return true;
        } else return this.registration.open;
    }
    isLive(): boolean {
        if (!this.time) return false;
        return new Date(this.time.starttime).getTime() > new Date().getTime() && !this.isOver();
    }
    calculateTimeToStart(): Date {
        if (!this.time) return new Date(0o1, 0, 0);
        return new Date(new Date(this.time.starttime).getTime() - new Date().getTime());
    }
    calculateTimeToEnd(): Date {
        if (!this.time) return new Date(0o1, 0, 0);
        return new Date(new Date(this.time.endtime).getTime() - new Date().getTime());
    }
}
