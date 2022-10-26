/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CContact from "../../../types/classes/contact/CContact";

import defaultuser from "./default";
import admin from "./admin";

// Create permission object for the 'contact' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CContact>();
defaultCollectionAccess.collection = "contact";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CContact>();
signedCollectionAccess.collection = "contact";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CContact>();
regularCollectionAccess.collection = "contact";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CContact>();
verifiedCollectionAccess.collection = "contact";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CContact>();
proCollectionAccess.collection = "contact";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CContact>();
adminCollectionAccess.collection = "contact";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'contact' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CContact>();
superadminCollectionAccess.collection = "contact";
superadminCollectionAccess.read = admin.readPermission;
superadminCollectionAccess.create = admin.createPermission;
superadminCollectionAccess.update = admin.updatePermission;
superadminCollectionAccess.delete = admin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'contact' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CContact>();
blogwriterCollectionAccess.collection = "contact";
blogwriterCollectionAccess.read = defaultuser.readPermission;
blogwriterCollectionAccess.create = defaultuser.createPermission;
blogwriterCollectionAccess.update = defaultuser.updatePermission;
blogwriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CContact>();
newswriterCollectionAccess.collection = "contact";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CContact>();
blogadminCollectionAccess.collection = "contact";
blogadminCollectionAccess.read = defaultuser.readPermission;
blogadminCollectionAccess.create = defaultuser.createPermission;
blogadminCollectionAccess.update = defaultuser.updatePermission;
blogadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CContact>();
newsadminCollectionAccess.collection = "contact";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'contact' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CContact>();
blognewsadminCollectionAccess.collection = "contact";
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
    // contact & news
    blogwriter: blogwriterCollectionAccess,
    newswriter: newswriterCollectionAccess,
    blogadmin: blogadminCollectionAccess,
    newsadmin: newsadminCollectionAccess,
    blognewsadmin: blognewsadminCollectionAccess,
};
