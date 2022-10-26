/*    Imports    */
import CCollectionAccess from "../../../types/classes/permission/CCollectionAccess";
import CNews from "../../../types/classes/news/CNews";

import defaultuser from "./default";
import blogwriter from "./newswriter";
import admin from "./admin";

// Create permission object for the 'news' collection for the 'Default' role
const defaultCollectionAccess = new CCollectionAccess<CNews>();
defaultCollectionAccess.collection = "news";
defaultCollectionAccess.read = defaultuser.readPermission;
defaultCollectionAccess.create = defaultuser.createPermission;
defaultCollectionAccess.update = defaultuser.updatePermission;
defaultCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'Signed' role
const signedCollectionAccess = new CCollectionAccess<CNews>();
signedCollectionAccess.collection = "news";
signedCollectionAccess.read = defaultuser.readPermission;
signedCollectionAccess.create = defaultuser.createPermission;
signedCollectionAccess.update = defaultuser.updatePermission;
signedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'Regular' role
const regularCollectionAccess = new CCollectionAccess<CNews>();
regularCollectionAccess.collection = "news";
regularCollectionAccess.read = defaultuser.readPermission;
regularCollectionAccess.create = defaultuser.createPermission;
regularCollectionAccess.update = defaultuser.updatePermission;
regularCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'Verified' role
const verifiedCollectionAccess = new CCollectionAccess<CNews>();
verifiedCollectionAccess.collection = "news";
verifiedCollectionAccess.read = defaultuser.readPermission;
verifiedCollectionAccess.create = defaultuser.createPermission;
verifiedCollectionAccess.update = defaultuser.updatePermission;
verifiedCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'Pro' role
const proCollectionAccess = new CCollectionAccess<CNews>();
proCollectionAccess.collection = "news";
proCollectionAccess.read = defaultuser.readPermission;
proCollectionAccess.create = defaultuser.createPermission;
proCollectionAccess.update = defaultuser.updatePermission;
proCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'Admin' role
const adminCollectionAccess = new CCollectionAccess<CNews>();
adminCollectionAccess.collection = "news";
adminCollectionAccess.read = admin.readPermission;
adminCollectionAccess.create = admin.createPermission;
adminCollectionAccess.update = admin.updatePermission;
adminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'news' collection for the 'SuperAdmin' role
const superadminCollectionAccess = new CCollectionAccess<CNews>();
superadminCollectionAccess.collection = "news";
superadminCollectionAccess.read = admin.readPermission;
superadminCollectionAccess.create = admin.createPermission;
superadminCollectionAccess.update = admin.updatePermission;
superadminCollectionAccess.delete = admin.deletePermission;

/*  news & news related permissions  */

// Create permission object for the 'news' collection for the 'NewsWriter' role
const blogwriterCollectionAccess = new CCollectionAccess<CNews>();
blogwriterCollectionAccess.collection = "news";
blogwriterCollectionAccess.read = blogwriter.readPermission;
blogwriterCollectionAccess.create = blogwriter.createPermission;
blogwriterCollectionAccess.update = blogwriter.updatePermission;
blogwriterCollectionAccess.delete = blogwriter.deletePermission;

// Create permission object for the 'news' collection for the 'NewsWriter' role
const newswriterCollectionAccess = new CCollectionAccess<CNews>();
newswriterCollectionAccess.collection = "news";
newswriterCollectionAccess.read = defaultuser.readPermission;
newswriterCollectionAccess.create = defaultuser.createPermission;
newswriterCollectionAccess.update = defaultuser.updatePermission;
newswriterCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'NewsAdmin' role
const blogadminCollectionAccess = new CCollectionAccess<CNews>();
blogadminCollectionAccess.collection = "news";
blogadminCollectionAccess.read = admin.readPermission;
blogadminCollectionAccess.create = admin.createPermission;
blogadminCollectionAccess.update = admin.updatePermission;
blogadminCollectionAccess.delete = admin.deletePermission;

// Create permission object for the 'news' collection for the 'NewsAdmin' role
const newsadminCollectionAccess = new CCollectionAccess<CNews>();
newsadminCollectionAccess.collection = "news";
newsadminCollectionAccess.read = defaultuser.readPermission;
newsadminCollectionAccess.create = defaultuser.createPermission;
newsadminCollectionAccess.update = defaultuser.updatePermission;
newsadminCollectionAccess.delete = defaultuser.deletePermission;

// Create permission object for the 'news' collection for the 'NewsNewsAdmin' role
const blognewsadminCollectionAccess = new CCollectionAccess<CNews>();
blognewsadminCollectionAccess.collection = "news";
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
    // news & news
    blogwriter: blogwriterCollectionAccess,
    newswriter: newswriterCollectionAccess,
    blogadmin: blogadminCollectionAccess,
    newsadmin: newsadminCollectionAccess,
    blognewsadmin: blognewsadminCollectionAccess,
};
