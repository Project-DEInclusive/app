/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";
import EApprovalState from "../../../types/enum/_common/EApprovalState";

// Set create permissions for the 'companymember' collection for the 'Verified' role
const createPermission = new CActionPermission("create");
createPermission.allowed = true;
createPermission.immutableprops = ["_id", "ownerapproval", "adminapproval", "draft", "deleted"]; // Define the properties that can't be updated by 'Verified' role
createPermission.hiddenprops = ["__v", "company.owner"]; // Define the properties dont't need send  to the client

// Set read permissions for the 'companymember' collection for the 'Verified' role
const readPermission = new CActionPermission("read");
readPermission.allowed = true;
readPermission.immutableprops = ["_id", "company", "ownerapproval", "adminapproval", "title", "message", "draft", "deleted"]; // Define the properties that can't be updated by 'Verified' role
readPermission.hiddenprops = ["__v", "company.owner"]; // Define the properties dont't need send  to the client
readPermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { ...query, $or: [{ "member.id": query.invokerid }, { "company.owner": query.invokerid }], deleted: false };
};

// Set update permissions for the 'companymember' collection for the 'Verified' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = true;
updatePermission.immutableprops = ["_id", "company", "member", "adminapproval", "title", "message", "draft", "deleted"]; // Define the properties that can't be updated by 'Verified' role
updatePermission.hiddenprops = ["__v", "company.owner"]; // Define the properties dont't need send  to the client
updatePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { _id: query._id, "company.owner": query.invokerid, deleted: false };
};

// Set delete permissions for the 'companymember' collection for the 'Verified' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = true;
deletePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to delete the collection
    return { _id: { $in: query.ids }, $or: [{ "member.id": query.invokerid }, { "company.owner": query.invokerid }] };
};

export default { createPermission, readPermission, updatePermission, deletePermission };
