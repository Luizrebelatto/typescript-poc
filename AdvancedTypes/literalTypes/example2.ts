type AppRoutes = "Home" | "Profile" | "Settings";

function navigateTo(route: AppRoutes) {
  console.log("Go to", route);
}

navigateTo("Profile");
navigateTo("Dashboard"); // Argument of type '"Dashboard"' is not assignable to parameter of type 'AppRoutes'
