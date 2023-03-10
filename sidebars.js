module.exports = {
  sidebar: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "doc",
      id: "installation",
    },
    {
      type: "category",
      label: "Development",
      collapsed: true,
      items: [
        "development/directory-structure",
        "development/database",
        "development/provider",
      ],
    },
    {
      type: "category",
      label: "Deployment",
      collapsed: true,
      items: [
        "deployment/environment",
        "deployment/subdomain",
      ],
    },
    {
      type: "category",
      label: "Feature",
      collapsed: true,
      items: ["feature/auth", "feature/setting", "feature/coupon&plan"],
    },
  ],
};
