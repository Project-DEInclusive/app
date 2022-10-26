/*    Imports    */
import CUserShort from "../_common/CUserShort";
import EApprovalState from "../../enum/_common/EApprovalState";
// class that stores information about recruitment request for an event
export default class CRecruit {
    id?: string;
    eventid?: string;
    eventname?: string;
    eventownerid?: string;

    title?: string;
    message?: string;

    requester?: CUserShort;

    ownerapproval: EApprovalState = EApprovalState.default;
    adminapproval: EApprovalState = EApprovalState.default;

    draft: boolean = false;
    deleted: boolean = false;
    createdAt: string = new Date().toISOString();
    updatedAt: string = new Date().toISOString();
}
