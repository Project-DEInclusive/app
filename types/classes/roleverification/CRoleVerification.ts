/*    Imports    */
import CUserShort from "../_common/CUserShort";
import EApprovalState from "../../enum/_common/EApprovalState";
import EUsertype from "../../enum/_common/EUsertype";
// class that stores information about recruitment request for an event
export default class CRoleVerification {
    id?: string;

    title?: string;
    message?: string;

    requester?: CUserShort;
    role: EUsertype = EUsertype.default;
    status: EApprovalState = EApprovalState.default;

    draft: boolean = false;
    deleted: boolean = false;
    createdAt: string = new Date().toISOString();
    updatedAt: string = new Date().toISOString();
}
