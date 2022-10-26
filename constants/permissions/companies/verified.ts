/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";

// Set create permissions for the 'companies' collection for the 'Verified' role
const createPermission = new CActionPermission("create");
createPermission.allowed = true;
createPermission.immutableprops = ["_id", "owner", "draft", "deleted", "status"]; // Define the properties that can't be updated by 'Verified' role
createPermission.hiddenprops = ["__v"]; // Define the properties dont't need send  to the client

// Set read permissions for the 'companies' collection for the 'Verified' role
const readPermission = new CActionPermission("read");
readPermission.allowed = true;
readPermission.immutableprops = ["_id", "owner", "draft", "deleted", "status"]; // Define the properties that can't be updated by 'Verified' role
readPermission.hiddenprops = ["__v"]; // Define the properties dont't need send  to the client
readPermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { ...query, owner: query.invokerid, deleted: false };
};

// Set update permissions for the 'companies' collection for the 'Verified' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = true;
updatePermission.immutableprops = ["_id", "owner", "draft", "deleted", "status"]; // Define the properties that can't be updated by 'Verified' role
updatePermission.hiddenprops = ["__v"]; // Define the properties dont't need send  to the client
updatePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to update the collection
    return { _id: query._id, owner: query.invokerid, deleted: false };
};

// Set delete permissions for the 'companies' collection for the 'Verified' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = true;
deletePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to delete the collection
    return { _id: { $in: query.ids }, owner: query.invokerid };
};

export default { createPermission, readPermission, updatePermission, deletePermission };
