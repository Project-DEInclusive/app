/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CCollection from "../../../types/classes/collection/CCollection";

import defaultuser from "./default";
import admin from "./admin";

// Create permission object for the 'collections' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CCollection>();
defaultCollectionAccess.collection = "collections";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CCollection>();
signedCollectionAccess.collection = "collections";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CCollection>();
regularCollectionAccess.collection = "collections";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CCollection>();
verifiedCollectionAccess.collection = "collections";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CCollection>();
proCollectionAccess.collection = "collections";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CCollection>();
adminCollectionAccess.collection = "collections";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'collections' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CCollection>();
superadminCollectionAccess.collection = "collections";
superadminCollectionAccess.read = admin.readPermission;
superadminCollectionAccess.create = admin.createPermission;
superadminCollectionAccess.update = admin.updatePermission;
superadminCollectionAccess.delete = admin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'collections' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CCollection>();
blogwriterCollectionAccess.collection = "collections";
blogwriterCollectionAccess.read = defaultuser.readPermission;
blogwriterCollectionAccess.create = defaultuser.createPermission;
blogwriterCollectionAccess.update = defaultuser.updatePermission;
blogwriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CCollection>();
newswriterCollectionAccess.collection = "collections";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CCollection>();
blogadminCollectionAccess.collection = "collections";
blogadminCollectionAccess.read = defaultuser.readPermission;
blogadminCollectionAccess.create = defaultuser.createPermission;
blogadminCollectionAccess.update = defaultuser.updatePermission;
blogadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CCollection>();
newsadminCollectionAccess.collection = "collections";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'collections' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CCollection>();
blognewsadminCollectionAccess.collection = "collections";
blognewsadminCollectionAccess.read = defaultuser.readPermission;
blognewsadminCollectionAccess.create = defaultuser.createPermission;
blognewsadminCollectionAccess.update = defaultuser.updatePermission;
blognewsadminCollectionAccess.delete = defaultuser.deletePermission;

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
