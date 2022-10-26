// member role types
enum EMemberRole {
    default = 0,
    regular = 1 << 2,
    manager = 1 << 5,
    owner = 1 << 8,
}

export default EMemberRole;
