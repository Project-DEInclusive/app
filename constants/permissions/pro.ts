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

const permissions = new CRolePermission(); // Create a new permissions object for role 'Pro'
permissions.role = EUsertype.pro; // Set the role of the permissions object
permissions.collections["users"] = users.pro; // Set the permissions for the 'users' collection
permissions.collections["jobs"] = jobs.pro; // Set the permissions for the 'jobs' collection
permissions.collections["collections"] = collections.pro; // Set the permissions for the 'collections' collection
permissions.collections["events"] = events.pro; // Set the permissions for the 'events' collection
permissions.collections["recruit"] = recruit.pro; // Set the permissions for the 'recruit' collection
permissions.collections["companies"] = companies.pro; // Set the permissions for the 'companies' collection
permissions.collections["blog"] = blog.pro; // Set the permissions for the 'blog' collection
permissions.collections["news"] = news.pro; // Set the permissions for the 'blog' collection
permissions.collections["contact"] = contact.pro; // Set the permissions for the 'contact' collection
permissions.collections["demo"] = demo.pro; // Set the permissions for the 'demo' collection
permissions.collections["roleverification"] = roleverification.pro; // Set the permissions for the 'roleverification' collection

permissions.collections["userpublic"] = userpublic.pro; // Set the permissions for the 'userpublic' collection
permissions.collections["jobpublic"] = jobpublic.pro; // Set the permissions for the 'jobpublic' collection
permissions.collections["eventpublic"] = eventpublic.pro; // Set the permissions for the 'eventpublic' collection
permissions.collections["companypublic"] = companypublic.pro; // Set the permissions for the 'companypublic' collection
permissions.collections["blogpublic"] = blogpublic.pro; // Set the permissions for the 'blogpublic' collection
permissions.collections["newspublic"] = newspublic.pro; // Set the permissions for the 'newspublic' collection

permissions.collections["companymember"] = companymember.pro; // Set the permissions for the 'companymember' collection

export default permissions;
