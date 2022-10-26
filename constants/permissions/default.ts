/*    Imports    */
import CRolePermission from "../../types/classes/permission/CRolePermission";
import EUsertype from "../../types/enum/_common/EUsertype";

import users from "./users";
import jobs from "./jobs";
import collections from "./collections";
import events from "./events";
import recruit from "./recruit";
import companies from "./companies";
import blog from "./blog";
import news from "./news";
import contact from "./contact";
import demo from "./demo";
import roleverification from "./roleverification";

import userpublic from "./userpublic";
import jobpublic from "./jobpublic";
import eventpublic from "./eventpublic";
import companypublic from "./companypublic";
import blogpublic from "./blogpublic";
import newspublic from "./newspublic";

import companymember from "./companymember";

const permissions = new CRolePermission(); // Create a new permissions object for role 'Default'
permissions.role = EUsertype.default; // Set the role of the permissions object
permissions.collections["users"] = users.default; // Set the permissions for the 'users' collection
permissions.collections["jobs"] = jobs.default; // Set the permissions for the 'jobs' collection
permissions.collections["collections"] = collections.default; // Set the permissions for the 'collections' collection
permissions.collections["events"] = events.default; // Set the permissions for the 'events' collection
permissions.collections["recruit"] = recruit.default; // Set the permissions for the 'recruit' collection
permissions.collections["companies"] = companies.default; // Set the permissions for the 'companies' collection
permissions.collections["blog"] = blog.default; // Set the permissions for the 'blog' collection
permissions.collections["news"] = news.default; // Set the permissions for the 'blog' collection
permissions.collections["contact"] = contact.default; // Set the permissions for the 'contact' collection
permissions.collections["demo"] = demo.default; // Set the permissions for the 'demo' collection
permissions.collections["roleverification"] = roleverification.default; // Set the permissions for the 'roleverification' collection

permissions.collections["userpublic"] = userpublic.default; // Set the permissions for the 'userpublic' collection
permissions.collections["jobpublic"] = jobpublic.default; // Set the permissions for the 'jobpublic' collection
permissions.collections["eventpublic"] = eventpublic.default; // Set the permissions for the 'eventpublic' collection
permissions.collections["companypublic"] = companypublic.default; // Set the permissions for the 'companypublic' collection
permissions.collections["blogpublic"] = blogpublic.default; // Set the permissions for the 'blogpublic' collection
permissions.collections["newspublic"] = newspublic.default; // Set the permissions for the 'newspublic' collection

permissions.collections["companymember"] = companymember.default; // Set the permissions for the 'companymember' collection

export default permissions;
