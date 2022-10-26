/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";

// Set create permissions for the 'companymember' collection for the 'SuperAdmin' role
const createPermission = new CActionPermission("create");
createPermission.allowed = true;
createPermission.immutableprops = ["_id", "ownerapproval", "adminapproval", "draft", "deleted"]; // Define the properties that can't be updated by 'SuperAdmin' role
createPermission.hiddenprops = ["__v"]; // Define the properties dont't need send  to the client

// Set read permissions for the 'companymember' collection for the 'SuperAdmin' role
const readPermission = new CActionPermission("read");
readPermission.allowed = true;
readPermission.immutableprops = ["_id", "company", "ownerapproval", "adminapproval", "draft", "deleted"]; // Define the properties that can't be updated by 'SuperAdmin' role
readPermission.hiddenprops = ["__v"]; // Define the properties dont't need send  to the client
readPermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { ...query, deleted: false };
};

// Set update permissions for the 'companymember' collection for the 'SuperAdmin' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = true;
updatePermission.immutableprops = ["_id", "company", "member", "ownerapproval", "draft", "deleted"]; // Define the properties that can't be updated by 'SuperAdmin' role
updatePermission.hiddenprops = ["__v"]; // Define the properties dont't need send  to the client
updatePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { ...query, deleted: false };
};

// Set delete permissions for the 'companymember' collection for the 'SuperAdmin' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = true;
deletePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to delete the collection
    return { _id: { $in: query.ids } };
};

export default { createPermission, readPermission, updatePermission, deletePermission };
