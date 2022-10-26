/*    Imports    */
import EUsertype from "../../types/enum/_common/EUsertype";
import type { TMenu } from "../../types/types/menutypes";

import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon, NewspaperIcon, CalendarIcon, LinkIcon, OfficeBuildingIcon, ViewGridIcon, ExclamationIcon } from "@heroicons/react/outline";

// this file is used to define, what should be on the menu in edit mode for each usertype
// the key is the usertype, the value is an array of menu items
const menu: TMenu = {
    // menu items for the 'Default' usertype
    [EUsertype.default as number]: [],
    // menu items for the 'Signed' usertype
    [EUsertype.signed as number]: [],
    // menu items for the 'Regular' usertype
    [EUsertype.regular as number]: [],
    // menu items for the 'Verified' usertype
    [EUsertype.verified as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "My Jobs",
            href: "",
            base: "/editor/jobs",
            icon: BriefcaseIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "My Jobs",
                    href: null,
                },
                {
                    name: "Add Job",
                    href: null,
                },
            ],
        },
        {
            name: "Companies",
            href: "",
            base: "/editor/companies",
            icon: OfficeBuildingIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "My Companies",
                    href: null,
                },
                {
                    name: "Add Company",
                    href: null,
                },
                {
                    name: "Company Members",
                    href: null,
                },
            ],
        },
        // {
        //     name: "My Events",
        //     href: "",
        //     base: "/editor/events",
        //     icon: NewspaperIcon,
        //     current: false,
        //     children: [
        //         {
        //             name: "Overview",
        //             href: null,
        //         },
        //         {
        //             name: "My Events",
        //             href: null,
        //         },
        //         {
        //             name: "Recruit Requests",
        //             href: null,
        //         },
        //         {
        //             name: "Add Event",
        //             href: null,
        //         },
        //     ],
        // },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'Pro' usertype
    [EUsertype.pro as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "My Jobs",
            href: "",
            base: "/editor/jobs",
            icon: BriefcaseIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "My Jobs",
                    href: null,
                },
                {
                    name: "Add Job",
                    href: null,
                },
            ],
        },
        {
            name: "My Events",
            href: "",
            base: "/editor/events",
            icon: NewspaperIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "My Events",
                    href: null,
                },
                {
                    name: "Recruit Requests",
                    href: null,
                },
                {
                    name: "Add Event",
                    href: null,
                },
            ],
        },
        {
            name: "Companies",
            href: "",
            base: "/editor/companies",
            icon: OfficeBuildingIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "My Companies",
                    href: null,
                },
                {
                    name: "Add Company",
                    href: null,
                },
                {
                    name: "Company Members",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'Admin' usertype
    [EUsertype.admin as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "Users",
            href: "",
            base: "/editor/users",
            icon: UserIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Users",
                    href: null,
                },
                {
                    name: "Add User",
                    href: null,
                },
            ],
        },
        {
            name: "Jobs",
            href: "",
            base: "/editor/jobs",
            icon: BriefcaseIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Jobs",
                    href: null,
                },
                {
                    name: "Add Job",
                    href: null,
                },
            ],
        },
        {
            name: "Events",
            href: "",
            base: "/editor/events",
            icon: NewspaperIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Events",
                    href: null,
                },
                {
                    name: "Recruit Requests",
                    href: null,
                },
                {
                    name: "Add Event",
                    href: null,
                },
            ],
        },
        {
            name: "News",
            href: "",
            base: "/editor/news",
            icon: MailIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All News",
                    href: null,
                },
                {
                    name: "Add News",
                    href: null,
                },
            ],
        },
        {
            name: "Blog",
            href: "",
            base: "/editor/blog",
            icon: CalendarIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Blog Posts",
                    href: null,
                },
                {
                    name: "Create Blog Post",
                    href: null,
                },
            ],
        },
        {
            name: "Companies",
            href: "",
            base: "/editor/companies",
            icon: OfficeBuildingIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Companies",
                    href: null,
                },
                {
                    name: "Add Company",
                    href: null,
                },
                {
                    name: "Company Members",
                    href: null,
                },
            ],
        },
        {
            name: "Other",
            href: "",
            base: "/editor/other",
            icon: LinkIcon,
            current: false,
            children: [
                {
                    name: "Contact",
                    href: null,
                },
                {
                    name: "Demo Requests",
                    href: null,
                },
                {
                    name: "Role Verification",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
                {
                    name: "Collections",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'SuperAdmin' usertype
    [EUsertype.superadmin as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "Users",
            href: "",
            base: "/editor/users",
            icon: UserIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Users",
                    href: null,
                },
                {
                    name: "Add User",
                    href: null,
                },
            ],
        },
        {
            name: "Jobs",
            href: "",
            base: "/editor/jobs",
            icon: BriefcaseIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Jobs",
                    href: null,
                },
                {
                    name: "Add Job",
                    href: null,
                },
            ],
        },
        {
            name: "Events",
            href: "",
            base: "/editor/events",
            icon: NewspaperIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Events",
                    href: null,
                },
                {
                    name: "Recruit Requests",
                    href: null,
                },
                {
                    name: "Add Event",
                    href: null,
                },
            ],
        },
        {
            name: "News",
            href: "",
            base: "/editor/news",
            icon: MailIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All News",
                    href: null,
                },
                {
                    name: "Add News",
                    href: null,
                },
            ],
        },
        {
            name: "Blog",
            href: "",
            base: "/editor/blog",
            icon: CalendarIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Blog Posts",
                    href: null,
                },
                {
                    name: "Create Blog Post",
                    href: null,
                },
            ],
        },
        {
            name: "Companies",
            href: "",
            base: "/editor/companies",
            icon: OfficeBuildingIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Companies",
                    href: null,
                },
                {
                    name: "Add Company",
                    href: null,
                },
                {
                    name: "Company Members",
                    href: null,
                },
            ],
        },
        {
            name: "Other",
            href: "",
            base: "/editor/other",
            icon: LinkIcon,
            current: false,
            children: [
                {
                    name: "Contact",
                    href: null,
                },
                {
                    name: "Demo Requests",
                    href: null,
                },
                {
                    name: "Role Verification",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
                {
                    name: "Collections",
                    href: null,
                },
            ],
        },
        {
            name: "System",
            href: "",
            base: "/editor/system",
            icon: ExclamationIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Settings",
                    href: null,
                },
                {
                    name: "DB Recovery",
                    href: null,
                },
                {
                    name: "Logs",
                    href: null,
                },
                {
                    name: "Bug Reports",
                    href: null,
                },
            ],
        },
    ],
    /*  blog & news related permissions  */
    // menu items for the 'BlogWriter' usertype
    [EUsertype.blogwriter as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "My Blogs",
            href: "",
            base: "/editor/blog",
            icon: CalendarIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Blog Posts",
                    href: null,
                },
                {
                    name: "Add Blog Post",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'NewsWriter' usertype
    [EUsertype.newswriter as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "My News",
            href: "",
            base: "/editor/news",
            icon: MailIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All News",

                    href: null,
                },
                {
                    name: "Add News",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'BlogAdmin' usertype
    [EUsertype.blogadmin as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "Blog",
            href: "",
            base: "/editor/blog",
            icon: CalendarIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Blog Posts",
                    href: null,
                },
                {
                    name: "Create Blog Post",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,

            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'NewsAdmin' usertype
    [EUsertype.newsadmin as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,

            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "News",
            href: "",
            base: "/editor/news",
            icon: MailIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All News",
                    href: null,
                },
                {
                    name: "Add News",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
    // menu items for the 'BlogNewsAdmin' usertype
    [EUsertype.blognewsadmin as number]: [
        {
            name: "Dashboard",
            href: "",
            base: "/editor/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "Blog",
            href: "",
            base: "/editor/blog",
            icon: CalendarIcon,

            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Blog Posts",
                    href: null,
                },
                {
                    name: "Create Blog Post",
                    href: null,
                },
            ],
        },
        {
            name: "News",
            href: "",
            base: "/editor/news",
            icon: MailIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All News",
                    href: null,
                },
                {
                    name: "Add News",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/editor/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
            ],
        },
    ],
};

export { menu };
