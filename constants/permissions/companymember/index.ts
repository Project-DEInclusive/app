/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CCompanyMember from "../../../types/classes/company/CCompanyMember";

import defaultuser from "./default";
import signed from "./signed";
import regular from "./regular";
import verified from "./verified";
import pro from "./pro";
import admin from "./admin";
import superadmin from "./superadmin";

// Create permission object for the 'companymember' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CCompanyMember>();
defaultCollectionAccess.collection = "companymember";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'companymember' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CCompanyMember>();
signedCollectionAccess.collection = "companymember";
signedCollectionAccess.read = signed.readPermission;
signedCollectionAccess.create = signed.createPermission;
signedCollectionAccess.update = signed.updatePermission;
signedCollectionAccess.delete = signed.deletePermission;

// Create permission object for the 'companymember' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CCompanyMember>();
regularCollectionAccess.collection = "companymember";
regularCollectionAccess.read = regular.readPermission;
regularCollectionAccess.create = regular.createPermission;
regularCollectionAccess.update = regular.updatePermission;
regularCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'companymember' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CCompanyMember>();
verifiedCollectionAccess.collection = "companymember";
verifiedCollectionAccess.read = verified.readPermission;
verifiedCollectionAccess.create = verified.createPermission;
verifiedCollectionAccess.update = verified.updatePermission;
verifiedCollectionAccess.delete = verified.deletePermission;

// Create permission object for the 'companymember' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CCompanyMember>();
proCollectionAccess.collection = "companymember";
proCollectionAccess.read = pro.readPermission;
proCollectionAccess.create = pro.createPermission;
proCollectionAccess.update = pro.updatePermission;
proCollectionAccess.delete = pro.deletePermission;

// Create permission object for the 'companymember' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CCompanyMember>();
adminCollectionAccess.collection = "companymember";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'companymember' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CCompanyMember>();
superadminCollectionAccess.collection = "companymember";
superadminCollectionAccess.read = superadmin.readPermission;
superadminCollectionAccess.create = superadmin.createPermission;
superadminCollectionAccess.update = superadmin.updatePermission;
superadminCollectionAccess.delete = superadmin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'companymember' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CCompanyMember>();
blogwriterCollectionAccess.collection = "companymember";
blogwriterCollectionAccess.read = regular.readPermission;
blogwriterCollectionAccess.create = regular.createPermission;
blogwriterCollectionAccess.update = regular.updatePermission;
blogwriterCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'companymember' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CCompanyMember>();
newswriterCollectionAccess.collection = "companymember";
newswriterCollectionAccess.read = regular.readPermission;
newswriterCollectionAccess.create = regular.createPermission;
newswriterCollectionAccess.update = regular.updatePermission;
newswriterCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'companymember' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CCompanyMember>();
blogadminCollectionAccess.collection = "companymember";
blogadminCollectionAccess.read = regular.readPermission;
blogadminCollectionAccess.create = regular.createPermission;
blogadminCollectionAccess.update = regular.updatePermission;
blogadminCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'companymember' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CCompanyMember>();
newsadminCollectionAccess.collection = "companymember";
newsadminCollectionAccess.read = regular.readPermission;
newsadminCollectionAccess.create = regular.createPermission;
newsadminCollectionAccess.update = regular.updatePermission;
newsadminCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'companymember' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CCompanyMember>();
blognewsadminCollectionAccess.collection = "companymember";
blognewsadminCollectionAccess.read = regular.readPermission;
blognewsadminCollectionAccess.create = regular.createPermission;
blognewsadminCollectionAccess.update = regular.updatePermission;
blognewsadminCollectionAccess.delete = regular.deletePermission;

export default {
    default: defaultCollectionAccess,
    signed: signedCollectionAccess,
    regular: regularCollectionAccess,
    verified: verifiedCollectionAccess,
    pro: proCollectionAccess,
    admin: adminCollectionAccess,
    superadmin: superadminCollectionAccess,
    // blog & news
    blogwriter: blogwriterCollectionAccess,
    newswriter: newswriterCollectionAccess,
    blogadmin: blogadminCollectionAccess,
    newsadmin: newsadminCollectionAccess,
    blognewsadmin: blognewsadminCollectionAccess,
};
