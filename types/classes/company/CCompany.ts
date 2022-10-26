/*    Imports    */
import CAddress from "../_common/CAddress";
import CLink from "../_common/CLink";
import CImage from "../_common/CImage";

import EApprovalState from "../../enum/_common/EApprovalState";

// class that stores information about company
export default class CCompany {
    id?: string;
    name?: string;
    description?: string;
    content?: string;

    email?: string;
    phone?: string;
    address?: CAddress;
    website?: string;

    social?: CLink[];
    thumbnail?: CImage;
    cover?: CImage;

    status: EApprovalState = EApprovalState.default;
    owner?: string;

    draft: boolean = false;
    deleted: boolean = false;
    createdAt: string = new Date().toISOString();
    updatedAt: string = new Date().toISOString();
}
