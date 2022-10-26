/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CNews from "../../../types/classes/news/CNews";

import defaultuser from "./default";

// Create permission object for the 'newspublic' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CNews>();
defaultCollectionAccess.collection = "newspublic";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CNews>();
signedCollectionAccess.collection = "newspublic";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CNews>();
regularCollectionAccess.collection = "newspublic";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CNews>();
verifiedCollectionAccess.collection = "newspublic";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CNews>();
proCollectionAccess.collection = "newspublic";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CNews>();
adminCollectionAccess.collection = "newspublic";
adminCollectionAccess.read = defaultuser.readPermission;
adminCollectionAccess.create = defaultuser.createPermission;
adminCollectionAccess.update = defaultuser.updatePermission;
adminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CNews>();
superadminCollectionAccess.collection = "newspublic";
superadminCollectionAccess.read = defaultuser.readPermission;
superadminCollectionAccess.create = defaultuser.createPermission;
superadminCollectionAccess.update = defaultuser.updatePermission;
superadminCollectionAccess.delete = defaultuser.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'newspublic' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CNews>();
blogwriterCollectionAccess.collection = "newspublic";
blogwriterCollectionAccess.read = defaultuser.readPermission;
blogwriterCollectionAccess.create = defaultuser.createPermission;
blogwriterCollectionAccess.update = defaultuser.updatePermission;
blogwriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CNews>();
newswriterCollectionAccess.collection = "newspublic";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CNews>();
blogadminCollectionAccess.collection = "newspublic";
blogadminCollectionAccess.read = defaultuser.readPermission;
blogadminCollectionAccess.create = defaultuser.createPermission;
blogadminCollectionAccess.update = defaultuser.updatePermission;
blogadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CNews>();
newsadminCollectionAccess.collection = "newspublic";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'newspublic' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CNews>();
blognewsadminCollectionAccess.collection = "newspublic";
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
