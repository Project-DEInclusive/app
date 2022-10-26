/*    Imports    */
import CActionPermission from "../../types/classes/permission/CActionPermission";
import CCollectionAccess from "../../types/classes/permission/CCollectionAccess";
import CRolePermission from "../../types/classes/permission/CRolePermission";
import EUsertype from "../../types/enum/_common/EUsertype";

import defaultpermissions from "../permissions/default";
import signedpermissions from "../permissions/signed";
import regularpermissions from "../permissions/regular";
import verifiedpermissions from "../permissions/verified";
import propermissions from "../permissions/pro";
import adminpermissions from "../permissions/admin";
import superadminpermissions from "../permissions/superadmin";
import blogwriterpermissions from "../permissions/blogwriter";
import blogadminpermissions from "../permissions/blogadmin";
import newswriterpermissions from "../permissions/newswriter";
import newsadminpermissions from "../permissions/newsadmin";
import blognewsadminpermissions from "../permissions/blognewsadmin";

/*  Returns permission object related to given user type    */
const getUserPermission = (userType: EUsertype): CRolePermission => {
    switch (userType) {
        case EUsertype.default:
            return defaultpermissions;
        case EUsertype.signed:
            return signedpermissions;
        case EUsertype.regular:
            return regularpermissions;
        case EUsertype.verified:
            return verifiedpermissions;
        case EUsertype.pro:
            return propermissions;
        case EUsertype.admin:
            return adminpermissions;
        case EUsertype.superadmin:
            return superadminpermissions;

        // news & blog permissions

        case EUsertype.blogwriter:
            return blogwriterpermissions;
        case EUsertype.newswriter:
            return newswriterpermissions;
        case EUsertype.blogadmin:
            return blogadminpermissions;
        case EUsertype.newsadmin:
            return newsadminpermissions;
        case EUsertype.blognewsadmin:
            return blognewsadminpermissions;

        default:
            return new CRolePermission();
    }
};
/*  Returns permission object related to given user type & collection  */
const getUserCollectionPermission = (userType: EUsertype, collection: string): CCollectionAccess<any> => {
    return getUserPermission(userType).collections[collection];
};
/*  Returns CRUD action permission object related to given user type & collection  */
const getUserCollectionActionPermission = (userType: EUsertype, collection: string, action: string): CActionPermission => {
    const collectionAccess = getUserCollectionPermission(userType, collection);
    switch (action) {
        case "read":
            return collectionAccess.read;
        case "create":
            return collectionAccess.create;
        case "update":
            return collectionAccess.update;
        case "delete":
            return collectionAccess.delete;
        default:
            return new CActionPermission("err");
    }
};

export default {
    getUserCollectionActionPermission,
    getUserCollectionPermission,
    getUserPermission,
};
