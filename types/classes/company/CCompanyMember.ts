/*    Imports    */
import CUserShort from "../_common/CUserShort";
import CCompanyShort from "../_common/CCompanyShort";
import EApprovalState from "../../enum/_common/EApprovalState";
import EMemberRole from "../../enum/company/EMemberRole";

// class that stores information about company
export default class CCompanyMember {
    id?: string;
    // companyid?: string;
    // companyname?: string;
    // "company.owner"?: string;

    title?: string;
    message?: string;

    company?: CCompanyShort;
    member?: CUserShort;
    memberrole: EMemberRole = EMemberRole.default;

    ownerapproval: EApprovalState = EApprovalState.default;
    adminapproval: EApprovalState = EApprovalState.default;

    draft: boolean = false;
    deleted: boolean = false;
    createdAt: string = new Date().toISOString();
    updatedAt: string = new Date().toISOString();
}
