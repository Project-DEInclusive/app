/*  Importings    */
import { NextApiRequest, NextApiResponse } from "next";
import mongodb from "../../../../../constants/mongodb";
import apiauthresolver from "../../../../../constants/apiauthresolver";
import Company from "../../../../../types/schema/company/SCompany";
import Member from "../../../../../types/schema/company/SCompanyMember";

import permissions from "../../../../../constants/hooks/getPermissions";
import EUsertype from "../../../../../types/enum/_common/EUsertype";
import EApprovalState from "../../../../../types/enum/_common/EApprovalState";
import queryparser from "../../../../../constants/queryparser";

let userType = EUsertype.default; // Collection type
let userId = ""; // User id

/*  API Route Handler   */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const authresp = apiauthresolver.resolveToken(req, res); // Resolve the user type & id4
    if (authresp.success) {
        userType = authresp.user.status;
        userId = authresp.user.id;
    }
    switch (req.method) {
        case "GET":
            await handleGET(req, res); // Handle GET requests
            break;
        case "POST":
            await handlePOST(req, res); // Handle POST requests
            break;
        default:
            return res.status(405).json({ error: "Method not allowed" }); // Handle invaild requests
    }
}

/*  Handle HTTP GET Actions    */
async function handleGET(req: NextApiRequest, res: NextApiResponse) {
    await mongodb.Connect();
    const action = req.query.action;
    switch (action) {
        case "companies":
            if (userId == "") return res.status(400).json({ error: "Invaild token" });
            let count = 0;
            let resp = {};
            var p = permissions.getUserCollectionPermission(userType, "companymember"); // Get the permissions for the current obj
            if (!p.read.allowed) return res.status(403).json({ error: "Forbidden" }); // Check if the obj has the permission to read the collection

            const query = queryparser.Parse(req); // Parse the query string
            let propfilter = p.resolveAndGetMongoSelectQuery(p.read, query.select); // Sanitize the query string according to the permissions
            let searchfilter = p.read.resolve({
                ...query.search,
                invokerid: userId,
                "member.id": userId,
                ownerapproval: EApprovalState.approved,
            }); // Sanitize the search query requesting from the cliet side & check the permissions

            if ((req.query.count && req.query.count === "true") || (req.query.countonly && req.query.countonly === "true"))
                count = await Member.countDocuments({ ...searchfilter }); // Get the count of the data
            if (!req.query.countonly || req.query.countonly === "false") resp = await Member.find({ ...searchfilter }, { ...propfilter }, query.options); // Execute the query

            return res.status(200).json({ values: resp, count: count, itemsperpage: query.options.limit, page: query.options.page });
            break;
        default:
            return res.status(405).json({ error: "Method not allowed" }); // Handle invaild requests
    }
}

/*  Handle HTTP POST Actions    */
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
    const action = req.query.action;
    switch (action) {
        default:
            return res.status(405).json({ error: "Method not allowed" }); // Handle invaild requests
    }
}
