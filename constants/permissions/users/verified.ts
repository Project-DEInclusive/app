/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";

// Set create permissions for the 'users' collection for the 'Verified' role
const createPermission = new CActionPermission("create");
createPermission.allowed = false;
createPermission.immutableprops = ["_id", "owner", "status", "draft", "deleted", "jobcount", "eventcount", "authid"]; // Define the properties that can't be updated by 'Verified' role
createPermission.hiddenprops = ["__v", "deleted", "authid"]; // Define the properties dont't need send  to the client

// Set read permissions for the 'users' collection for the 'Verified' role
const readPermission = new CActionPermission("read");
readPermission.allowed = true;
readPermission.hiddenprops = ["__v", "deleted", "authid"]; // Define the properties dont't need send  to the client
readPermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { _id: query.invokerid, deleted: false };
};

// Set update permissions for the 'users' collection for the 'Verified' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = true;
updatePermission.immutableprops = ["_id", "owner", "status", "draft", "deleted", "jobcount", "eventcount", "authid"]; // Define the properties that can't be updated by 'Verified' role
updatePermission.hiddenprops = ["__v", "deleted", "authid"]; // Define the properties dont't need send to the client
updatePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to update the collection
    return { _id: query.invokerid, deleted: false };
};

// Set delete permissions for the 'users' collection for the 'Verified' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = false;

export default { createPermission, readPermission, updatePermission, deletePermission };
