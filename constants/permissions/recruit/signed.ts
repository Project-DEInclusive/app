/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";

// Set create permissions for the 'recruit' collection for the 'Signed' role
const createPermission = new CActionPermission("create");
createPermission.allowed = false;

// Set read permissions for the 'recruit' collection for the 'Signed' role
const readPermission = new CActionPermission("read");
readPermission.allowed = false;

// Set update permissions for the 'recruit' collection for the 'Signed' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = false;

// Set delete permissions for the 'recruit' collection for the 'Signed' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = false;

export default { createPermission, readPermission, updatePermission, deletePermission };
