/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CBlog from "../../../types/classes/blog/CBlog";

import defaultuser from "./default";
import blogwriter from "./blogwriter";
import admin from "./admin";

// Create permission object for the 'blog' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CBlog>();
defaultCollectionAccess.collection = "blog";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CBlog>();
signedCollectionAccess.collection = "blog";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CBlog>();
regularCollectionAccess.collection = "blog";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CBlog>();
verifiedCollectionAccess.collection = "blog";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CBlog>();
proCollectionAccess.collection = "blog";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CBlog>();
adminCollectionAccess.collection = "blog";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'blog' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CBlog>();
superadminCollectionAccess.collection = "blog";
superadminCollectionAccess.read = admin.readPermission;
superadminCollectionAccess.create = admin.createPermission;
superadminCollectionAccess.update = admin.updatePermission;
superadminCollectionAccess.delete = admin.deletePermission;

/*  blog & news related permissions  */

// Create permission object for the 'blog' collection for the 'BlogWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CBlog>();
blogwriterCollectionAccess.collection = "blog";
blogwriterCollectionAccess.read = blogwriter.readPermission;
blogwriterCollectionAccess.create = blogwriter.createPermission;
blogwriterCollectionAccess.update = blogwriter.updatePermission;
blogwriterCollectionAccess.delete = blogwriter.deletePermission;

// Create permission object for the 'blog' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CBlog>();
newswriterCollectionAccess.collection = "blog";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'BlogAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CBlog>();
blogadminCollectionAccess.collection = "blog";
blogadminCollectionAccess.read = admin.readPermission;
blogadminCollectionAccess.create = admin.createPermission;
blogadminCollectionAccess.update = admin.updatePermission;
blogadminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'blog' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CBlog>();
newsadminCollectionAccess.collection = "blog";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'blog' collection for the 'BlogNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CBlog>();
blognewsadminCollectionAccess.collection = "blog";
blognewsadminCollectionAccess.read = admin.readPermission;
blognewsadminCollectionAccess.create = admin.createPermission;
blognewsadminCollectionAccess.update = admin.updatePermission;
blognewsadminCollectionAccess.delete = admin.deletePermission;

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
