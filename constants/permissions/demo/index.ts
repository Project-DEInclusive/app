/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CDemo from "../../../types/classes/demo/CDemo";

import defaultuser from "./default";
import admin from "./admin";

// Create permission object for the 'demo' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CDemo>();
defaultCollectionAccess.collection = "demo";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CDemo>();
signedCollectionAccess.collection = "demo";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CDemo>();
regularCollectionAccess.collection = "demo";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CDemo>();
verifiedCollectionAccess.collection = "demo";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CDemo>();
proCollectionAccess.collection = "demo";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CDemo>();
adminCollectionAccess.collection = "demo";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'demo' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CDemo>();
superadminCollectionAccess.collection = "demo";
superadminCollectionAccess.read = admin.readPermission;
superadminCollectionAccess.create = admin.createPermission;
superadminCollectionAccess.update = admin.updatePermission;
superadminCollectionAccess.delete = admin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'demo' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CDemo>();
blogwriterCollectionAccess.collection = "demo";
blogwriterCollectionAccess.read = defaultuser.readPermission;
blogwriterCollectionAccess.create = defaultuser.createPermission;
blogwriterCollectionAccess.update = defaultuser.updatePermission;
blogwriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CDemo>();
newswriterCollectionAccess.collection = "demo";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CDemo>();
blogadminCollectionAccess.collection = "demo";
blogadminCollectionAccess.read = defaultuser.readPermission;
blogadminCollectionAccess.create = defaultuser.createPermission;
blogadminCollectionAccess.update = defaultuser.updatePermission;
blogadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CDemo>();
newsadminCollectionAccess.collection = "demo";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'demo' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CDemo>();
blognewsadminCollectionAccess.collection = "demo";
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
    // demo & news
    blogwriter: blogwriterCollectionAccess,
    newswriter: newswriterCollectionAccess,
    blogadmin: blogadminCollectionAccess,
    newsadmin: newsadminCollectionAccess,
    blognewsadmin: blognewsadminCollectionAccess,
};
