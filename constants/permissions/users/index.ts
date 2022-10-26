/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CUser from "../../../types/classes/user/CUser";

import defaultuser from "./default";
import signed from "./signed";
import regular from "./regular";
import verified from "./verified";
import pro from "./pro";
import admin from "./admin";
import superadmin from "./superadmin";

// Create permission object for the 'users' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CUser>();
defaultCollectionAccess.collection = "users";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'users' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CUser>();
signedCollectionAccess.collection = "users";
signedCollectionAccess.read = signed.readPermission;
signedCollectionAccess.create = signed.createPermission;
signedCollectionAccess.update = signed.updatePermission;
signedCollectionAccess.delete = signed.deletePermission;

// Create permission object for the 'users' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CUser>();
regularCollectionAccess.collection = "users";
regularCollectionAccess.read = regular.readPermission;
regularCollectionAccess.create = regular.createPermission;
regularCollectionAccess.update = regular.updatePermission;
regularCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'users' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CUser>();
verifiedCollectionAccess.collection = "users";
verifiedCollectionAccess.read = verified.readPermission;
verifiedCollectionAccess.create = verified.createPermission;
verifiedCollectionAccess.update = verified.updatePermission;
verifiedCollectionAccess.delete = verified.deletePermission;

// Create permission object for the 'users' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CUser>();
proCollectionAccess.collection = "users";
proCollectionAccess.read = pro.readPermission;
proCollectionAccess.create = pro.createPermission;
proCollectionAccess.update = pro.updatePermission;
proCollectionAccess.delete = pro.deletePermission;

// Create permission object for the 'users' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CUser>();
adminCollectionAccess.collection = "users";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'users' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CUser>();
superadminCollectionAccess.collection = "users";
superadminCollectionAccess.read = superadmin.readPermission;
superadminCollectionAccess.create = superadmin.createPermission;
superadminCollectionAccess.update = superadmin.updatePermission;
superadminCollectionAccess.delete = superadmin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'users' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CUser>();
blogwriterCollectionAccess.collection = "users";
blogwriterCollectionAccess.read = regular.readPermission;
blogwriterCollectionAccess.create = regular.createPermission;
blogwriterCollectionAccess.update = regular.updatePermission;
blogwriterCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'users' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CUser>();
newswriterCollectionAccess.collection = "users";
newswriterCollectionAccess.read = regular.readPermission;
newswriterCollectionAccess.create = regular.createPermission;
newswriterCollectionAccess.update = regular.updatePermission;
newswriterCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'users' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CUser>();
blogadminCollectionAccess.collection = "users";
blogadminCollectionAccess.read = regular.readPermission;
blogadminCollectionAccess.create = regular.createPermission;
blogadminCollectionAccess.update = regular.updatePermission;
blogadminCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'users' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CUser>();
newsadminCollectionAccess.collection = "users";
newsadminCollectionAccess.read = regular.readPermission;
newsadminCollectionAccess.create = regular.createPermission;
newsadminCollectionAccess.update = regular.updatePermission;
newsadminCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'users' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CUser>();
blognewsadminCollectionAccess.collection = "users";
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
