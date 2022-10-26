/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";
import EApprovalState from "../../../types/enum/_common/EApprovalState";

// Set create permissions for the 'recruit' collection for the 'Regular' role
const createPermission = new CActionPermission("create");
createPermission.allowed = true;
createPermission.immutableprops = ["_id", "eventownerid", "eventname", "ownerapproval", "adminapproval", "draft", "deleted"]; // Define the properties that can't be updated by 'Regular' role
createPermission.hiddenprops = ["__v", "eventownerid"]; // Define the properties dont't need send  to the client

// Set read permissions for the 'recruit' collection for the 'Regular' role
const readPermission = new CActionPermission("read");
readPermission.allowed = true;
readPermission.immutableprops = ["_id", "eventid", "eventownerid", "eventname", "ownerapproval", "adminapproval", "title", "message", "draft", "deleted"]; // Define the properties that can't be updated by 'Regular' role
readPermission.hiddenprops = ["__v", "eventownerid"]; // Define the properties dont't need send  to the client
readPermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { ...query, requester: { id: query.invokerid }, deleted: false };
};

// Set update permissions for the 'recruit' collection for the 'Regular' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = false;

// Set delete permissions for the 'recruit' collection for the 'Regular' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = true;
deletePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to delete the collection
    return { _id: { $in: query.ids }, requester: { id: query.invokerid }, ownerapproval: EApprovalState.pending, adminapproval: EApprovalState.pending };
};

export default { createPermission, readPermission, updatePermission, deletePermission };
