/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CJob from "../../../types/classes/job/CJob";

import defaultuser from "./default";

// Create permission object for the 'jobpublic' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CJob>();
defaultCollectionAccess.collection = "jobpublic";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CJob>();
signedCollectionAccess.collection = "jobpublic";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CJob>();
regularCollectionAccess.collection = "jobpublic";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CJob>();
verifiedCollectionAccess.collection = "jobpublic";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CJob>();
proCollectionAccess.collection = "jobpublic";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CJob>();
adminCollectionAccess.collection = "jobpublic";
adminCollectionAccess.read = defaultuser.readPermission;
adminCollectionAccess.create = defaultuser.createPermission;
adminCollectionAccess.update = defaultuser.updatePermission;
adminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CJob>();
superadminCollectionAccess.collection = "jobpublic";
superadminCollectionAccess.read = defaultuser.readPermission;
superadminCollectionAccess.create = defaultuser.createPermission;
superadminCollectionAccess.update = defaultuser.updatePermission;
superadminCollectionAccess.delete = defaultuser.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'jobpublic' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CJob>();
blogwriterCollectionAccess.collection = "jobpublic";
blogwriterCollectionAccess.read = defaultuser.readPermission;
blogwriterCollectionAccess.create = defaultuser.createPermission;
blogwriterCollectionAccess.update = defaultuser.updatePermission;
blogwriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CJob>();
newswriterCollectionAccess.collection = "jobpublic";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CJob>();
blogadminCollectionAccess.collection = "jobpublic";
blogadminCollectionAccess.read = defaultuser.readPermission;
blogadminCollectionAccess.create = defaultuser.createPermission;
blogadminCollectionAccess.update = defaultuser.updatePermission;
blogadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CJob>();
newsadminCollectionAccess.collection = "jobpublic";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'jobpublic' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CJob>();
blognewsadminCollectionAccess.collection = "jobpublic";
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
