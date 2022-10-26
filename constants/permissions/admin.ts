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

const permissions = new CRolePermission(); // Create a new permissions object for role 'Admin'
permissions.role = EUsertype.admin; // Set the role of the permissions object
permissions.collections["users"] = users.admin; // Set the permissions for the 'users' collection
permissions.collections["jobs"] = jobs.admin; // Set the permissions for the 'jobs' collection
permissions.collections["collections"] = collections.admin; // Set the permissions for the 'collections' collection
permissions.collections["events"] = events.admin; // Set the permissions for the 'events' collection
permissions.collections["recruit"] = recruit.admin; // Set the permissions for the 'recruit' collection
permissions.collections["companies"] = companies.admin; // Set the permissions for the 'companies' collection
permissions.collections["blog"] = blog.admin; // Set the permissions for the 'blog' collection
permissions.collections["news"] = news.admin; // Set the permissions for the 'blog' collection
permissions.collections["contact"] = contact.admin; // Set the permissions for the 'contact' collection
permissions.collections["demo"] = demo.admin; // Set the permissions for the 'demo' collection
permissions.collections["roleverification"] = roleverification.admin; // Set the permissions for the 'roleverification' collection

permissions.collections["userpublic"] = userpublic.admin; // Set the permissions for the 'userpublic' collection
permissions.collections["jobpublic"] = jobpublic.admin; // Set the permissions for the 'jobpublic' collection
permissions.collections["eventpublic"] = eventpublic.admin; // Set the permissions for the 'eventpublic' collection
permissions.collections["companypublic"] = companypublic.admin; // Set the permissions for the 'companypublic' collection
permissions.collections["blogpublic"] = blogpublic.admin; // Set the permissions for the 'blogpublic' collection
permissions.collections["newspublic"] = newspublic.admin; // Set the permissions for the 'newspublic' collection

permissions.collections["companymember"] = companymember.admin; // Set the permissions for the 'companymember' collection

export default permissions;
