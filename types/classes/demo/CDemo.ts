/*    Imports    */
import CUserShort from "../_common/CUserShort";
import EApprovalState from "../../enum/_common/EApprovalState";

// class that stores information about demo requests
export default class CDemo {
    _id?: string;
    title?: string;
    message?: string;

    requester?: CUserShort;

    status: EApprovalState = EApprovalState.default;

    draft: boolean = false;
    deleted: boolean = false;
    createdAt: string = new Date().toISOString();
    updatedAt: string = new Date().toISOString();
}
