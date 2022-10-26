/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CRoleVerification from "../../../types/classes/roleverification/CRoleVerification";

import defaultuser from "./default";
import regular from "./regular";
import admin from "./admin";

// Create permission object for the 'roleverification' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CRoleVerification>();
defaultCollectionAccess.collection = "roleverification";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'roleverification' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CRoleVerification>();
signedCollectionAccess.collection = "roleverification";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'roleverification' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CRoleVerification>();
regularCollectionAccess.collection = "roleverification";
regularCollectionAccess.read = regular.readPermission;
regularCollectionAccess.create = regular.createPermission;
regularCollectionAccess.update = regular.updatePermission;
regularCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CRoleVerification>();
verifiedCollectionAccess.collection = "roleverification";
verifiedCollectionAccess.read = regular.readPermission;
verifiedCollectionAccess.create = regular.createPermission;
verifiedCollectionAccess.update = regular.updatePermission;
verifiedCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CRoleVerification>();
proCollectionAccess.collection = "roleverification";
proCollectionAccess.read = regular.readPermission;
proCollectionAccess.create = regular.createPermission;
proCollectionAccess.update = regular.updatePermission;
proCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CRoleVerification>();
adminCollectionAccess.collection = "roleverification";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'roleverification' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CRoleVerification>();
superadminCollectionAccess.collection = "roleverification";
superadminCollectionAccess.read = admin.readPermission;
superadminCollectionAccess.create = admin.createPermission;
superadminCollectionAccess.update = admin.updatePermission;
superadminCollectionAccess.delete = admin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'roleverification' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CRoleVerification>();
blogwriterCollectionAccess.collection = "roleverification";
blogwriterCollectionAccess.read = regular.readPermission;
blogwriterCollectionAccess.create = regular.createPermission;
blogwriterCollectionAccess.update = regular.updatePermission;
blogwriterCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CRoleVerification>();
newswriterCollectionAccess.collection = "roleverification";
newswriterCollectionAccess.read = regular.readPermission;
newswriterCollectionAccess.create = regular.createPermission;
newswriterCollectionAccess.update = regular.updatePermission;
newswriterCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CRoleVerification>();
blogadminCollectionAccess.collection = "roleverification";
blogadminCollectionAccess.read = regular.readPermission;
blogadminCollectionAccess.create = regular.createPermission;
blogadminCollectionAccess.update = regular.updatePermission;
blogadminCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CRoleVerification>();
newsadminCollectionAccess.collection = "roleverification";
newsadminCollectionAccess.read = regular.readPermission;
newsadminCollectionAccess.create = regular.createPermission;
newsadminCollectionAccess.update = regular.updatePermission;
newsadminCollectionAccess.delete = regular.deletePermission;

// Create permission object for the 'roleverification' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CRoleVerification>();
blognewsadminCollectionAccess.collection = "roleverification";
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
    // roleverification & news
    blogwriter: blogwriterCollectionAccess,
    newswriter: newswriterCollectionAccess,
    blogadmin: blogadminCollectionAccess,
    newsadmin: newsadminCollectionAccess,
    blognewsadmin: blognewsadminCollectionAccess,
};
